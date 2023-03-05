import Image from 'next/image'
import room1 from '../../../public/room1/singleRoom.jpeg'
import backHome from '../../../public/backHome.png'
import ModalBtn from '@/antd/ModalBtn'

export function Nav() {
  return (
    <nav className='w-[42%] max-w-[573px] h-full flex flex-col justify-between fixed'>
      {/* 輪播圖 */}
      <Image
        className='h-full object-cover fixed top-0 left-0'
        src={room1}
        width={573}
        alt='room-pic'
        priority
      />

      {/* 返回首頁按鈕 */}
      <div className='font-light text-sm 2xl:text-base 3xl:text-lg text-primary'>
        <button
          type='button'
          className='flex items-center relative mt-[87px] ml-[13vh]'
        >
          <Image src={backHome} alt='backHome' className='m-[10px] ' />
          查看其他房型
        </button>
      </div>

      {/* 價格＆預約按鈕 */}
      <div className=' flex flex-col relative mb-[13vh] items-center'>
        <div className='mb-[10px]'>
          <span className='text-[36px] text-primary'>$3,000</span>
          <span className='text-xl text-primary'>{` / 1晚`}</span>
        </div>

        <ModalBtn />
      </div>
    </nav>
  )
}
