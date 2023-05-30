export interface OptionType<T = number | string> {
  label: string
  value: T
  disabled?: boolean
}

export type StringMap = Record<string, string>
