import AmountSelector from '@/components/AmountSelector'
import AppLayout from '@/components/AppLayout'
import BankCard from '@/components/BankCard'
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
        <div className="white-box h-48">
          <WhiteBoxTitle>查詢</WhiteBoxTitle>
          <div className="p-6 space-y-4">
            <SelectInput
              label="遊戲平台"
              options={mapToOpts({ all: '全部', zg: 'ZG', gr: '好路' })}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default BetRecPage
