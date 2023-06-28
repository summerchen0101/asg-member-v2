'use client'

import { OptionType } from '@/lib/types'
import React from 'react'

type Props = {
  label?: string
  value?: string
  defaultValue?: string
  onChange?: (val: string) => void
  placeholder?: string
  options?: OptionType[]
}
function SelectInput({
  label,
  options,
  placeholder,
  defaultValue,
  value,
  onChange,
}: Props) {
  return (
    <div className="border-b border-slate-300 flex px-2 pb-1">
      <div className="text-slate-500 font-medium">{label}:</div>
      <div className="flex flex-1 items-center justify-end">
        <select
          className="border-0 m-0 py-0 text-slate-400 text-right -mr-5"
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={(e) => onChange?.(e.target.value)}
        >
          {options?.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectInput
