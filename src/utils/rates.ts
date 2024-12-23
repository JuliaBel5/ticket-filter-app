export const conversionRates = new Map<string, number>([
  ["RUB", 1],
  ["USD", 0.013],
  ["EUR", 0.011],
]);

export function handleApiError(error: unknown): Map<string, number> {
  if (error instanceof Error) {
    console.error("Error fetching conversion rates:", error.message);
  }
  return conversionRates;
}
