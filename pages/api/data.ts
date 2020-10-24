import devotionals from "./data.json";

export function getAllDevoIds() {
  return devotionals.map((devo, index) => {
    const day = 1 + Math.floor(index / 2);
    return {
      params: {
        day: day.toString(),
      },
    };
  });
}

export function getDevo(day: number) {
  const index = (day - 1) * 2;
  const devo = [devotionals[index], devotionals[index + 1]];
  return {
    day,
    devo,
  };
}
