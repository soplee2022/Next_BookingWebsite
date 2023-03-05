import Image from 'next/image';
import arrow from '../../../../public/amenities/icon_arrow.svg';
import { Step } from "./Step";

export function ArrowStep({ stepPic, txt }: any) {
  return (
    <li className='flex'>
      <Step stepPic={stepPic} txt={txt} />
      <div className='flex justify-center h-[50px] w-[31px]'>
        <Image src={arrow} alt={'arrowIcon'} />
      </div>
    </li>
  );
}
