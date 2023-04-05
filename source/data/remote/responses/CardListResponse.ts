export interface ICardListResponse {
  data: ICardItem[]
  page: number
  pageSize: number;
  count: number;
  totalCount: number;
}

interface ICardItem{
  id: string;
  name: string;
  subtypes: string[];
  supertype: string;
  images: {
    small: string;
    large: string;
  };
}
