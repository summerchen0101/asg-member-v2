import LoginInput from '@/components/LoginInput'
import React from 'react'
function LoginPage() {
  return (
    <div className="flex items-center justify-center bg-[url('/img/bg_login.jpg')] bg-center bg-cover bg-fixed overflow-y-auto">
      <div className="py-10">
        <div className="icon logo_login mx-auto mb-8" />
        <div className="icon img_joinus mx-auto mb-6"></div>
        <div className="icon tag_login_base pt-[3px] mb-8">
          <div className="flex items-center">
            <div className="btn-base w-[135px] flex justify-center items-center">
              <div className="btn-text">登入</div>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <div className="btn-text">註冊</div>
            </div>
          </div>
        </div>

        <LoginInput
          icon="ic_login_id"
          placeholder="請輸入會員帳號"
          autocomplete="new-password"
          className="mb-4"
        />
        <LoginInput
          icon="ic_login_pw"
          placeholder="請輸入用戶密碼"
          password
          autocomplete="new-password"
        />
        <div className="mt-5 flex justify-between w-[280px] px-3">
          <label>
            <input
              type="checkbox"
              className="border border-white text-yellow-500 bg-transparent"
            />
            <span className="ml-2 text-white tracking-wider text-sm">
              記住帳密
            </span>
          </label>

          <a href="#" className="link text-white text-sm">
            忘記密碼
          </a>
        </div>
        <div className="icon btn_login_base mt-5 flex items-center justify-center">
          <div className="btn-text">登入</div>
        </div>

        <div className="space-x-6 text-center my-8 -ml-4">
          <a href="#" className="text-white link">
            先去逛逛
          </a>
          <span className="border-r border-white h-10"></span>
          <a href="#" className="text-white link">
            在線客服
          </a>
        </div>
        <div className="bg-[rgba(255,255,255,0.2)] rounded-full w-[280px] h-12 flex items-center px-6">
          <div className="icon logo_appdnld mr-2"></div>
          <div className="text-white text-sm">
            <div className="">
              <span className="">下載FA8 APP</span>
              <span className="link float-right">立即下載</span>
            </div>
            <div className="">百萬玩家信賴 隨時隨地暢玩</div>
          </div>
        </div>
        <div className="flex gap-x-6 items-center mt-6 px-2">
          <div className="flex flex-col items-center">
            <div className="icon ic_info1 mb-2"></div>
            <div className="text-gray-200 text-xs">加密安全</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon ic_info2 mb-2"></div>
            <div className="text-gray-200 text-xs">海量賽事</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon ic_info3 mb-2"></div>
            <div className="text-gray-200 text-xs">極速存取</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="icon ic_info4 mb-2"></div>
            <div className="text-gray-200 text-xs">裝置兼容</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
