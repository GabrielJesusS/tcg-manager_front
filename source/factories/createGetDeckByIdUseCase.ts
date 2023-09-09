import { TFactory } from "@/core/Factory";
import { DeckRepository } from "@/data/remote/DeckRepository";
import { GetDeckByIdUseCase } from "@/domain/usecases/GetDeckByIdUseCase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetDeckByIdUseCase: TFactory<GetDeckByIdUseCase> = () => {
  const client = new HttpClientAxios();
  const repository = new DeckRepository(client);
  return new GetDeckByIdUseCase(repository);
};
