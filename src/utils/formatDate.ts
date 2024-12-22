export const formatDate = (date: string): string => {
  const [day, month, year] = date.split(".").map(Number);
  const parsedDate = new Date(year + 2000, month - 1, day);

  const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "short",
  }).format(parsedDate);

  const [weekday, ...rest] = formattedDate.replace("г.", "г").split(", ");
  return `${rest.join(", ")}, ${
    weekday.charAt(0).toUpperCase() + weekday.slice(1)
  }`;
};
