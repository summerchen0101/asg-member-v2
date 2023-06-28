'use client'
import { OptionType } from '@/lib/types'
import React from 'react'
import cs from 'classnames'

type Props<T> = {
  options: OptionType[]
  value?: T
  onChange?: (val: T) => void
  className?: string
}

function RadioBtns({
  options,
  value,
  onChange,
  className,
}: Props<string | number>) {
  return (
    <div className={cs('space-x-1', className)}>
      {options?.map((t) => (
        <div
          key={t.value}
          className={cs(
            'icon text-center italic pt-1.5 text-sm inline-block align-middle',
            t.value === value
              ? 'btn_yellow6 text-white text-shadow'
              : 'btn_white6 text-gray-500',
          )}
          onClick={() => onChange?.(t.value)}
        >
          {t.label}
        </div>
      ))}
    </div>
  )
}

export default RadioBtns
