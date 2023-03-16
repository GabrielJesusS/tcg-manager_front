import { TFactory } from "@/core/Factory";
import { CardRepository } from "@/data/remote/CardRepository";
import { GetCardListUsecase } from "@/domain/usecases/GetCardListUsecase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetCardListUsecase: TFactory<GetCardListUsecase> = () => {
  const client = new HttpClientAxios();
  const repository = new CardRepository(client);

  return new GetCardListUsecase(repository);
};
