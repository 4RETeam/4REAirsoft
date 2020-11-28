import { ProductDocument } from 'apps/nestgqltsveikals/src/products/schemas/products.schema';
import Slider from 'react-slick';

let settings = {
  dots: false,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  className: 'sample',
};

const imageContainer = (props: ProductDocument[]) => {
  const rows = [];
  for (let i = 0; i < props.length; i++) {
    console.log(props[i].imagePath ? props[i] : '')
    rows.push(
      <div key={props[i]._id} className="" id="slider-conteiner">
        <a href="">
          <div className="inner">
            <img src={'products/'+props[i].imagePath}></img>
            <div className="slide-text bg-dark text-center">
              {props[i].name}
            </div>
          </div>
        </a>
      </div>,
    );
  }
  return rows;
};
export const MainSlider = props => {
  return (
    <div className="my-5">
      <Slider {...settings}>{imageContainer(props.Props)}</Slider>
    </div>
  );
};
