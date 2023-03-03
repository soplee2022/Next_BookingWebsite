import Image from 'next/image'
import { HomeCarousel } from '../components/HomeCarousel'
import logo from '../../public/logo.svg'

export default function Home() {
  return (
    <div className='relative'>
      <HomeCarousel />

      <div className='w-full h-screen flex justify-center items-center absolute top-0 left-0 py-[109px]'>
        <div className='container flex justify-between h-full'>
          {/* 左邊文字區塊 */}
          <div className='flex mr-[30px] flex-col justify-between flex-shrink-0'>
            <Image src={logo} alt='logo' />
            <div className='text-xs text-white'>
              <h3 className='mb-4'>好室旅店。HOUSE HOTEL</h3>
              <ul className='flex flex-col space-y-[6px] font-light'>
                <li>花蓮縣花蓮市國聯一路1號</li>
                <li className='openSans'>03-8321155</li>
                <li className='openSans'>HOUSE@HOTEL.COM</li>
              </ul>
            </div>
          </div>
          {/* 右邊房型區塊 */}
          {/* <RoomList data={data}/> */}
        </div>
      </div>
    </div>
  )
}
