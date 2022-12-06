import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slideImg1 from './img/IMG_3419.JPG'
import slideImg2 from './img/IMG_3421.JPG'
import slideImg3 from './img/IMG_3426.JPG'

const Slider = () => {
    return(
        <Carousel>
            <div>
                <img src={slideImg1} alt="" />
                <p className="legend">皆一生懸命です</p>
            </div>
            <div>
                <img src={slideImg2} alt="" />
                <p className="legend">皆一生懸命です</p>
            </div>
            <div>
                <img src={slideImg3} alt="" />
                <p className="legend">皆一生懸命です</p>
            </div>
        </Carousel>
    )
}
export default Slider;