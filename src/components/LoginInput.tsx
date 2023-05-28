'use client'
import React, { ReactNode, useState } from 'react'
import cs from 'classnames'

type Props = {
  value?: string
  onChange?: () => void
  placeholder?: string
  password?: boolean
  autocomplete?: string
  icon?: string
  className?: string
  addonAfter?: ReactNode
}
function LoginInput({
  value,
  onChange,
  placeholder,
  password,
  autocomplete,
  icon,
  className,
  addonAfter,
}: Props) {
  const [type, setType] = useState<'text' | 'password'>('password')
  return (
    <div
      className={cs(
        'bg-[rgba(255,255,255,0.4)] w-[280px] h-12 rounded-full px-3 flex items-center btn focus:[box-shadow:none] relative',
        className,
      )}
    >
      {icon ? <div className={cs('icon ic_login_id mr-3', icon)}></div> : null}

      <input
        className="placeholder:text-[rgba(255,255,255,0.8)] bg-transparent flex-1 outline-none text-white border-none focus:outline-none px-0"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={password ? type : 'text'}
        autoComplete={autocomplete}
      />
      {password ? (
        type === 'text' ? (
          <div
            className="icon ic_eyeopen"
            onClick={() => setType('password')}
          ></div>
        ) : (
          <div
            className="icon ic_eyeclose"
            onClick={() => setType('text')}
          ></div>
        )
      ) : null}
      <div className="absolute right-0 mr-2">{addonAfter}</div>
    </div>
  )
}

export default LoginInput
