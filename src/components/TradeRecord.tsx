'use client'
import React from 'react'
import cs from 'classnames'

type Props = {
  expend?: boolean
}
function TradeRecord({ expend }: Props) {
  return (
    <div className="white-box p-3 pb-4">
      <div className="relative">
        <div className="">
          <div className="">
            <span className="text-sm text-gray-400 mr-2">存款金額:</span>
            <span className="font-medium text-primary-500">50,000</span>
          </div>
          <div className="mt-1">
            <span className="text-sm text-gray-400 mr-2">支付方式:</span>
            <span className="text-sm text-gray-600">超商7-11</span>
          </div>
          <div hidden={!expend}>
            <div className="mt-1">
              <span className="text-sm text-gray-400 mr-2">備註:</span>
              <span className="text-sm text-gray-600">一般儲值 無活動</span>
            </div>
            <div className="text-xs mt-2">
              <span className="text-gray-400 mr-1">申請時間:</span>
              <span className="text-gray-600">2023-02-01 16:38:10</span>
            </div>
            <div className="text-xs mt-2">
              <span className="text-gray-400 mr-1">付款時間:</span>
              <span className="text-gray-600">2023-02-01 16:38:10</span>
            </div>
            <div className="text-xs mt-2">
              <span className="text-gray-400 mr-1">入帳時間:</span>
              <span className="text-gray-600">2023-02-01 16:38:10</span>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0">
          <div className="flex items-center justify-end">
            <div className="mr-1.5 text-sm text-gray-600">完成核發</div>
            <div
              className={cs('icon ic_arrow mt-1', expend && 'rotate-90')}
            ></div>
          </div>
          <div
            className="text-gray-400 text-xs text-right mt-3"
            hidden={expend}
          >
            <span className="mr-1">申請時間:</span>
            <span className="text-gray-600">2023-02-01 16:38:10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TradeRecord
