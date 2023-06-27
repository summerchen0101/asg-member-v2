import AppLayout from '@/components/AppLayout'
import TabGroup from '@/components/TabGroup'
import { getWeekDates, mapToOpts } from '@/utils'
import { startOfWeek } from 'date-fns'

function DateBetRecPage() {
  const thisWeekDays = getWeekDates()
  const lastWeekDays = getWeekDates(1)
  return (
    <AppLayout title="投注紀錄">
      {/* <TabGroup
        options={mapToOpts({ record: '投注紀錄', history: '歷史帳務' })}
        value="record"
      /> */}
      <div className="p-3">
        <div className="white-box">
          <div className="flex justify-between py-2 px-3 text-gray-600 text-sm">
            <div className="">遊戲平台</div>
            <div className="text-gray-500">全部</div>
          </div>
          <div className="bg-gray-400 text-white py-1.5 px-3 text-sm flex justify-between">
            <div className="">搜尋區間</div>
            <div className="">2023-02-06 ~ 2023-02-07</div>
          </div>
          <table className="custom-table">
            <thead>
              <tr>
                <th>日期</th>
                <th>筆數</th>
                <th>輸贏</th>
              </tr>
            </thead>
            <tbody>
              {thisWeekDays.map((t) => (
                <tr key={t}>
                  <td>{t}</td>
                  <td>0</td>
                  <td>
                    <div className="flex items-center justify-center">
                      <div className="">0.00</div>
                      <div className="icon ic_arrow ml-2"></div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center text-sm text-gray-500 bg-gradient-to-b from-gray-200 to-90% to-white">
            <div className="flex-1 text-center py-3">
              <div className="">總投注金額</div>
              <div className="">0.00</div>
            </div>
            <div className="border-r border-slate-300 h-6"></div>
            <div className="flex-1 text-center py-3">
              <div className="">輸贏金額</div>
              <div className="">0.00</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default DateBetRecPage
