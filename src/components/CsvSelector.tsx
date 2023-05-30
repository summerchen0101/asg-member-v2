'use client'
import React from 'react'

type Props = {
  value?: number
  onChange?: (val: number) => void
}

function CsvSelector({}: Props) {
  return (
    <div className="white-box p-3 mt-2">
      <div className="flex justify-between">
        <div className="">
          <div className="border-2 border-primary-400 rounded-lg flex items-center justify-center p-2">
            <div className="icon ic_store_711"></div>
          </div>
          <div className="text-sm text-gray-400 text-center mt-1">7-11</div>
        </div>
        <div className="">
          <div className="border-2 border-primary-200 rounded-lg flex items-center justify-center p-2">
            <div className="icon ic_store_family"></div>
          </div>
          <div className="text-sm text-gray-400 text-center mt-1">全家</div>
        </div>
        <div className="">
          <div className="border-2 border-primary-200 rounded-lg flex items-center justify-center p-2">
            <div className="icon ic__store_hilife"></div>
          </div>
          <div className="text-sm text-gray-400 text-center mt-1">萊爾富</div>
        </div>
        <div className="">
          <div className="border-2 border-primary-200 rounded-lg flex items-center justify-center p-2">
            <div className="icon ic_store_ok"></div>
          </div>
          <div className="text-sm text-gray-400 text-center mt-1">OK</div>
        </div>
      </div>
    </div>
  )
}

export default CsvSelector
