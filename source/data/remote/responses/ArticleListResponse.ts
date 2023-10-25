import { IArticleResponse } from "./ArticleResponse";

export interface IArticleListResponse {
  data: IArticleResponse[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
