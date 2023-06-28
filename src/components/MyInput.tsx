import { OptionType } from '@/lib/types'
import React from 'react'

type Props = {
  label?: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
}
function MyInput({ label, type, placeholder }: Props) {
  return (
    <div className="border-b border-slate-300 flex px-2 pb-1">
      <div className="text-slate-500 font-medium">{label}:</div>
      <div className="flex flex-1 items-center justify-end">
        <input
          type={type}
          placeholder={placeholder}
          className="border-0 m-0 py-0 text-slate-400"
        />
      </div>
    </div>
  )
}

export default MyInput
