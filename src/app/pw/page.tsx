import AppLayout from '@/components/AppLayout'
import MyInput from '@/components/MyInput'
import SelectInput from '@/components/SelectInput'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'

function PwEditPage() {
  return (
    <AppLayout title="個人資料">
      <div className="p-3">
        <div className="white-box pb-6">
          <WhiteBoxTitle>修改密碼</WhiteBoxTitle>
          <div className="p-6 space-y-6">
            <MyInput
              label="當前密碼"
              placeholder="請輸入原密碼"
              type="password"
            />
            <MyInput
              label="新密碼"
              placeholder="請設定新密碼"
              type="password"
            />
            <MyInput
              label="確認新密碼"
              placeholder="請再次輸入新密碼"
              type="password"
            />
          </div>
          <div className="flex gap-x-12 justify-center">
            <div className="sub-btn text-sm px-8 py-1">取消</div>
            <div className="sub-btn text-sm px-8 py-1">送出</div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default PwEditPage
