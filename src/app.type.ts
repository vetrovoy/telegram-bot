import { Telegraf } from "telegraf";

export type TBot = Telegraf;

export type TInlineKeyboardButton = {
  text: string;
  callback_data: string;
  callback: string;
};

export type TInlineKeyboard = {
  inline_keyboard: Array<TInlineKeyboardButton[]>;
};

export type TKeyboardButton = {
  text: string;
  reply: string | TInlineKeyboard;
};

export type TKeyboard = TKeyboardButton[] | [];
