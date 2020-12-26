import devotionals from "./data.json";

export function getAllDevoIds() {
  return devotionals.map((devo, index) => {
    const day = 1 + index;
    return {
      params: {
        day: day.toString()
      },
    };
  });
}

export function getDevo(day: number) {
  const index = (day - 1);
  const devo = devotionals[index];
  return {
    day,
    devo,
  };
}
