const {Scenes, Markup} = require('telegraf');
const {MESSAGE, SCENE} = require('../constants.js');

const bookinScene = new Scenes.BaseScene(SCENE.BOOKING);

bookinScene.enter(
    async (context) =>
        await context.reply(
            MESSAGE.Q_BOOK,
            Markup.keyboard([MESSAGE.CALL_YOU]).resize()
        )
);

bookinScene.on('text', async (context) => {
    try {
        const emp = context.update.message.text;

        if (emp === MESSAGE.CALL_YOU) {
            await context.reply(MESSAGE.BOKING_CONTACT);
            return context.scene.enter(SCENE.MAIN);
        }

        await context.reply(MESSAGE.UNDEFINED_COMMAND);

        return context.scene.enter(SCENE.MAIN);
    } catch (e) {
        console.error(e);
    }
});

const booking = async (context) => {
    try {
        context.scene.leave();
        return context.scene.enter(SCENE.BOOKING);
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    bookinScene,
    booking
};
