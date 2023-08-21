import { TFactory } from "@/core/Factory";
import { DeckRepository } from "@/data/remote/DeckRepository";
import { CreateDeckUseCase } from "@/domain/usecases/CreateDeckUseCase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createCreateDeckUseCase: TFactory<CreateDeckUseCase> = () => {
  const httpClient = new HttpClientAxios();
  const repository = new DeckRepository(httpClient);
  return new CreateDeckUseCase(repository);
};
