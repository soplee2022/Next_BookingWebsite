import Image from 'next/image';


export function Step({ stepPic, txt }: any) {
  return (
    <div className='w-[160px]'>
      {/* 上方圖片 */}
      <div className='bg-light-primary py-[9px] flex justify-center items-center h-[50px]'>
        <Image src={stepPic} alt='' />
      </div>
      {/* 下方文字 */}
      <div className='border border-light-primary h-[86px] rounded-br-[10px] rounded-bl-[10px] px-2'>
        <p className='text-xs text-primary mt-[14px] text-center'>{txt}</p>
      </div>
    </div>
  );
}
