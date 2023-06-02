'use client'
import React from 'react'

function DateRangeSelector() {
  return (
    <div className="flex justify-between">
        <div className="icon btn_yellow6 text-white text-shadow text-center italic pt-1 scale-95">
          今天
        </div>
        <div className="icon btn_white6 text-gray-500 italic text-center pt-1  scale-95">
          昨天
        </div>
        <div className="icon btn_white6 text-gray-500 italic text-center pt-1  scale-95">
          本週
        </div>
        <div className="icon btn_white6 text-gray-500 italic text-center pt-1  scale-95">
          本月
        </div>
        <div className="icon btn_white6 text-gray-500 italic text-center pt-1  scale-95">
          自選
        </div>
      </div>
  )
}

export default DateRangeSelector
