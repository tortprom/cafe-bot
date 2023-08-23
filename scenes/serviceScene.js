const {Scenes, Markup} = require('telegraf');
const {MESSAGE, SCENE, EMPLOYEE} = require('../constants.js');

const callServiceScene = new Scenes.BaseScene(SCENE.SERVICE);

callServiceScene.enter(
    async (context) =>
        await context.reply(
            MESSAGE.Q_WHOM,
            Markup.keyboard([[EMPLOYEE.WAITER, EMPLOYEE.HOOKAH]]).resize()
        )
);

callServiceScene.on('text', async (context) => {
    try {
        const emp = context.update.message.text;

        if (emp !== EMPLOYEE.HOOKAH && emp !== EMPLOYEE.WAITER) {
            await context.reply(MESSAGE.UNDEFINED_EMPLOYEE);
        }

        const str = `Требуется ${
            emp === EMPLOYEE.HOOKAH ? EMPLOYEE.HOOKAH : EMPLOYEE.WAITER
        } за стол ${context.session.tableNumber}`;
        await context.telegram.sendMessage(process.env.SERVICE_CHAT_ID, str);

        await context.reply(MESSAGE.WAIT);

        return context.scene.enter(SCENE.MAIN);
    } catch (e) {
        console.error(e);
    }
});

const callService = (context) => {
    try {
        context.scene.leave();
        return context.scene.enter(SCENE.SERVICE);
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    callServiceScene,
    callService
};
