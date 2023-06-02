import AmountSelector from '@/components/AmountSelector'
import AppLayout from '@/components/AppLayout'
import BankCard from '@/components/BankCard'
import CsvSelector from '@/components/CsvSelector'
import TabGroup from '@/components/TabGroup'
import { mapToOpts } from '@/utils'
import React from 'react'

function WithdrawPage() {
  return (
    <AppLayout title="存取款" active="payment">
      <TabGroup
        options={mapToOpts({ deposit: '存款', withdraw: '取款' })}
        value="withdraw"
      />

      <div className="p-2">
        <div className="overflow-x-auto snap-x">
          <div className="w-max flex items-center">
            <BankCard is_default />
            <BankCard />
            <BankCard />
            <BankCard />
            <BankCard />
          </div>
        </div>
        <div className="white-box py-3 px-4">
          <div className="text-primary-600 mb-1">已選取帳戶</div>
          <div className="text-gray-600 font-medium scale-y-95">
            012 台北富邦銀行 中山分行
            <br />
            1234 1234 0000 王小明
          </div>
        </div>
        <AmountSelector />
        <div className="icon btn_a2_base flex items-center justify-center text-primary-600 tracking-wider mx-auto mt-6">
          送出
        </div>

        <div className="px-2 mt-4">
          <div className="flex mb-2">
            <div className="bg-gradient-to-b from-[#fffda8] via-[#eaca72] to-[#c3962f] w-2 h-5 rounded-full"></div>
            <div className="text-gray-500 ml-2">注意事項</div>
          </div>
          <div className="whitespace-pre-line text-sm text-gray-400 leading-relaxed">
            {`※ 每日享有1 次申請出款免手續費，當日取款上限1次。
※ 如利用本平台進行任何洗錢詐騙行為，平台有權利終止會員服務及凍結會員帳戶。`}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default WithdrawPage
