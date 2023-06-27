import AppLayout from '@/components/AppLayout'
import TabGroup from '@/components/TabGroup'
import { getWeekDates, mapToOpts } from '@/utils'
import { startOfWeek } from 'date-fns'

function GameBetRecPage() {
  return (
    <AppLayout title="投注紀錄">
      {/* <TabGroup
        options={mapToOpts({ record: '投注紀錄', history: '歷史帳務' })}
        value="record"
      /> */}
      <div className="p-3">
        <div className="white-box overflow-hidden">
          <div className="bg-gray-400 text-white py-1.5 px-3 text-sm flex justify-between">
            <div className="">遊戲商</div>
            <div className="">Super體育</div>
          </div>
          <table className="custom-table">
            <thead>
              <tr>
                <th>遊戲名稱</th>
                <th>筆數</th>
                <th>投注金額</th>
                <th>輸贏</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td>足球</td>
                  <td>0</td>
                  <td>0.00</td>
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

export default GameBetRecPage
