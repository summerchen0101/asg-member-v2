import AppLayout from '@/components/AppLayout'
import MyInput from '@/components/MyInput'
import TabGroup from '@/components/TabGroup'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'

function MessagePage() {
  return (
    <AppLayout title="訊息中心">
      <TabGroup
        options={mapToOpts({ message: '收件夾(2)', news: '平台公告(5)' })}
        value="message"
      />
      <div className="p-3 space-y-3">
        {[...Array(2)].map((_, i) => (
          <div className="white-box" key={i}>
            <WhiteBoxTitle
              addonAfter={
                <div className="text-sm text-gray-400 font-medium">
                  2021-05-06
                </div>
              }
            >
              審核資料有誤
            </WhiteBoxTitle>
            <div className="p-2 px-4">
              <div className="text-gray-500 line-clamp-3">
                因您的審核資料有誤，已將您的資料駁回，
                請重新上傳您的資料請重新上傳您的資料請重新上傳您的資料請重新上傳您的資料請重新上傳您的資料，並與客服中心聯繫。請重新上傳您的資料請重新上傳您的資料請重新上傳您的資料請重新上傳您的資料
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppLayout>
  )
}

export default MessagePage
