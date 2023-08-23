const {Telegraf, Scenes, session} = require('telegraf');
const {
    callServiceScene,
    mainMenuService,
    mainMenuScene,
    tableMapScene,
    bookinScene,
    feedScene
} = require('./scenes/index.js');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const stage = new Scenes.Stage([
    callServiceScene,
    mainMenuScene,
    tableMapScene,
    bookinScene,
    feedScene
]);

bot.use(session());
bot.use(stage.middleware());

bot.hears('/start', mainMenuService);

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
