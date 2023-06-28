import AppLayout from '@/components/AppLayout'
import MyInput from '@/components/MyInput'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'

function TradePwEditPage() {
  return (
    <AppLayout title="個人資料">
      <div className="p-3">
        <div className="white-box pb-6">
          <WhiteBoxTitle>設定取款密碼</WhiteBoxTitle>
          <div className="p-6 space-y-6">
            <MyInput
              label="取款密碼"
              placeholder="請輸入取款密碼"
              type="password"
            />
            <MyInput
              label="確認密碼"
              placeholder="請再次輸入新密碼"
              type="password"
            />
            <MyInput
              label="驗證碼"
              placeholder="請輸入驗證碼"
              afterAddon={
                <div className="bg-gradient-to-b from-[#c3962f] to-[#eaca72] text-white rounded-full py-1 px-2 text-sm whitespace-nowrap ml-1">
                  取得驗證碼
                </div>
              }
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

export default TradePwEditPage
