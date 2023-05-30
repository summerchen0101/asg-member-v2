import AppLayout from '@/components/AppLayout'
import React from 'react'

function ContactPage() {
  return (
    <AppLayout title="客服中心" active="service">
      <img src="/img/img_service.png" alt="" />

      <div className="space-y-4 mx-auto w-[340px] -mt-10">
        <div className="white-box h-14 flex items-center px-4">
          <div className="icon ic_service_line mr-4"></div>
          <div className="text-gray-500">Line客服</div>
          <div className="flex-1"></div>
          <div className="icon btn_a1_base text-primary-500 flex items-center justify-center">
            加入
          </div>
        </div>
        <div className="white-box h-14 flex items-center px-4">
          <div className="icon ic_service_online mr-4"></div>
          <div className="text-gray-500">在線客服</div>
          <div className="flex-1"></div>
          <div className="icon btn_a1_base text-primary-500 flex items-center justify-center">
            加入
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default ContactPage
