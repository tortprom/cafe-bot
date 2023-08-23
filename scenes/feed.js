const {Scenes, Markup} = require('telegraf');
const {MESSAGE, SCENE} = require('../constants.js');

const feedScene = new Scenes.BaseScene(SCENE.FEED);

feedScene.enter(
    async (context) =>
        await context.reply(
            MESSAGE.Q_FEED,
            Markup.keyboard([[MESSAGE.FEED_HERE, MESSAGE.FEED_YA]]).resize()
        )
);

feedScene.on('text', async (context) => {
    try {
        const feedType = context.update.message.text;

        if (feedType !== MESSAGE.FEED_HERE && feedType !== MESSAGE.FEED_YA) {
            const {first_name, last_name, username} =
                context.update.message.from;
            const feedback = context.update.message.text;

            const str = `Отзыв от ${first_name} ${last_name} (${username}):\n${feedback}`;

            await context.reply(MESSAGE.FEED_HERE_REPLY_MESSAGE);
            await context.telegram.sendMessage(
                process.env.SERVICE_CHAT_ID,
                str
            );
            return context.scene.enter(SCENE.MAIN);
        }

        if (feedType === MESSAGE.FEED_HERE) {
            await context.reply(
                MESSAGE.FEED_HERE_REPLY,
                Markup.keyboard([[]]).resize()
            );
        } else {
            await context.reply(
                `Оставить отзыв можно на странице яндекса - https://clck.ru/35R3MY`
            );
            return context.scene.enter(SCENE.MAIN);
        }
    } catch (e) {
        console.error(e);
    }
});

const feed = (context) => {
    try {
        context.scene.leave();
        return context.scene.enter(SCENE.FEED);
    } catch (e) {
        console.error(e);
    }
};

module.exports = {
    feedScene,
    feed
};
