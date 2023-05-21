import { IAdress, IResposeSuggestions } from "lib/types";

export const serializeAddressData = (array: IResposeSuggestions[]): IAdress[] =>
  array.map(({ value, unrestricted_value, data }) => ({
    id: data.fias_id,
    value,
    unrestricted_value,
  }));
