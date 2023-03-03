import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { slick_data } from '@/react-slick'

export function HomeCarousel() {
  const { settings, imagesAry }= slick_data

  return (
    <Slider {...settings}>
      {imagesAry.map((image, index) => {
        return (
          <div
            key={index}
            className='relative after:absolute after:w-screen after:h-screen after:bg-black after:opacity-40 after:top-0 after:left-0 -z-10'
          >
            <Image
              src={image}
              width={undefined}
              height={undefined}
              alt='carousel-picture'
              className='w-screen h-screen'
            />
          </div>
        )
      })}
    </Slider>
  )
}
