import numeral from 'numeral'

export const toCurrency = (num = 0, decimal = 0) =>
  numeral(num).format(
    decimal ? `0,0.${Array(decimal).fill('0').join('')}` : '0,0',
  )
