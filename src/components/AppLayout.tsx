'use client'
import React, { ReactNode } from 'react'
import AppFooter from './AppFooter'

type Props = {
  title?: string
  children?: ReactNode
  active?: 'payment' | 'service' | 'my' | 'promotion'
}

function AppLayout({ title, children, active }: Props) {
  return (
    <div className="h-full bg-[#f4f5f7]">
      <div className="bg-header relative">
        <div className="icon ic_back absolute left-0 ml-3"></div>
        {title}
      </div>
      {children}
      {/* <div className="fixed bottom-0 w-full h-[68px]">
        <img src="/img/bg_basebtn.png" className="absolute top-0" alt="" />
        <div className="icon ic_base_logo mx-auto mt-[-22px] scale-[98%]"></div>
      </div> */}
      <AppFooter active={active} />
      {/* <div className="bg-[url('/img/bg_basebtn.png')]">
        <div className="icon ic_base_logo mx-auto"></div>
      </div> */}
    </div>
  )
}

export default AppLayout