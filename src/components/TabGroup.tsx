'use client'
import { OptionType } from '@/lib/types'
import React from 'react'
import cs from 'classnames'

type Props<T> = {
  options: OptionType<T>[]
  value?: T
  onChange?: (val: T) => void
}
function TabGroup({ options, value, onChange }: Props<string | number>) {
  return (
    <div className="bg-gradient-to-b from-gray-50 from-80% to-gray-200 border-b-2 border-gray-300 h-10 px-12 flex items-end justify-between">
      {options.map((t) => (
        <div
          key={t.value}
          className={cs(
            'border-b-[3px] px-8 -mb-0.5 pb-1.5',
            value === t.value
              ? 'border-primary-500 text-primary-500'
              : 'border-transparent text-gray-400',
          )}
          onClick={() => onChange?.(t.value)}
        >
          {t.label}
        </div>
      ))}
    </div>
  )
}

export default TabGroup
