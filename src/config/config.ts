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
      { text: "Button 1", reply: "Reply Button 1" },
      {
        text: "Button 2",
        reply: {
          inline_keyboard: [
            [
              {
                text: "Button 2 inline_keyboard",
                callback_data: " Button 2 inline_keyboard callback_data",
                callback: "Button 2 inline_keyboard callback_data callback",
              },
            ],
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
