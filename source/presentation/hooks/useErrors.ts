import {
  IValidationError,
  TApplicationError,
  ValidationError,
} from "@/core/Errors";
import { useState } from "react";

interface IUseErrorsResponse {
  generalErrors: string;
  fieldErrors: IValidationError[];
  setError: (error: TApplicationError) => void;
  clearError: () => void;
}

export const useErrors = (): IUseErrorsResponse => {
  const [generalErrors, setGeneralErrors] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<IValidationError[]>([]);

  function setError(error: TApplicationError): void {
    if (error instanceof ValidationError) {
      setFieldErrors(error.errors);
      return;
    }

    setGeneralErrors(error.message);
  }

  function clearError() {
    setGeneralErrors("");
    setFieldErrors([]);
  }

  return { generalErrors, fieldErrors, setError, clearError };
};
