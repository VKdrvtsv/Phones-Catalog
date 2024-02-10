import { Product } from '../types/Product';

export const takeRandom = (products: Product[]) => {
  const result: Product[] = [];
  let i = 0;

  while (i < 10) {
    const random = Math.floor(Math.random() * products.length);

    result.push(products[random]);
    i += 1;
  }

  return result;
};
