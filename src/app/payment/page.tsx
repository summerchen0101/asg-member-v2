import AmountSelector from '@/components/AmountSelector'
import AppLayout from '@/components/AppLayout'
import CsvSelector from '@/components/CsvSelector'
import TabGroup from '@/components/TabGroup'
import { mapToOpts } from '@/utils'
import React from 'react'

function PaymentPage() {
  return (
    <AppLayout title="存取款" active="payment">
      <TabGroup
        options={mapToOpts({ deposit: '存款', withdraw: '取款' })}
        value="deposit"
      />
      <div className="p-2">
        <div className="flex gap-x-2">
          <div className="icon btn_yellow1 text-shadow text-white italic font-semibold pt-1.5 text-lg text-center">
            ATM
          </div>
          <div className="icon btn_white1 text-gray-500 italic font-semibold pt-1.5 text-lg text-center">
            超商
          </div>
          <div className="icon btn_white1 text-gray-500 italic font-semibold pt-1.5 text-lg text-center">
            USDT
          </div>
        </div>

        <CsvSelector />

        <AmountSelector />
        <div className="icon btn_a2_base flex items-center justify-center text-primary-600 tracking-wider mx-auto mt-6">
          立即存款
        </div>

        <div className="px-2 mt-4">
          <div className="flex mb-2">
            <div className="bg-gradient-to-b from-[#fffda8] via-[#eaca72] to-[#c3962f] w-2 h-5 rounded-full"></div>
            <div className="text-gray-500 ml-2">注意事項</div>
          </div>
          <div className="whitespace-pre-line text-sm text-gray-400 leading-relaxed">
            {`※使用超商儲值須保留繳費明細並附上身分證明文件聯繫線上客服完成驗證。
※ 首次入款須聯繫客服完成身分驗證。
※ 請妥善保留繳費明細，於非綁定區域繳費，請上傳身分證件+繳費明細錄影達8秒至官方line，若無則無法上分。
※ 本平台不接受無卡現金存款，請用綁定銀行卡匯款。
※ 請勿一次提單多筆或是頻繁提單，將會導致系統誤判並取單失敗。
※ 請使用綁定的銀行卡存款，不接受其他銀行卡存款，若欲加綁/換銀行卡，請聯繫客服。`}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default PaymentPage
