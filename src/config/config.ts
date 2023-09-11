import { TKeyboard } from "../app.type";
import { IConfig } from "./config.type";

export class Config implements IConfig {
  token: string;
  startMessage: string;
  keyboard: TKeyboard;

  constructor() {
    this.token = "";
    this.startMessage = "";
    this.keyboard = [];

    this.setToken();
    this.setStartMessage();
    this.setKeyboard();
  }

  getToken(): string {
    return this.token;
  }

  setToken(): void {
    this.token = "6205884923:AAHmfEGLniGFk86bn5Ylqnsz2HRJymNvq1Y";
  }

  getKeyboard(): TKeyboard {
    return this.keyboard;
  }

  setKeyboard() {
    const keyboard: TKeyboard = [
      { text: "Button 1", reply: { message: "Reply Button 1" } },
      {
        text: "Button 2",
        reply: {
          message: "Меню",
          inline_keyboard: [
            {
              text: "Меню кнопка 1",
              callback_data: " Меню кнопка 1",
              callback: "Меню кнопка 1 callback",
            },
            {
              text: "Меню кнопка 2",
              callback_data: " Меню кнопка 2",
              callback: "Меню кнопка 2 callback",
            },
            {
              text: "Меню кнопка 3",
              callback_data: " Меню кнопка 3",
              callback: "Меню кнопка 3 callback",
            },
            {
              text: "Меню кнопка 4",
              callback_data: " Меню кнопка 4",
              callback: "Меню кнопка 4 callback",
            },
          ],
        },
      },
    ];

    this.keyboard = keyboard;
  }

  setStartMessage() {
    this.startMessage = "Добро пожаловать! Выберите действие:";
  }

  getStartMessage(): string {
    return this.startMessage;
  }
}
