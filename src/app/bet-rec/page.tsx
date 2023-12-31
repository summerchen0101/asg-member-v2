import AppLayout from '@/components/AppLayout'
import { LuCopy } from 'react-icons/lu'
import {
  BiChevronRight,
  BiChevronsRight,
  BiChevronLeft,
  BiChevronsLeft,
} from 'react-icons/bi'

function BetRecPage() {
  return (
    <AppLayout title="投注紀錄">
      {/* <TabGroup
        options={mapToOpts({ record: '投注紀錄', history: '歷史帳務' })}
        value="record"
      /> */}
      <div className="p-3">
        <div className="white-box overflow-hidden">
          <div className="bg-gray-400 text-white py-1.5 px-3 text-sm flex justify-between">
            <div className="">遊戲名稱</div>
            <div className="">Super體育-足球</div>
          </div>
          <table className="custom-table">
            <thead>
              <tr>
                <th className="w-1/2">注單號</th>
                <th>投注金額</th>
                <th>輸贏</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td>
                    <div className="flex items-center justify-center">
                      <div className="">120701491559831</div>
                      <LuCopy className="ml-2 text-base text-gray-400" />
                    </div>
                  </td>
                  <td>0.00</td>
                  <td>0.00</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>
                  <div className="py-1.5 px-4 flex justify-center">
                    <div className="flex items-center gap-x-8">
                      <BiChevronsLeft className="text-xl" />
                      <BiChevronLeft className="text-xl" />
                      <div className="">1 / 1</div>
                      <BiChevronRight className="text-xl" />
                      <BiChevronsRight className="text-xl" />
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
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

export default BetRecPage
