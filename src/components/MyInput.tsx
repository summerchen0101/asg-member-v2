'use client'

import cs from 'classnames'
import React, { ReactNode, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

type Props = {
  label?: string
  placeholder?: string
  type?: React.HTMLInputTypeAttribute
  value?: string
  onChange?: (val: string) => void
  disabled?: boolean
  readOnly?: boolean
  afterAddon?: ReactNode
}
function MyInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  readOnly,
  afterAddon,
}: Props) {
  const [showText, setShowText] = useState(false)
  return (
    <div
      className={cs('flex px-2 pb-1', !readOnly && 'border-b border-slate-300')}
    >
      <div className="text-slate-500 font-medium whitespace-nowrap">
        {label}:
      </div>
      <div className="flex flex-1 items-center justify-end">
        <input
          type={type === 'password' && showText ? 'text' : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="border-0 m-0 py-0 text-slate-500 placeholder:text-slate-400 text-right max-w-[10rem]"
          disabled={disabled}
          readOnly={readOnly}
        />
        {type === 'password' ? (
          <div
            className="text-primary-600 text-xl"
            onClick={() => setShowText((v) => !v)}
          >
            {showText ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </div>
        ) : null}
        {afterAddon}
      </div>
    </div>
  )
}

export default MyInput
