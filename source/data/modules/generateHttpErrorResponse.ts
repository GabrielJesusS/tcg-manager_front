import {
  CriticalError,
  ForbiddenError,
  NotAcceptableError,
  NotFoundError,
  TApplicationError,
  UnauthorizedError,
  ValidationError,
} from "@/core/Errors";
import { HttpStatusCode } from "@/services/http";
import { AxiosError } from "axios";

interface FieldMap {
  [key: string]: string;
}

interface HttpResponseError {
  message: string;
  statusCode: number;
  errors?: {
    [key: string]: string;
  };
}

export function generateHttpErrorResponse(
  error: AxiosError<HttpResponseError>
): TApplicationError {
  if (error?.response != null) {
    const {
      response: { status, data },
    } = error;

    const responseError = new Error(data ? data.message : error.message);

    if (status === HttpStatusCode.UNAUTHORIZED) {
      return new UnauthorizedError();
    }

    if (status === HttpStatusCode.FORBIDDEN) {
      return new ForbiddenError();
    }

    if (status === HttpStatusCode.NOT_FOUND) {
      return new NotFoundError(responseError);
    }

    if (status === HttpStatusCode.NOT_ACCEPTABLE) {
      return new NotAcceptableError(responseError);
    }

    if (
      status === HttpStatusCode.UNPROCESSABLE_ENTITY &&
      data.errors !== undefined
    ) {
      return new ValidationError(
        Object.entries(data.errors).map((err) => {
          const parameter = err[0];

          return {
            parameter: parameter,
            error: err[1],
          };
        })
      );
    }
  }

  return new CriticalError(error);
}
