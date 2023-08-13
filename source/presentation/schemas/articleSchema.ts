import { array, object, string } from "yup";

export const articleSchema = object({
  title: string().required().min(20),
  description: string().required().min(10),
  tags: array().of(string()).min(3).optional(),
  status: string(),
  imageUrl: string().required().optional(),
});

export interface IArticleSchema {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  article: IArticleObjectSchema;
}

interface IArticleObjectSchema {
  text: string;
  images: Array<{
    url: string;
    identifier: string;
    name: string;
  }>;
}
