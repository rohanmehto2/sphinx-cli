import { rest } from "./rest-client.service";
import { config } from "./conf.service";
import { MESSAGES } from "./ui.service";
import { verify } from "jsonwebtoken";
import { crypto } from "./crypto.service";
import { userService } from "./user.service";

const keytar = require('keytar');
const os = require('os');
const log = console.log;

export class AuthService {

    private readonly keytarAccount = os.userInfo().username;

    async login(credentials: any): Promise<boolean> {
        const tokens = await rest.httpPost('/login', credentials);
        if (tokens == null) return false
        config.setJwtPublicKey(tokens.jwtPublicKey);
        await this.setRefreshToken(tokens.refreshToken);
        await this.setAccessToken(tokens.accessToken);
        if (!(await crypto.keyExists())) {
            await userService.setUpKeys();
        }
        return true
    }

    async logout(): Promise<void> {
        const refreshToken = await this.getRefreshToken();
        await rest.httpPost('/logout', { refreshToken });
        await userService.cleanUpKeys();
        await this.deleteRefreshToken();
        await this.deleteAccessToken();
    }

    async getAccessToken(): Promise<string> {
        return await keytar.getPassword('sphinxAccessToken', this.keytarAccount);
    }

    async getRefreshToken(): Promise<string> {
        return await keytar.getPassword('sphinxRefreshToken', this.keytarAccount);
    }

    async setAccessToken(token: string): Promise<void> {
        await keytar.setPassword('sphinxAccessToken', this.keytarAccount, token);
    }

    async setRefreshToken(token: string): Promise<void> {
        await keytar.setPassword('sphinxRefreshToken', this.keytarAccount, token);
    }

    async deleteAccessToken(): Promise<void> {
        await keytar.deletePassword('sphinxAccessToken', this.keytarAccount);
    }

    async deleteRefreshToken(): Promise<void> {
        await keytar.deletePassword('sphinxRefreshToken', this.keytarAccount);
    }

    async fetchAccessToken(): Promise<boolean> {
        try {
            const refreshToken = await this.getRefreshToken();
            const token = await rest.httpPost('/token', { refreshToken });
            await this.setAccessToken(token.accessToken);
            return true
        } catch (err) {
            if (err.message == 'refreshTokenExpired') {
                await this.logout();
                log(MESSAGES.LOGGED_OUT);
            }
            return false;
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            if (await this.getAccessToken() == null) {
                log(MESSAGES.LOGIN_REQ);
                return false;
            }
            const publicKey = Buffer.from(config.getJwtPublicKey(), 'utf8');
            const accessToken = await this.getAccessToken();
            const payload = await verify(accessToken, publicKey);
            return true;
        } catch (err) {
            if (err.name == 'TokenExpiredError') {
                const tokenUpdated = await this.fetchAccessToken();
                if (!tokenUpdated) {
                    return false;
                }
                return await this.isLoggedIn();
            }
            log(MESSAGES.NOT_LOGGED_IN);
            return false;
        }
    }

    async verifyPassword(password: string): Promise<boolean> {
        try {
            const verified = await rest.httpPost('/verify', { password });
            if (verified)
                return true;
            return false;
        } catch (err) {
            return false;
        }
    }
}

export const authService = new AuthService();