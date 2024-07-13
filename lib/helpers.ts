export const formatDate = (isoDateString: Date) => {
  const date = new Date(isoDateString);

  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");

  return `${day}.${month}.${year}`;
};
