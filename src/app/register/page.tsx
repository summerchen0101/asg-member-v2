import LoginInput from '@/components/LoginInput'
import React from 'react'
function LoginPage() {
  return (
    <div className="flex items-center justify-center bg-[url('/img/bg_login.jpg')] bg-center bg-cover bg-fixed overflow-y-auto">
      <div className="py-10">
        <div className="icon logo_login mx-auto mb-8" />
        <div className="icon img_joinus mx-auto mb-6"></div>
        <div className="icon tag_login_base pt-[3px] mb-8 px-[2px]">
          <div className="flex items-center">
            <div className="flex-1 justify-center items-center">
              <div className="btn-text">登入</div>
            </div>
            <div className="btn-base h-9 w-[140px] flex justify-center items-center">
              <div className="btn-text">註冊</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <LoginInput
            icon="ic_login_id"
            placeholder="請輸入會員帳號"
            autocomplete="new-password"
          />
          <LoginInput
            icon="ic_login_pw"
            placeholder="請輸入用戶密碼"
            password
            autocomplete="new-password"
          />
          <LoginInput
            icon="ic_login_cf"
            placeholder="請確認密碼"
            password
            autocomplete="new-password"
          />
          <LoginInput
            icon="ic_login_phone"
            placeholder="請輸入手機號碼"
            addonAfter={
              <div className="bg-yellow-500 rounded-full h-7 px-3 py-1 text-white text-sm drop-shadow-lg">
                獲取驗證碼
              </div>
            }
          />
          <LoginInput icon="ic_login_vf" placeholder="請輸入手機驗證碼" />
          <LoginInput
            icon="ic_login_agno"
            placeholder="請輸入經銷商號碼(選填)"
          />
        </div>
        <div className="mt-5">
          <label>
            <input
              type="checkbox"
              className="border border-white text-yellow-500 bg-transparent"
            />
            <span className="ml-2 text-white tracking-wider text-sm">
              我已年滿18歲並同意相關規範及開戶協議
            </span>
          </label>
        </div>
        <div className="icon btn_login_base mt-5 flex items-center justify-center">
          <div className="btn-text">註冊</div>
        </div>

        <div className="space-x-6 text-center my-8 -ml-4">
          <a href="#" className="text-white link">
            已有帳號
          </a>
          <span className="border-r border-white h-10"></span>
          <a href="#" className="text-white link">
            在線客服
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
