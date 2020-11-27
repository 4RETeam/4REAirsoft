import { ProductDocument } from "apps/nestgqltsveikals/src/products/schemas/products.schema";

const imageContainer = (props: ProductDocument[]) => {
    const rows = [];
    for (let i = 0; i < props.length; i++) {
      // console.log(props);
      rows.push(
        <div key={props[i]._id} className="col-6 col-md-3 col-sm-6 catalogue-item text-center">
        <a href="shop">
          <div className="col-3 catalogue-item text-center">
            <div className="catalogue-BG">
              
                <div className="img-cont">
                  <img src="/G17.jpg" />
                </div>
                <p className="textBG">{props[i].name}</p>
                <div className="sales-square">
                  <span>-50%</span>
                </div>
              
            </div>
          </div>
        </a>
      </div>
      );
    }
    return rows;
  };

export const SpecialOffers = props => {
  return (
    <div className="row catalogue-cont">
      {imageContainer(props.Props)}
    </div>
  );
};
