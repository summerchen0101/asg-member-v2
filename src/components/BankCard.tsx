'use client'
import { toCurrency } from '@/utils'
import React from 'react'

type Props = {
  is_default?: boolean
}
function BankCard({ is_default }: Props) {
  return (
    <div className="h-[180px] relative snap-start -ml-1.5">
      <img
        src={is_default ? '/img/bankcard1.png' : '/img/bankcard2.png'}
        className="h-full"
        alt=""
      />
      {is_default ? (
        <div className="icon ic_bankcard_set absolute top-0 right-0 scale-y-90 mt-[6px] mr-[11px] pl-5"></div>
      ) : null}
      <div className="absolute top-0 left-0 space-y-3 pt-12 pl-9">
        <div className="text-white drop-shadow-md scale-y-90 text-base font-medium tracking-wide">
          <div>012 台北富邦銀行</div>
          <div>中山分行</div>
          <div>王小明</div>
          <div>1234 1234 0000</div>
        </div>
      </div>
    </div>
  )
}

export default BankCard
