import { Telegraf } from "telegraf";
import { Config } from "./config/config";
import { IConfig } from "./config/config.type";
import { TBot } from "./app.type";
import { Command } from "./command/command";
import { StartCommand } from "./command/start.command";

class Bot {
  bot: TBot;
  commands: Command[] = [];

  constructor(config: IConfig) {
    // Инстанс бота
    this.bot = new Telegraf(config.getToken());
    // Запускаем бота
    this.bot.launch();
    // Записываем команды
    this.commands = [
      new StartCommand(
        this.bot,
        config.getStartMessage(),
        config.getKeyboard()
      ),
    ];

    this.commands.map((command) => {
      command.handle();
    });
  }
}

new Bot(new Config());