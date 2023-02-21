const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '5943165001:AAGYicqd2g-SNo-KAzQ-RPRF6TyjMA8sGBg';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
const url = "https://luminous-kelpie-afea87.netlify.app/#/wallet"

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async(msg) => {
  const chatId = msg.chat.id;

  await bot.sendMessage(chatId, "Xisoblarni ko'rish uchun pastdagi tugmani bosing", {
    reply_markup: {
        keyboard: [
            [{text: "Botga kirish", web_app: {url: url}}]
        ]
    }
})
});