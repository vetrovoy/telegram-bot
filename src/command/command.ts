import { TBot } from "../app.type";

export class Command {
  bot: TBot;
  constructor(bot: TBot) {
    this.bot = bot;
  }
  handle(): void {}
}
