import { Telegraf } from "telegraf";

export type TBot = Telegraf;

export type TInlineKeyboardButton = {
  text: string;
  callback_data: string;
  callback: string;
};

export type TKeyboardButton = {
  text: string;
  reply: {
    message: string;
    inline_keyboard?: TInlineKeyboardButton[];
  };
};

export type TKeyboard = TKeyboardButton[] | [];
