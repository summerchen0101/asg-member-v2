import { OptionType } from '@/lib/types'
import React from 'react'

type Props = {
  label?: string
  options?: OptionType[]
}
function SelectInput({ label, options }: Props) {
  return (
    <div className="border-b border-slate-300 flex px-2 pb-1">
      <div className="text-slate-500 font-medium">{label}:</div>
      <div className="flex flex-1 items-center justify-end">
        <select className="border-0 m-0 py-0 text-slate-400">
          {options?.map((t) => (
            <option key={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SelectInput
