import AppLayout from '@/components/AppLayout'
import TabGroup from '@/components/TabGroup'
import { getWeekDates, mapToOpts } from '@/utils'
import { startOfWeek } from 'date-fns'

function BetRecPage() {
  const thisWeekDays = getWeekDates()
  const lastWeekDays = getWeekDates(1)
  return (
    <AppLayout title="投注紀錄">
      <TabGroup
        options={mapToOpts({ record: '投注紀錄', history: '歷史帳務' })}
        value="history"
      />
      <div className="p-3">
        <table className="custom-table box">
          <thead>
            <tr>
              <th>日期</th>
              <th>投注金額</th>
              <th>有效投注</th>
              <th>輸贏</th>
            </tr>
          </thead>
          <tbody>
            {thisWeekDays.map((t) => (
              <tr key={t}>
                <td>{t}</td>
                <td>0.00</td>
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
          <thead>
            <tr>
              <th>本週統計</th>
              <th>0.00</th>
              <th>0.00</th>
              <th className="pr-4">0.00</th>
            </tr>
          </thead>
        </table>

        <table className="custom-table box mt-3">
          <thead>
            <tr>
              <th>日期</th>
              <th>投注金額</th>
              <th>有效投注</th>
              <th>輸贏</th>
            </tr>
          </thead>
          <tbody>
            {lastWeekDays.map((t) => (
              <tr key={t}>
                <td>{t}</td>
                <td>0.00</td>
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
          <thead>
            <tr>
              <th>本週統計</th>
              <th>0.00</th>
              <th>0.00</th>
              <th className="pr-4">0.00</th>
            </tr>
          </thead>
        </table>
      </div>
    </AppLayout>
  )
}

export default BetRecPage
