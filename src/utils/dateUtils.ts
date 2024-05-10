export const formatDate = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(locale).format(date);
};
