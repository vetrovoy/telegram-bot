import { Markup } from "telegraf";
import { TBot, TKeyboard } from "../app.type";
import { Command } from "./command";

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
      this.bot.hears(button.text, (ctx) => {
        if (typeof button.reply === "string") {
          ctx.reply(button.reply);
          return;
        }

        if (typeof button.reply === "object") {
          const buttons = button.reply.inline_keyboard.map((keyboard) => {
            return keyboard.map((button) => {
              return Markup.button.callback(button.text, button.callback_data);
            });
          });

          ctx.reply("Меню:", Markup.inlineKeyboard(buttons));
        }
      });
    });
  }
}
