export interface IArticleResponse {
  id: number;
  content: string;
  created_at: string;
  title: string;
  description: string;
  user: {
    name: string;
    id: string;
  };
}
