const PRESSURE_UNITS = 0.750063;

export const toUpperCase = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const hpaToMm = (hpa) => {
  return Math.round(hpa * PRESSURE_UNITS);
};

export const getTime = (sec) => {
  return new Date(sec * 1000).toLocaleTimeString("de-DE", {
    timeZone: "Atlantic/Reykjavik",
  });
};
