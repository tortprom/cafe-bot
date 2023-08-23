const {Scenes, Markup} = require('telegraf');
const {MESSAGE, SCENE} = require('../constants.js');

const mainMenuScene = new Scenes.BaseScene(SCENE.MAIN);

mainMenuScene.enter(
    async (context) =>
        await context.reply(
            MESSAGE.Q_WHAT,
            Markup.keyboard([
                [MESSAGE.CALL, MESSAGE.BOOK],
                [MESSAGE.FEEDBACK]
            ]).resize()
        )
);

mainMenuScene.on('text', async (context) => {
    try {
        const typeMessage = context.update.message.text;

        if (typeMessage === MESSAGE.CALL) {
            return context.scene.enter(SCENE.TABLE);
        }

        if (typeMessage === MESSAGE.BOOK) {
            return context.scene.enter(SCENE.BOOKING);
        }

        if (typeMessage === MESSAGE.FEEDBACK) {
        
            return context.scene.enter(SCENE.FEED);
        }

        return context.scene.enter(SCENE.MAIN);
    } catch (e) {
        console.error(e);
    }
});

const mainMenuService = (context) => {
    try {
        context.scene.leave();
        return context.scene.enter(SCENE.MAIN);
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    mainMenuScene,
    mainMenuService
};
