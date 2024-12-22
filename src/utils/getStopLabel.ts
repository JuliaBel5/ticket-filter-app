export function getStopLabel(stop: number) {
  if (stop === 0) {
    return "Без пересадок";
  } else if (stop === 1) {
    return `${stop} пересадка`;
  } else {
    return `${stop} пересадки`;
  }
}
