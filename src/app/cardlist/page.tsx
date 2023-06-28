import AppLayout from '@/components/AppLayout'
import { FaRegCheckSquare } from 'react-icons/fa'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
function CreateListPage() {
  return (
    <AppLayout title="卡片管理">
      <div className="py-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-x-3">
          <div className="w-72 relative">
            <img src="/img/bankcard_add1.png" alt="" />
            <div className="icon ic_addcard_set absolute top-0 right-0 text-white text-sm pl-8 mt-0.5 mr-0.5">
              預設
            </div>
            <div className="absolute top-0 left-0 space-y-3 pt-12 pl-7">
              <div className="text-white drop-shadow-md scale-y-90 text-base font-medium tracking-wide">
                <div>012 台北富邦銀行</div>
                <div>中山分行</div>
                <div>王小明</div>
                <div>1234 1234 0000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-16 items-center">
            <div className="">
              <ImCheckboxChecked className="text-primary-500 text-xl" />
            </div>
            <div className="icon ic_carddelete1"></div>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="w-72 relative">
            <img src="/img/bankcard_add2.png" alt="" />
            <div className="icon ic_addcard_check absolute top-0 right-0 text-white text-sm pl-6 mt-0.5 mr-0.5">
              審核中
            </div>
            <div className="absolute top-0 left-0 space-y-3 pt-12 pl-7">
              <div className="text-white drop-shadow-md scale-y-90 text-base font-medium tracking-wide">
                <div>012 台北富邦銀行</div>
                <div>中山分行</div>
                <div>王小明</div>
                <div>1234 1234 0000</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-16 items-center">
            <div className="">
              <ImCheckboxUnchecked className="text-gray-400 text-xl" />
            </div>
            <div className="icon ic_carddelete2"></div>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="w-72 relative">
            <img src="/img/bankcard_add.png" alt="" className="drop-shadow" />
            <div className="absolute bottom-0 left-0 text-sm text-center w-full mb-7">
              <div className="text-gray-700">新增銀行卡</div>
              <div className="text-gray-400">(最多可綁定3張)</div>
            </div>
          </div>
          <div className="w-7"></div>
        </div>
      </div>
    </AppLayout>
  )
}

export default CreateListPage
