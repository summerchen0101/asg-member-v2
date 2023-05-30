'use client'
import React, { ReactNode } from 'react'

type Props = {
  label?: string
  children?: ReactNode
}
function DescriptionItem({ label, children }: Props) {
  return (
    <div className="text-sm flex">
      <div className="text-gray-400">{label}：</div>
      <div className="text-gray-500 text-right flex-1">{children}</div>
    </div>
  )
}

export default DescriptionItem
