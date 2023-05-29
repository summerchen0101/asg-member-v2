'use-client'
import React from 'react'

type Props = {
  children?: string
}
function WhiteBoxTitle({ children }: Props) {
  return (
    <div className="flex bg-[#eff2f5] rounded-t-lg py-1 px-2">
      <div className="bg-gradient-to-b from-[#fffda8] via-[#eaca72] to-[#c3962f] w-2 h-5 rounded-full"></div>
      <div className="text-gray-600 ml-2">{children}</div>
    </div>
  )
}

export default WhiteBoxTitle
