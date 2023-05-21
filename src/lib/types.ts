export interface IResposeData {
  suggestions: IResposeSuggestions[]
}

export interface IResposeSuggestions {
    value: string;
    unrestricted_value: string;
    data: Record<'fias_id', string>;
  }
  
export interface IAdress extends Omit<IResposeSuggestions, "data"> {
  id: string
}

export interface IMenuTabs {
  id: number;
  title: string;
  icon: string;
  link?: string;
}