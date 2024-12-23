import React from 'react'
import { PiCalendarDotsThin } from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";
import DatePickerInput from './DatePickerInput';




const HeroForm = () => {
    return (
        <div className=" bg-white rounded-lg flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow">
            <div className='flex items-center gap-2 bg-[#F4F4F4] rounded-md p-1 cursor-pointer'>
                <div className='text-[#FF2D5C] px-8 py-4 bg-white rounded-md'>One Way</div>
                <div className='px-8 py-4'>Round Trip</div>
                <div className='px-8 py-4'>Hourly</div>
            </div>

            <div className='flex flex-col items-start gap-1 px-5  py-4'>
                <div className='flex items-center gap-1 px-2'>
                    <label htmlFor="from">From</label>
                    <input className='outline-none flex-1' placeholder='(airport, hotel, address)' />
                </div>
                <div className='w-full mt-2 relative'>
                    <span className='text-[#FF2D5C] bg-white -top-3 absolute right-8 p-1 rounded-full border border-[#FF2D5C] cursor-pointer'>
                        <RiArrowUpDownLine size={14} />
                    </span>
                    <div className='h-[0.5px] bg-gray-900/45  w-full' />
                </div>

            </div>

            <div className='flex flex-col items-start gap-1 px-5  py-4'>
                <div className='flex items-center gap-1 px-2'>
                    <label htmlFor="from">To</label>
                    <input className='outline-none flex-1' placeholder='(airport, hotel, address)' />
                </div>
                <span className='h-[0.5px] bg-gray-900/45 mt-2 w-full' />
            </div>

            <div className='flex gap-10 pr-10 px-5 py-4  items-center justify-center'>
                {/* Date Picker for Pick up date */}
                <DatePickerInput
                    placeholder='Pick up date'
                    format="MM/DD/YY"
                    className="w-full"
                />



                {/* Time Picker for Pick up time */}
                <input
                    type="time"
                    placeholder="Pick up time"
                    className="w-full"
                />

            </div>






            <div className='flex flex-col items-start gap-1 px-5 py-4'>
                <div className='flex items-center gap-1 px-2'>
                    <IoIosMail size={24} className='opacity-50' />
                    <input className='outline-none flex-1' placeholder='Email' />
                </div>
                <span className='h-[0.5px] bg-gray-900/45 mt-2 w-full' />
            </div>

            <div className='flex flex-col items-start gap-1 px-5  py-4'>
                <div className='flex items-center gap-1 px-2'>
                    <svg width="25px" height="25px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet"><path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"></path><path fill="#CF1B2B" d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"></path><path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"></path><path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path></svg>
                    <IoIosArrowDown />
                    <input type='number' className='outline-none flex-1 appearance-none' placeholder='Phone number' />
                </div>
                <span className='h-[0.5px] bg-gray-900/45 mt-2 w-full' />
            </div>

            <div className='flex items-center gap-2 w-full px-7 py-2'>
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="checkbox">Additional Requirements</label>
            </div>

            <div className='p-1 w-full'>
                <button className="text-white w-full bg-[#FF2D5C] rounded-md border-0 py-2 px-6 focus:outline-none hover:bg-[#FF2D5C] text-lg">Search</button>
            </div>
        </div>
    )
}

export default HeroForm