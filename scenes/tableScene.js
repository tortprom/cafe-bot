const {Scenes} = require('telegraf');
const {MESSAGE, SCENE} = require('../constants.js');

const tableMapScene = new Scenes.BaseScene(SCENE.TABLE);

tableMapScene.enter(
    async (context) =>
        await context.reply(MESSAGE.Q_TABLE, {
            reply_markup: {
                keyboard: [
                    ['Стол 1', 'Стол 2', 'Стол 3'],
                    ['Стол 4', 'Стол 5', 'Стол 6'],
                    ['Стол 7', 'Стол 8', 'Стол 9'],
                    ['Стол 10', 'Стол 11', 'Стол 12']
                ]
            }
        })
);

tableMapScene.on('text', async (context) => {
    try {
        const text = context.update.message.text || '';
        if (text.match(/(Стол\s\d)/g)) {
            const tableNumber = text.split(' ')[1] || 0;
            context.session.tableNumber = tableNumber;

            return context.scene.enter(SCENE.SERVICE);
        }

        await context.reply(MESSAGE.UNDEFINED_TABLE);

        return context.scene.enter(SCENE.MAIN);
    } catch (e) {
        console.error(e);
    }
});

const tableMap = (context) => {
    try {
        context.scene.leave();
        return context.scene.enter(SCENE.TABLE);
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    tableMapScene,
    tableMap
};
