import { handleApiError } from "@/utils/rates";
import { BASE_URL, ERROR_MESSAGES } from "../constants/apiConstants";

export async function fetchConversionRates(): Promise<Map<string, number>> {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    if (!data.success) {
      throw new Error(ERROR_MESSAGES.API_RESPONSE_UNSUCCESSFUL);
    }

    const baseRate = data.rates["RUB"];
    if (!baseRate) {
      throw new Error(ERROR_MESSAGES.BASE_CURRENCY_NOT_FOUND);
    }

    const recalculatedRates = new Map<string, number>(
      Object.entries(data.rates).map(([currency, rate]) => [
        currency,
        typeof rate === "number" ? rate / baseRate : 0,
      ])
    );

    recalculatedRates.set("RUB", 1);
    return recalculatedRates;
  } catch (error) {
    return handleApiError(error);
  }
}
