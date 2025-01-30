import { CurrencyCode } from '@daffodil/driver/graphql';

export const getRandomCurrency = (): CurrencyCode => {
  const currencies = <CurrencyCode[]>Object.values(CurrencyCode);
  return <CurrencyCode>currencies[Math.floor(Math.random() * currencies.length)];
};
