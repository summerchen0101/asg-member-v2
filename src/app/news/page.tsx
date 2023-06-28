import AppLayout from '@/components/AppLayout'
import MyInput from '@/components/MyInput'
import RadioBtns from '@/components/RadioBtns'
import TabGroup from '@/components/TabGroup'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'

function NewsPage() {
  return (
    <AppLayout title="訊息中心">
      <TabGroup
        options={mapToOpts({ message: '收件夾(2)', news: '平台公告(5)' })}
        value="news"
      />
      <div className="p-3">
        <RadioBtns
          options={mapToOpts({
            all: '全部',
            site: '網站公告',
            game: '遊戲相關',
          })}
          value="all"
        />
        <div className="space-y-3 mt-1">
          {[...Array(2)].map((_, i) => (
            <div className="white-box" key={i}>
              <WhiteBoxTitle
                icon={<img src="/img/ic_message3.png" alt="" className="w-6" />}
                addonAfter={
                  <div className="text-sm text-gray-400 font-medium">
                    2021-05-06
                  </div>
                }
              >
                RSG電子維護公告
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
      </div>
    </AppLayout>
  )
}

export default NewsPage
