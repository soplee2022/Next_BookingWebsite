import { stepAry } from '@/lib/bookingStepIcons'
import { ArrowStep } from '../components/ArrowStep'
import { Step } from '../components/Step'
import step3 from '../../../../public/amenities/reservationflow_step_3.svg'

export function BookingStep() {
  return (
    <div>
      {/* 副標題區塊 */}
      <div className='relative'>
        <h3 className='dialogTitle'>預約流程</h3>
        <div className='dialogTitle_div'></div>
      </div>

      {/* 流程清單 */}
      <ul className='flex mt-[19px]'>
        {stepAry.map((stepItem, index) => {
          return (
            <ArrowStep key={index} stepPic={stepItem.pic} txt={stepItem.txt} />
          )
        })}

        <li className='flex'>
          <Step stepPic={step3} txt={'線上送出預約單'} />
          <div className='flex justify-center h-[50px] w-[31px]'></div>
        </li>
      </ul>
    </div>
  )
}
