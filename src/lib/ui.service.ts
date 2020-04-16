import { get } from 'node-emoji';
const chalk = require('chalk');
const figlet = require('figlet');
const CLI = require('clui');
const ora = require('ora');

export const EMOJIS = {
    KEY: get('key'),
    LOCK: get('lock'),
    UNLOCK: get('unlock'),
    LOCK_PEN: get('lock_with_ink_pen'),
    LOCK_KEY: get('closed_lock_with_key'),
    PERSON: get('bust_in_silhouette'),
    EMAIL: get('email'),
    PAGE: get('page_facing_up'),
    SERVER: get('desktop_computer'),
    INFO_DESK: get('information_desk_person'),
    RED_CIRCLE: get('red_circle'),
    TICK_MARK: get('white_check_mark'),
    EXCLAMATION: get('heavy_exclamation_mark'),
    WARNING: get('warning'),
    RELIEVED: get('relieved'),
    CONFUSED: get('confused'),
    SMILE: get('slightly_smiling_face'),
    HOURGLASS: get('hourglass_flowing_sand'),
    CABINET: get('file_cabinet'),
    HEART: get('heart'),
    COFFEE: get('coffee'),
    BEER: get('beer'),
    BROKEN_HEART: get('broken_heart'),
    CRYING: get('crying_cat_face'),
    HEART_EYES: get('heart_eyes_cat'),
    JOY: get('joy_cat'),
    KISSING: get('kissing_cat'),
    SCREAM: get('scream_cat'),
    ROCKET: get('rocket'),
    SMIRK: get('smirk_cat'),
    RAISED_HANDS: get('raised_hands'),
    POINT_RIGHT: get('point_right'),
    ZAP: get('zap'),
    BOOM: get('boom'),
    PRAY: get('pray'),
    WINE: get('wine_glass'),
};

export const MESSAGES = {
    WELCOME: `${chalk.redBright(figlet.textSync('sphinx-cli', { horizontalLayout: 'full' }))}`,
    ASK_EMAIL: `${EMOJIS.EMAIL}  Enter your registered e-mail address:`,
    ASK_EMAIL_ERR: `${EMOJIS.RED_CIRCLE}  ${chalk.red('Please enter a valid e-mail address.')}`,
    ASK_PWD: `${EMOJIS.KEY} ${chalk.greenBright('Enter your password:')}`,
    ASK_SERVER_ADDRS: `${EMOJIS.SERVER}  Enter full address of the sphinx server:`,
    ASK_SERVER_ADDRS_ERR: `${EMOJIS.RED_CIRCLE}  ${chalk.red('Please enter a valid url')}`,
    ASK_NAME: `${EMOJIS.INFO_DESK}  Enter your name:`,
    KEY_ROTATION_WARNING: `${EMOJIS.WARNING}  ${chalk.redBright("WARNING: You won't be able to read your existing secrets after key rotation")}`,
    ASK_SURE: `${chalk.yellowBright('Are you sure you want to proceed?')}`,
    KEY_ROTATION_SUCCESS: `${EMOJIS.TICK_MARK}  ${chalk.greenBright('Key rotation successfull')}`,
    KEY_ROTATION_ABORT: `${EMOJIS.RELIEVED}  ${chalk.greenBright('Key rotation aborted')}`,
    INVALID_INPUT: `${EMOJIS.RED_CIRCLE}  ${chalk.red('Invalid input')}`,
    SECRET_SUCCESS: `${EMOJIS.TICK_MARK}  ${chalk.greenBright('Secret created successfull')}`,
    READ_SECRET_SUCCESS: `${EMOJIS.UNLOCK}  ${chalk.greenBright('Secret decrypted. Copied to clipboard')}`,
    ASK_RECIPIENT: `${EMOJIS.EMAIL}  Enter recipient's e-mail address:`,
    ASK_SECRET_NAME: `${EMOJIS.PAGE}  Enter secret's name:`,
    ASK_SECRET: `${EMOJIS.LOCK_PEN} ${chalk.greenBright('Enter secret:')}`,
    ASK_DESC: `${EMOJIS.PAGE}  Enter a short description (optional):`,
    ASK_TTL: `${EMOJIS.HOURGLASS}  Enter secret's ttl in days ${chalk.cyanBright('(default: 3 Days)')} :`,
    ASK_SELECT_SECRET: `${EMOJIS.LOCK_KEY} ${chalk.greenBright('Select a secret to read:')}`,
    ASK_NEW_PWD: `${chalk.cyan('Enter a new password:')}`,
    ASK_CONFIRM_PWD: `${chalk.cyan('Confirm new password:')}`,
    PWD_MATCH_ERR: `${EMOJIS.EXCLAMATION}  ${chalk.red('Passwords do not match')}`,
    PWD_CHANGE_SUCCESS: `${EMOJIS.TICK_MARK}  ${chalk.greenBright('Password changed successfully')}`,
    NAME_CHANGE_SUCCESS: `${EMOJIS.TICK_MARK}  ${chalk.greenBright('Name changed successfully')}`,
    LIST_MEM_WAIT: `${EMOJIS.PERSON}  Fetching members...`,
    LIST_SECRET_WAIT: `${EMOJIS.CABINET}  Fetching secrets...`,
    KEY_ROTATION_WAIT: `${EMOJIS.KEY}  Generating new keys...`,
    CREATE_SECRET_WAIT: `${EMOJIS.LOCK_PEN}  Encrypting secret...`,
    READ_SECRET_WAIT: `${EMOJIS.LOCK_KEY}  Decrypting secret...`,
    SECRET_CHOICE: (secret: any) => { return `${EMOJIS.LOCK} ${secret.secretName} ${EMOJIS.EMAIL}  ${chalk.whiteBright(secret.creatorEmail)}`},
    RESOURCE_INVALID: (res: string) => {return `${EMOJIS.CONFUSED}  ` + chalk.red(`Invalid <resource> type ${chalk.redBright(res)}`)},
}

// TODO: Move spinner logic to method decorator
export const Spinner = (): any => {
    return ora({ spinner: 'point' });
}