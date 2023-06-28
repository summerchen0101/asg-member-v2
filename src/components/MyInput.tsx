'use client'

import { OptionType } from '@/lib/types'
import React from 'react'
import cs from 'classnames'

type Props = {
  label?: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  value?: string
  onChange?: (val: string) => void
  disabled?: boolean
  readOnly?: boolean
}
function MyInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  readOnly,
}: Props) {
  return (
    <div
      className={cs('flex px-2 pb-1', !readOnly && 'border-b border-slate-300')}
    >
      <div className="text-slate-500 font-medium">{label}:</div>
      <div className="flex flex-1 items-center justify-end">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="border-0 m-0 py-0 text-slate-500 placeholder:text-slate-400 text-right"
          disabled={disabled}
          readOnly={readOnly}
        />
      </div>
    </div>
  )
}

export default MyInput
