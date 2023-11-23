import Carousel from 'react-bootstrap/Carousel';
import { Image } from './slider image';
import img from "../image/hero-bg.jpg"
import img1 from "../image/CPA_Blog_How-Will-Tech-Impact-Accounting_Header-1024x536.webp"
import img2 from "../image/IMG-worlds-of-adventure.webp"
function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Image img={img} />
        <Carousel.Caption>
        <div className='img-text'>
          <h1 className='text-h1'>YOUR SAFTE </h1>
          <h1 className='text-h2'>YOUR RESPONSIBILITY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua. Ut enim ad minim veniam</p>
          <div className="but">
            <button className='but-1'>Read more </button>
            <button className='but-2'>Get aqute</button>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image img={img1}/>
        <Carousel.Caption>
        <div className='img-text'>
          <h1 className='text-h1'>YOUR SAFTE </h1>
          <h1 className='text-h2'>YOUR RESPONSIBILITY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua. Ut enim ad minim veniam</p>
          <div className="but">
            <button className='but-1'>Read more </button>
            <button className='but-2'>Get aqute</button>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image img={img2}/>
        <Carousel.Caption>
        <div className='img-text'>
          <h1 className='text-h1'>YOUR SAFTE </h1>
          <h1 className='text-h2'>YOUR RESPONSIBILITY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua. Ut enim ad minim veniam</p>
          <div className="but">
            <button className='but-1'>Read more </button>
            <button className='but-2'>Get aqute</button>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel >

    
  );
}

export default Slider;