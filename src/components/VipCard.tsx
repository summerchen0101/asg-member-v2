'use client'
import { toCurrency } from '@/utils'
import React from 'react'

type Props = {
  img?: string
  is_lock?: boolean
  total_deposit?: number
  keep_deposit?: number
}
function VipCard({ img, is_lock, total_deposit, keep_deposit }: Props) {
  return (
    <div className="h-[180px] relative snap-center">
      <img src={img} className="h-full" alt="" />
      {is_lock ? (
        <div className="icon ic_cardlock_base absolute top-0 right-0 text-white text-xs scale-y-90 mt-[13px] mr-2 pl-5">
          未解鎖
        </div>
      ) : null}
      <div className="absolute top-0 right-0 w-28 text-center space-y-3 pt-11 pr-4">
        <div className="text-white drop-shadow-md">
          <div className="">{toCurrency(total_deposit, 0)}</div>
          <div className="scale-y-90 text-sm">升級所需儲值</div>
        </div>
        <div className="text-white drop-shadow-md">
          <div className="">{toCurrency(keep_deposit, 0)}</div>
          <div className="scale-y-90 text-sm">每月保級儲值</div>
        </div>
      </div>
    </div>
  )
}

export default VipCard
