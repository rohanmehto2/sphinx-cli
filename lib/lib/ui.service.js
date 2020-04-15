"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_emoji_1 = require("node-emoji");
var chalk = require('chalk');
exports.EMOJIS = {
    KEY: node_emoji_1.get('key'),
    LOCK: node_emoji_1.get('lock'),
    UNLOCK: node_emoji_1.get('unlock'),
    LOCK_PEN: node_emoji_1.get('lock_with_ink_pen'),
    LOCK_KEY: node_emoji_1.get('closed_lock_with_key'),
    PERSON: node_emoji_1.get('bust_in_silhouette'),
    EMAIL: node_emoji_1.get('email'),
    PAGE: node_emoji_1.get('page_facing_up'),
    HEART: node_emoji_1.get('heart'),
    COFFEE: node_emoji_1.get('coffee'),
    BEER: node_emoji_1.get('beer'),
    BROKEN_HEART: node_emoji_1.get('broken_heart'),
    CRYING: node_emoji_1.get('crying_cat_face'),
    HEART_EYES: node_emoji_1.get('heart_eyes_cat'),
    JOY: node_emoji_1.get('joy_cat'),
    KISSING: node_emoji_1.get('kissing_cat'),
    SCREAM: node_emoji_1.get('scream_cat'),
    ROCKET: node_emoji_1.get('rocket'),
    SMIRK: node_emoji_1.get('smirk_cat'),
    RAISED_HANDS: node_emoji_1.get('raised_hands'),
    POINT_RIGHT: node_emoji_1.get('point_right'),
    ZAP: node_emoji_1.get('zap'),
    BOOM: node_emoji_1.get('boom'),
    PRAY: node_emoji_1.get('pray'),
    WINE: node_emoji_1.get('wine_glass'),
};
exports.MESSAGES = {
    ASK_EMAIL: exports.EMOJIS.EMAIL + "  Enter your registered e-mail address:",
    ASK_EMAIL_ERR: "" + chalk.red('Please enter your username or e-mail address.'),
    ASK_PWD: exports.EMOJIS.KEY + " " + chalk.greenBright('Enter your password:'),
    ASK_PWD_ERR: "" + chalk.red('Please enter your password'),
    RESOURCE_INVALID: function (res) { return chalk.red("Invalid <resource> type " + chalk.redBright(res)); },
};