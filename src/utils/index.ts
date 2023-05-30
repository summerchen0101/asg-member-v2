import { OptionType, StringMap } from '@/lib/types'
import numeral from 'numeral'

export const toCurrency = (num = 0, decimal = 0) =>
  numeral(num).format(
    decimal ? `0,0.${Array(decimal).fill('0').join('')}` : '0,0',
  )

export const mapToOpts = function <T>(
  map: StringMap,
  is_all?: boolean,
): OptionType<T>[] {
  return Object.entries(is_all ? { 0: '全部', ...map } : map).map(
    ([value, label]) => ({
      label,
      value: (isNaN(+value) ? value : +value) as unknown as T,
    }),
  )
}
