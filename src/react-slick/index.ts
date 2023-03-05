import homeCarouselFirst from '../../public/homeCarousel/homeCarouselFirst.jpeg'
import homeCarouselSecond from '../../public/homeCarousel/homeCarouselSecond.jpeg'
import homeCarouselThird from '../../public/homeCarousel/homeCarouselThird.jpeg'
import homeCarouselFourth from '../../public/homeCarousel/homeCarouselFourth.jpeg'

export const slick_data = {
  settings: {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000
  },
  imagesAry: [
    homeCarouselFirst,
    homeCarouselSecond,
    homeCarouselThird,
    homeCarouselFourth
  ]
}
