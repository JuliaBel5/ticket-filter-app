export const ACCESS_KEY = "6a83730459de0b41c8bcde3ba3a2fb29"; // in a real project I would move it to .env file
export const BASE_URL = `https://api.exchangeratesapi.io/v1/latest?access_key=${ACCESS_KEY}&symbols=USD,RUB,EUR&format=1`;

export const ERROR_MESSAGES = {
  API_RESPONSE_UNSUCCESSFUL: "API response unsuccessful",
  BASE_CURRENCY_NOT_FOUND: "Base currency 'RUB' not found in rates",
  LOADING_ERROR: "Error loading data:",
};
