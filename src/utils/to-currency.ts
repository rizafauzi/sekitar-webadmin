/* eslint-disable import/prefer-default-export */
export const toCurrency = (number: number): string =>
  number.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  })
