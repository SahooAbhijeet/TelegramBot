const { Telegraph } = require('telegraph');

/**
 * -> How to get the secret token for creating a bot ?
 * -> Open Telegram and search for Botfather
 * -> To read instruction type /start and press enter
 * -> To create a new bot type /newbot and press enter
 * -> It will ask for a bot name, give a botname without a/,ex: coding_bot
 * -> Then it will ask for a username ending with bot, ex: code_examples_js_cpp_node_bot
 * -> http://t.me/code_examples_js_cpp_node_bot
 */



const username = Telegramusername;
const bot = new Telegraph(usernamme);

bot.start((ctx) => ctx.reply('Welcome to the new coding bot from abhi'));