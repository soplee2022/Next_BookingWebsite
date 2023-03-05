import { iconsAry } from '@/lib/roomIcons'
import Image from 'next/image'
import { BookingStep } from '../containers/BookingStep'

export default function RoomsInfo() {
  return (
    <>
      {/* 標題 */}
      <div className='relative'>
        <h3 className='dialogTitle text-2xl'>Single Room</h3>
        <div className='dialogTitle_div'></div>
      </div>

      {/* 房型資訊 */}
      <div className='mt-2 text-sm text-primary leading-[1.7] mb-[27px]'>
        {1}人・ {'單人床'}
        ・附早餐・ 衛浴
        {1}間・
        {18}平方公尺
        <br /> 平日（一～四）價格：{1380} / 假日（五〜日）價格：
        {1580}
      </div>

      {/* 房間設施 */}
      <ul className='flex flex-wrap gap-x-[30px]'>
        {iconsAry.map((item, i) => {
          return (
            <li key={i}>
              <div className='flex flex-col space-y-2 items-center'>
                <Image src={item.src} width={40} height={40} alt='facilities' />
              </div>
            </li>
          )
        })}
      </ul>

      {/* 訂房資訊 */}
      <div className='mb-3'>
        {/* 副標題區塊 */}
        <div className='relative'>
          <h3 className='dialogTitle'>訂房資訊</h3>
          <div className='dialogTitle_div'></div>
        </div>
        {/* 資訊清單 */}
        <ul className='mt-2 text-xs text-primary leading-[2.16666] font'>
          <li>
            ・入住時間：最早{'15:00'}，最晚{'21:00'}；退房時間：
            {'10:00'}，請自行確認行程安排。
          </li>
          <li>・平日定義週一至週四；假日定義週五至週日及國定假日。</li>
          <li>・好室旅店全面禁止吸菸。</li>
          <li>
            ・若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 -
            18:00 )。
          </li>
        </ul>
      </div>

      {/* 預約流程 */}
      <BookingStep />
    </>
  )
}
