import { TFactory } from "@/core/Factory";
import { CardRepository } from "@/data/remote/CardRepository";
import { GetRandomCardUsecase } from "@/domain/usecases/GetRandomCardUsecase";
import { HttpClientAxios } from "@/infra/HttpClientAxios";

export const createGetRandomCardUsecase: TFactory<GetRandomCardUsecase> =
  () => {
    const client = new HttpClientAxios();
    const cardRepository = new CardRepository(client);

    return new GetRandomCardUsecase(cardRepository);
  };
