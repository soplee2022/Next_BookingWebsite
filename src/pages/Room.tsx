
import { Nav } from '../components/rooms/Nav';

export default function Room() {
  return (
    <>
      <div className=' flex  justify-between relative -z-10'>
        <Nav  />

        <div className='container flex hidden'>
          {/* 因nav改fixed出現的佔位格 */}
          <div className='w-[42%] mr-[30px] flex-shrink-0 '></div>
          {/* 房間細節 */}
          <div className=' mt-[13vh]  w-[635px] text-primary'>
            {/* <RoomDetail
            data={data}
            roomData={roomData}
            roomInfo={roomInfo}
            iconsAry={iconsAry}
            iconsName={iconsName}
            itemsAry={itemsAry}
            bedType={bedType}
          /> */}
            <p className='text-primary text-sm font-medium mb-2 leading-6'>
              空房狀態查詢
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

