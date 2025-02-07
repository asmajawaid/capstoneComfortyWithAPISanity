import Link from "next/link"
import { CiCircleAlert } from "react-icons/ci"

const NeedHelp = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-600">
    
      <nav className="flex gap-4">
        {/* Other links can go here */}
        <Link href="/need-help" className="flex gap-1">
          <div className="text-[#FFFFFF] w-4 h-4 opacity-70">
            <CiCircleAlert />
          </div>
          <div className="text-[#FFFFFF] w-[65px] h-[17px] font-normal text-[13px] leading-[16.9px] items-center">
            Need Help
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default NeedHelp

