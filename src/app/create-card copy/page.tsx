import AppLayout from '@/components/AppLayout'
import MyInput from '@/components/MyInput'
import SelectInput from '@/components/SelectInput'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'

function CreateCardPage() {
  return (
    <AppLayout title="新增銀行卡">
      <div className="p-3">
        <div className="white-box pb-2">
          <WhiteBoxTitle>填寫銀行資料</WhiteBoxTitle>
          <div className="p-6 space-y-5">
            <MyInput label="持卡人姓名" placeholder="請輸入真實姓名" />
            <SelectInput
              label="銀行名稱"
              value="0"
              options={mapToOpts({
                '0': '請選擇銀行',
                '822': '中國信託(822)',
                '013': '國泰世華(013)',
              })}
            />
            <MyInput label="銀行帳號" placeholder="請輸入帳號" />
          </div>
        </div>
        <div className="white-box pb-2 mt-3">
          <WhiteBoxTitle
            addonAfter={
              <div className="sub-btn text-sm px-2 py-0.5">查看範例</div>
            }
          >
            填寫銀行資料
          </WhiteBoxTitle>
          <div className="py-3 pl-16 space-y-3">
            <div className="flex items-center gap-x-4">
              <div className="w-40">
                <img src="/img/upload_bg1.png" alt="" />
              </div>
              <div className="">
                <div className="text-gray-400">身分證</div>
                <div className="text-gray-700">(正面)</div>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="w-40">
                <img src="/img/upload_bg2.png" alt="" />
              </div>
              <div className="">
                <div className="text-gray-400">身分證</div>
                <div className="text-gray-700">(反面)</div>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="w-40">
                <img src="/img/upload_bg3.png" alt="" />
              </div>
              <div className="">
                <div className="text-gray-400">帳戶存摺</div>
              </div>
            </div>
          </div>
        </div>
        <div className="icon btn_a2_base box-downside-btn">送出</div>
      </div>
    </AppLayout>
  )
}

export default CreateCardPage
