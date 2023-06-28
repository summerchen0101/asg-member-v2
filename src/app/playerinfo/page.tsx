import AppLayout from '@/components/AppLayout'
import MyInput from '@/components/MyInput'
import SelectInput from '@/components/SelectInput'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'

function PlayerInfoPage() {
  return (
    <AppLayout title="個人資料">
      <div className="p-3">
        <div className="white-box pb-2">
          <WhiteBoxTitle>基本資料</WhiteBoxTitle>
          <div className="py-3 px-5 space-y-2">
            <MyInput label="真實姓名" value="王小明" readOnly />
            <MyInput label="暱稱" value="板橋金乘五" />
            <MyInput label="帳號" value="ABC12345678" readOnly />
            <MyInput label="生日" value="1990-05-20" readOnly />
            <MyInput label="手機" value="0910666888" readOnly />
          </div>
        </div>
        <div className="white-box pb-2 mt-3">
          <WhiteBoxTitle
            addonAfter={<div className="sub-btn px-2 py-0.5">查看範例</div>}
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

export default PlayerInfoPage
