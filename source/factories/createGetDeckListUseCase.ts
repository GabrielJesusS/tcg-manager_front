import { TFactory } from "@/core/Factory";
import { DeckRepository } from "@/data/remote/DeckRepository";
import { GetDeckListUseCase } from "@/domain/usecases/GetDeckListUseCase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetDeckListUseCase: TFactory<GetDeckListUseCase> = () => {
  const client = new HttpClientAxios();
  const repository = new DeckRepository(client);

  return new GetDeckListUseCase(repository);
};
