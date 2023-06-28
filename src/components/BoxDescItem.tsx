'use client'
import React, { ReactNode } from 'react'
import { FaEdit } from 'react-icons/fa'

type Props = {
  label: string
  icon?: ReactNode
  children?: ReactNode
  allowEdit?: boolean
}
function BoxDescItem({ label, children, icon, allowEdit }: Props) {
  return (
    <div className="flex items-center justify-between gap-x-2">
      {icon}
      <div className="text-gray-400">{label}:</div>
      <div className="flex-1"></div>
      <div className="text-gray-700">{children}</div>
      {allowEdit ? <FaEdit className="text-base text-primary-500" /> : null}
    </div>
  )
}

export default BoxDescItem
