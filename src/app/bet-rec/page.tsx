import AmountSelector from '@/components/AmountSelector'
import AppLayout from '@/components/AppLayout'
import BankCard from '@/components/BankCard'
import CalenderInput from '@/components/CalenderInput'
import CsvSelector from '@/components/CsvSelector'
import DateRangeSelector from '@/components/DateRangeSelector'
import SelectInput from '@/components/SelectInput'
import TabGroup from '@/components/TabGroup'
import TradeRecord from '@/components/TradeRecord'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'
import React from 'react'

function BetRecPage() {
  return (
    <AppLayout title="投注紀錄">
      <TabGroup
        options={mapToOpts({ record: '投注紀錄', history: '歷史帳務' })}
        value="record"
      />
      <div className="p-2">
        <div className="white-box pb-6">
          <WhiteBoxTitle>查詢</WhiteBoxTitle>
          <div className="p-6 space-y-4">
            <SelectInput
              label="遊戲平台"
              options={mapToOpts({ all: '全部', zg: 'ZG', gr: '好路' })}
            />
            <CalenderInput label="開始日期" />
            <CalenderInput label="結束日期" />
          </div>
          {/* <DateRangeSelector /> */}
          <div className="bg-gray-100 rounded mx-4 pt-1 pb-2 px-3">
            <div className="text-gray-600 mb-2">快速查詢</div>
            <div className="grid grid-cols-3 gap-1 mx-auto w-max">
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
                上週
              </div>
              <div className="icon btn_white6 text-gray-500 italic text-center pt-1  scale-95">
                本月
              </div>
              <div className="icon btn_white6 text-gray-500 italic text-center pt-1  scale-95">
                自選
              </div>
            </div>
          </div>
        </div>
        <div className="icon btn_a2_base text-primary-600 font-medium tracking-widest text-center mx-auto mt-4 pt-2">
          查詢
        </div>
      </div>
    </AppLayout>
  )
}

export default BetRecPage
