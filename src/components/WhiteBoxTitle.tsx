'use-client'
import React, { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  addonAfter?: ReactNode
}
function WhiteBoxTitle({ children, addonAfter }: Props) {
  return (
    <div className="flex items-center bg-[#eff2f5] rounded-t-lg py-2 px-2">
      <div className="bg-gradient-to-b from-[#fffda8] via-[#eaca72] to-[#c3962f] w-2 h-5 rounded-full"></div>
      <div className="text-gray-600 ml-2">{children}</div>
      <div className="flex-1"></div>
      {addonAfter}
    </div>
  )
}

export default WhiteBoxTitle
