const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61U246jRhD9l34da83F3CyNlAZswHcb33CUhzY00Da3aRrbeGUpf7JPecoX5K/2EyLsmewm2WwmUnhquktV51SdUx9BlpMSD3ENuh9BQckJMdwcWV1g0AV6FYaYghYIEEOgC3JnW+wMEY72ljIk1YAcOjtuzsbTvSOEWd02uPBly8zJYcM9g1sLFNU+If53Eh5cgTr+ybqG5WrJRHsT7/trfAyhvw3MvG5nA8XqJ4U+iJxncGsyIkJJFvWKGKeYomSI6xki9H3we5NkrQWVldlIe3H6shGdOoeTLNnsMuxMRxHvL6vtxDN72fF98EdHQ3BfPKLYTrYdxofLoe0rRrA4H8OcEYLCE8q8daGh+fgBvyRRhgMnwBkjrH533+vJyy4Skb9xz2tnVffnvWSScLUnH+aGuWz3zOUq9s4MDsTz+4BPi2q+2AwEq9YWKVw6In6SmDwh9KplEHLOlR3baVuucfQn4DP6ppXjf+k7Byv2MvVXRzUK4WHSsebCni7JsVC8c7I8HDv6EZZBrvN29D74guOsF2fXQ7afKmnvFML64Aklk9w9G089ZG+YxwmWVBrcF/iIVfR7KLfcHhPfCC6D3YGuTyYMr/t5KlZuLFM3gmn1ZPmqjRI3rqL5po57Jz3WYunFNOJ5PzZD5r/seCdecUQ6tHtKuTxpLjk/3xkdce0EoMvfWoDiiJSMIkby7H7XUVoABScX+xSze3vB1ZsKVjHOnkJf0KzpKFZ1eXKIFylVtlvI7wfLtViQkTdK4DNogYLmPi5LHNikZDmtx7gsUYRL0P3xPqmGNMVpzvCABE37FFnktI6kivIP5YdzjFiJiuJDhhlogZDm6RiDLqMVboF7PK/3+x0V9juc2tcNU5dUSeUVHfY4sSNxGt8wTB81lyTFJUNpAbq8IkkdQVUE8db6X2D0eFFVNVXROJNXO6YkK6bICyIn97UeFHjp+zBE4fZTC2T4wh4qbnov8i0QElqyVVYVSY6CN4m/PSLfz6uMuXXmG80BU9D96hozRrKobIhVGaJ+TE7YaHiAboiSEv8xbkxx8MbldYUZedCocAfV+WLMLUCDvUn019Z0eeHv3UkeUSInS4qkqBwva5zYRDYPLZChJhf4kOXHM8oClAVJfqo+f/rlt8+ffv256dMrg6ZggBkiSQm6wJjJeYSh3puEVVyuLAs6ETQiCL4wfvPRQ6e7pXYc48VKqZOOreoBEXcXWea9hYP2JFLDSUASZ6dd+9nq+RtJQBf4m6ewXhRDdOKmy4PsGx09e9pW7jjraeUltuPxyo1301rj81VAz/21N/RHltleaxsxVSB88YypNN74cyIJbW9owpWmwMZ0LRDgE/Hx18Vcu4Tr/DySqsFkP86nWon0VJdT0V0xwi3N4SK3+YEgr8V4ZGGS7BaLs6iJE37mj6LFRB9sZ9HlcqXhSWPF08xqX4XRAT4cft8wyetmJ6/eI/ffkOD7onydyr/N9oG7USB3a32V4nXz/sP20jer9s60j+upWmC9DbceE3xcsU3PtdJOPrOvW69wrdC/7Hhwa6xQJIiFOU1BF6AsoPldOTSvGkk7WZh/p5gBI8ecP4gnqGTwi02+4TxOekTNaF7YqIxBF4gLbSdqjeZrWBQuQ+zNdQA233SUgdvvCJUM/p4IAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "DULLAH-MD",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255716945971",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'yes',
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'yes',
    ANTIBAD: process.env.ANTIBAD || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
