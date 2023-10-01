import React from "react"
import logo  from "../assets/logo.svg"
import { footerLinks} from "../data/data"

function Footer() {
  return (
    <div className='flex justify-center items-center bg-primary lex-col'>
      <div className='flex justify-center items-start md:flex-row flex-col mb-8 w-full'>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img
            src={logo}
            className='w-[266px] h-[72px] object-contain'
            alt=''
          />
         
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((item) => (
            <div className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">{item.title}</h4>
              <ul className="mt-4">
             {item.links.map((item)=>{
              return(
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">{item.name}</li>
              )
             })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    
    </div>
  )
}

export default Footer