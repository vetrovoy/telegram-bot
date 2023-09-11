import { callbackQuery } from "telegraf/filters";
import { Markup } from "telegraf";
import { TBot, TKeyboard } from "../app.type";
import { Command } from "./command";
import { divideButtons } from "../utils/utils";

export class StartCommand extends Command {
  message: string;
  keyboard: TKeyboard;

  constructor(bot: TBot, message: string, keyboard: TKeyboard) {
    super(bot);
    this.keyboard = keyboard;
    this.message = message;
  }

  handle() {
    // Обработчик команды /start
    this.bot.start((ctx) => {
      // Получаем ищем названия кнопок
      const buttons = this.keyboard.map((button) => {
        return button.text;
      });
      // Отправляем приветственное сообщение и клавиатуру
      ctx.reply(this.message, Markup.keyboard(buttons));
    });

    // Обработчики нажатия кнопок
    this.keyboard.map((button) => {
      // Обработчик статичной клавиатуры
      this.bot.hears(button.text, (ctx) => {
        const inlineKeyboard = button.reply.inline_keyboard;

        if (inlineKeyboard && inlineKeyboard.length !== 0) {
          // Инлайн клавиатура
          const markupButtons = inlineKeyboard.map((button) => {
            return Markup.button.callback(button.text, button.callback_data);
          });

          // Делим на группы по 2
          if (markupButtons.length > 2) {
            const dividedButtonsMarkupButtons = divideButtons(markupButtons);
            ctx.reply(button.reply.message, Markup.inlineKeyboard(dividedButtonsMarkupButtons));
          }else {
            ctx.reply(button.reply.message, Markup.inlineKeyboard(markupButtons));
          }
          
          // Хендлер
          this.bot.on(callbackQuery("data"), (ctx) => {
            const callbackData = ctx.callbackQuery.data;

            inlineKeyboard.map((button) => {
              if (button.callback_data === callbackData) {
                ctx.reply(button.callback);
              }
            });
          });

        } else {
          ctx.reply(button.reply.message);
        }
      });
    });
  }
}
