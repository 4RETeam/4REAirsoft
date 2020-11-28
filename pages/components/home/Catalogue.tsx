import { CategoriesService } from 'apps/nestgqltsveikals/src/categories/categories.service';
import { CategoryDocument } from 'apps/nestgqltsveikals/src/categories/schemas/categories.schema';
import { join } from 'path';
import React from 'react';

const imageContainer = (props: CategoryDocument[]) => {
  const rows = [];
  for (let i = 0; i < props.length; i++) {
    // console.log(props);
    rows.push(
      <div
        key={props[i]._id}
        className="col-6 col-md-3 col-sm-6  catalogue-item text-center"
      >
        <div className="catalogue-BG">
          <a href={'categories/'+props[i].name}>
            <div className="img-cont">
              <img src={'categories/'+props[i].imagePath}/>
            </div>
            <p className="textBG">{props[i].name}</p>
          </a>
        </div>
      </div>,
    );
  }
  return rows;
};
export const Catalogue = props => {
  return (
    <div className="catalogue-cont row">
      {imageContainer(props.Props)}

      
    </div>
  );
};
