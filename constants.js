require('dotenv').config();

const MESSAGE = {
    CALL: 'Позвать персонал',
    BOOK: 'Забронировать стол',
    FEEDBACK: 'Оставить отзыв',
    WAIT: 'Персонал, скоро подойдет, ожидайте',
    CALL_ME: 'Перезвоните мне',
    CALL_YOU: 'Свяжусь самостоятельно',
    Q_WHAT: 'Выберите, что вы хотите сделать?',
    Q_TABLE: 'Выберите стол',
    Q_WHOM: 'Кого вы хотите пригласить?',
    Q_BOOK: 'Для того, чтобы забронировать столик выберите способ связи ниже',
    Q_FEED: 'Какой способ ждя вас предпочтительней?',
    FEED_HERE: 'Написать отзыв в чат',
    FEED_YA: 'Оставить отзыв на яндексе',
    FEED_HERE_REPLY:
        'Напишите в чат свой отзыв и нажмите отправить, персонал увидит его',
    FEED_HERE_REPLY_MESSAGE: 'Отзыв получен, спасибо',
    UNDEFINED_TABLE: 'Пожалуйста, выберите из списка. Вернул в главное меню',
    UNDEFINED_COMMAND: 'Непонятная команда, вернул вас в главное меню',
    UNDEFINED_EMPLOYEE: 'Хм, сейчас позову',
    BOKING_CONTACT: `Номер для связи по телефону и в чате телеграма \n${process.env.WORK_PHONE}`,
    SHOULD_EXIT: 'Я могу еще чем-то помочь?',
    YES: 'Да',
    NO: 'Нет'
};

const SCENE = {
    MAIN: 'mainMenu',
    TABLE: 'tableMap',
    SERVICE: 'callService',
    BOOKING: 'booking',
    FEED: 'feed',
    ENDING: 'end'
};

const EMPLOYEE = {
    WAITER: 'Официант',
    HOOKAH: 'Кальянщик'
};

const DEFAULT_COMMAND = `/start - кайфануть`;

module.exports = {
    MESSAGE,
    SCENE,
    EMPLOYEE,
    DEFAULT_COMMAND
};
