import AmountSelector from '@/components/AmountSelector'
import AppLayout from '@/components/AppLayout'
import BankCard from '@/components/BankCard'
import CsvSelector from '@/components/CsvSelector'
import DateRangeSelector from '@/components/DateRangeSelector'
import TabGroup from '@/components/TabGroup'
import TradeRecord from '@/components/TradeRecord'
import { mapToOpts } from '@/utils'
import React from 'react'

function TradeRecPage() {
  return (
    <AppLayout title="交易紀錄">
      <TabGroup
        options={mapToOpts({ deposit: '存款紀錄', withdraw: '取款紀錄' })}
        value="deposit"
      />

      <div className="mx-2.5 mt-3">
        <DateRangeSelector />
      </div>

      <div className="p-2 space-y-2.5">
        <TradeRecord />
        <TradeRecord expend />
      </div>
    </AppLayout>
  )
}

export default TradeRecPage
