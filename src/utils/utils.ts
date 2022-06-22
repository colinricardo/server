import { customAlphabet } from "nanoid";

export const NANOID_ALPHABET =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
export const NANOID_LENGTH = 12;

export const generateRandomId = customAlphabet(NANOID_ALPHABET, NANOID_LENGTH);
