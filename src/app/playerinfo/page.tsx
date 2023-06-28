import AppLayout from '@/components/AppLayout'
import BoxDescItem from '@/components/BoxDescItem'
import MyInput from '@/components/MyInput'
import SelectInput from '@/components/SelectInput'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'
import { FaEdit } from 'react-icons/fa'

function PlayerInfoPage() {
  return (
    <AppLayout title="個人資料">
      <div className="p-3">
        <div className="white-box pb-2">
          <WhiteBoxTitle>基本資料</WhiteBoxTitle>
          <div className="py-3 px-5 space-y-3">
            <BoxDescItem label="真實姓名">王小明</BoxDescItem>
            <BoxDescItem label="暱稱" allowEdit>
              板橋金乘五
            </BoxDescItem>
            <BoxDescItem label="帳號">ABC12345678</BoxDescItem>
            <BoxDescItem label="生日" allowEdit>
              1990-05-20
            </BoxDescItem>
            <BoxDescItem label="手機">0910666888</BoxDescItem>
          </div>
        </div>
        <div className="white-box pb-2 mt-3">
          <WhiteBoxTitle>聯絡資訊</WhiteBoxTitle>
          <div className="py-3 px-5 space-y-3">
            <BoxDescItem
              label="LineID"
              allowEdit
              icon={<div className="icon ic_line"></div>}
            >
              shaumin123
            </BoxDescItem>
            <BoxDescItem
              label="WeChat"
              allowEdit
              icon={<div className="icon ic_wechat"></div>}
            >
              johnnygogo
            </BoxDescItem>
            <BoxDescItem
              label="Telegram"
              allowEdit
              icon={<div className="icon ic_telegram"></div>}
            >
              johnny2020
            </BoxDescItem>
          </div>
        </div>
        <div className="white-box mt-3 flex justify-between items-center py-2 pl-6 pr-4">
          <div className="text-primary-500">登入密碼</div>
          <div className="icon btn_a1_base text-primary-600 flex items-center justify-center">
            修改
          </div>
        </div>
        <div className="white-box mt-3 flex justify-between items-center py-2 pl-6 pr-4">
          <div className="text-primary-500">取款密碼</div>
          <div className="icon btn_a1_base text-primary-600 flex items-center justify-center">
            立即設定
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default PlayerInfoPage
