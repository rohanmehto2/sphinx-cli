import { get } from 'node-emoji';
const chalk = require('chalk');

export const EMOJIS = {
    KEY: get('key'),
    LOCK: get('lock'),
    UNLOCK: get('unlock'),
    LOCK_PEN: get('lock_with_ink_pen'),
    LOCK_KEY: get('closed_lock_with_key'),
    PERSON: get('bust_in_silhouette'),
    EMAIL: get('email'),
    PAGE: get('page_facing_up'),
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
    ASK_EMAIL: `${EMOJIS.EMAIL}  Enter your registered e-mail address:`,
    ASK_EMAIL_ERR: `${chalk.red('Please enter your username or e-mail address.')}`,
    ASK_PWD: `${EMOJIS.KEY} ${chalk.greenBright('Enter your password:')}`,
    ASK_PWD_ERR: `${chalk.red('Please enter your password')}`,
    ASK_SERVER_ADDRS: `${EMOJIS.EMAIL}  Enter your registered e-mail address:`,
    ASK_SERVER_ADDRS_ERR: `${chalk.red('Please enter a valid url')}`,
    ASK_NAME: `${EMOJIS.EMAIL}  Enter your name:`,
    INVALID_INPUT: `${chalk.red('Invalid input')}`,
    RESOURCE_INVALID: (res: string) => {return chalk.red(`Invalid <resource> type ${chalk.redBright(res)}`)},
}