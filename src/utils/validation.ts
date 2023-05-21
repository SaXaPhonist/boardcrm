import { ADDRESS_VALIDATION_LENGTH } from "lib/const";

export const lengthValidation = (value: string) =>
  value.length > ADDRESS_VALIDATION_LENGTH;
