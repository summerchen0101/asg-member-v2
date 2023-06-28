import AppLayout from '@/components/AppLayout'
import MyInput from '@/components/MyInput'
import RadioBtns from '@/components/RadioBtns'
import TabGroup from '@/components/TabGroup'
import WhiteBoxTitle from '@/components/WhiteBoxTitle'
import { mapToOpts } from '@/utils'

function NewsDetailPage() {
  return (
    <AppLayout title="公告詳情">
      <div className="p-3">
        <div className="white-box">
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
          <div className="p-3 px-4">
            <div className="text-gray-500 whitespace-pre-line">
              {`因您的審核資料有誤，
              已將您的資料駁回，
              請重新上傳您的資料請重新上傳您的資料請重新上傳您的資料請

              重新上傳您的資料請重新上傳您的資料，並與客服中心聯繫。請重新上傳您
              的資料請重新上傳您的資料請重
              新上傳您的資料請重新上傳您的資料

              因您的審核資料有誤，已將您的資料駁回，
              請重新上傳您的資料請重新上傳您的資料請重新上傳
              您的資料請重新上傳您的資料請重新上傳您的資料，並與客服中心聯繫。請重新上傳您的資料請重新上傳您的資料請重新上傳您的資料請重新上傳您的資料`}
            </div>
          </div>
          <div className="flex justify-center mt-3 mb-6">
            <div className="sub-btn text-sm py-1 px-8">返回</div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default NewsDetailPage
