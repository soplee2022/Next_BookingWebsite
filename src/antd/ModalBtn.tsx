import { useState } from 'react'
import { Button, ConfigProvider, Modal } from 'antd'
import RoomsInfo from '@/components/rooms/components/RoomsInfo'

export default function ModalBtn() {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#38470B'
        }
      }}
    >
      <Button
        type='primary'
        className='hover:opacity-40 bg-primary rounded-none h-11 w-[252px] text-xl shadow-none'
        onClick={showModal}
      >
        Booking
      </Button>

      <Modal
        open={open}
        okText={'確認送出'}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1110}
        centered={true}
        footer={null}
      >
        <div className='flex'>
          {/* 左邊輸入欄 */}
          <form className='bg-primary w-[40%] max-w-[455px] px-[65px] py-[50px] flex flex-col  items-center text-white space-y-4'>
            <label className='w-full'>
              <p className='mb-2'>姓名</p>
              <input type='text' className='w-full py-2 px-[10px]' />
            </label>

            <label className='w-full'>
              <p className='mb-2'>姓名</p>
              <input type='text' className='w-full py-2 px-[10px]' />
            </label>

            <label className='w-full'>
              <p className='mb-2'>姓名</p>
              <input type='text' className='w-full py-2 px-[10px]' />
            </label>

            <label className='w-full'>
              <p className='mb-2'>姓名</p>
              <input type='text' className='w-full py-2 px-[10px]' />
            </label>

            <div className='w-full h-full text-center flex flex-col justify-end'>
              <button
                type='button'
                onClick={handleOk}
                className='py-2 w-full border-white border text-white font-bold text-lg mb-[18px] hover:opacity-50 '
              >
                確認送出
              </button>
              <p>此預約系統僅預約功能，並不會對您進行收費</p>
            </div>
          </form>

          {/* 右邊資訊欄 */}
          <div className='bg-white w-[60%] pt-[50px] pb-[26px] pl-[30px] pr-[38px]'>
            <RoomsInfo />
          </div>
        </div>
      </Modal>
    </ConfigProvider>
  )
}
