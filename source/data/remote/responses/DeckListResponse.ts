interface IDeckItem {
  id: string;
  name: string;
  description: string;
  difficulty: number;
  user: {
    id: string;
    user_name: string;
  };
}

export interface IDeckListResponse {
  data: IDeckItem[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
