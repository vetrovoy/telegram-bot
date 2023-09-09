import { TKeyboard } from "../app.type";

export interface IConfig {
  token: string;
  startMessage: string;
  keyboard: TKeyboard;
  getToken(): string;
  setToken(): void;
  getKeyboard(): TKeyboard;
  setKeyboard(): void;
  getStartMessage(): string;
  setStartMessage(): void;
}
