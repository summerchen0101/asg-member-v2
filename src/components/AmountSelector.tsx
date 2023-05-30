'use client'
import React from 'react'

type Props = {
  value?: number
  onChange?: (val: number) => void
}

function AmountSelector({ value, onChange }: Props) {
  return (
    <div className="white-box p-3 mt-2 pb-5">
      <div className="grid grid-cols-4 justify-between gap-y-1">
        <div className="flex justify-center">
          <div className="icon btn_yellow2 text-shadow text-white italic font-medium pt-1.5 text-sm text-center">
            1000
          </div>
        </div>
        <div className="flex justify-center">
          <div className="icon btn_white2 text-gray-500 italic font-medium pt-1.5 text-sm text-center">
            5,000
          </div>
        </div>
        <div className="flex justify-center">
          <div className="icon btn_white2 text-gray-500 italic font-medium pt-1.5 text-sm text-center">
            10,000
          </div>
        </div>
        <div className="flex justify-center">
          <div className="icon btn_white2 text-gray-500 italic font-medium pt-1.5 text-sm text-center">
            50,000
          </div>
        </div>

        <div className="flex justify-center">
          <div className="icon btn_white2 text-gray-500 italic font-medium pt-1.5 text-sm text-center">
            最少
          </div>
        </div>
        <div className="flex justify-center">
          <div className="icon btn_white2 text-gray-500 italic font-medium pt-1.5 text-sm text-center">
            最多
          </div>
        </div>
        <div className="flex justify-center">
          <div className="icon btn_white2 text-gray-500 italic font-medium pt-1.5 text-sm text-center">
            清除
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="text-gray-500 text-sm font-medium mb-1">存款金額</div>
        <input
          className="bg-gray-200 placeholder:text-gray-400 text-sm rounded-lg px-2 py-1 w-full"
          placeholder="請輸入金額1,000~100,000"
        ></input>
      </div>
    </div>
  )
}

export default AmountSelector
