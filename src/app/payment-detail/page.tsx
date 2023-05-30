import AmountSelector from '@/components/AmountSelector'
import AppLayout from '@/components/AppLayout'
import CsvSelector from '@/components/CsvSelector'
import DescriptionItem from '@/components/DescriptionItem'
import TabGroup from '@/components/TabGroup'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'
import React from 'react'

function PaymentDetailPage() {
  return (
    <AppLayout title="存款明細" active="payment">
      <TabGroup
        options={mapToOpts({ deposit: '存款', withdraw: '取款' })}
        value="deposit"
      />
      <div className="p-2">
        <div className="white-box">
          <WhiteBoxTitle>ATM轉帳</WhiteBoxTitle>
          <div className="p-4 space-y-1.5">
            <DescriptionItem label="單號">20230201123456789</DescriptionItem>
            <DescriptionItem label="交易序號">65498712345678</DescriptionItem>
            <DescriptionItem label="銀行">花旗銀行</DescriptionItem>
            <DescriptionItem label="銀行代號">021</DescriptionItem>
            <DescriptionItem label="繳費金額">50,000</DescriptionItem>
            <DescriptionItem label="匯款帳號">
              <div className="text-primary-500 font-medium flex justify-end items-center">
                <div>1234 5678 1234 5678</div>
                <div className="icon ic_copy ml-1"></div>
              </div>
            </DescriptionItem>
            <DescriptionItem label="匯款截止">2023-02-08 23:59</DescriptionItem>
          </div>
        </div>

        <div className="px-2 mt-4">
          <div className="flex mb-2">
            <div className="bg-gradient-to-b from-[#fffda8] via-[#eaca72] to-[#c3962f] w-2 h-5 rounded-full"></div>
            <div className="text-gray-500 ml-2">注意事項</div>
          </div>
          <div className="whitespace-pre-line text-sm text-gray-400 leading-relaxed">
            {`※審核時間約1~3分鐘，可自行查看審核進度；請確實依頁面範例填寫資料，避免資料重審，浪費您寶貴的時間！如有驗證相關問題請洽客服人員。
※因網路詐騙手法推陳出新， 為保障會員點數託售安全，需透過帳戶驗證才會開放給配合之點數交易平台，提供購
買遊戲幣及託售遊戲幣。
※本取得的個人資料，僅供配合之遊戲交易平台託售使用本站不會將會員個資提供給第三人，或移作其他使用。
`}
            <span className="text-red-600">{`※如有利用本平台進行任何洗錢詐騙行為，本公司將停權會員並協助提供資料予檢調單位及永久扣留帳戶點數。`}</span>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default PaymentDetailPage
