import React, { Component, useEffect } from 'react';
import AdminLayout from './../../../components/Layout/AdminLayout';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { Catalogue } from 'pages/components/home/Catalogue';
import { MainSlider } from 'pages/components/home/MainSlider';
import { SpecialOffers } from 'pages/components/home/SpecialOffers';
import { Pafos } from 'pages/components/home/Pafos';
import { Service } from 'pages/components/home/Service';
import AddProductForm from 'pages/components/admin/products/AddProductForm'
import { Accordion, AccordionItem } from '@paljs/ui';
import { CategoryDocument } from 'apps/nestgqltsveikals/src/categories/schemas/categories.schema';
import { ProductDocument } from 'apps/nestgqltsveikals/src/products/schemas/products.schema';

const selectCategories = (categories: CategoryDocument[], products: ProductDocument[][]) => {
  const rows = [];
  // console.log("a" + products);
  for (let i = 0; i < products.length; i++) {
    // console.log(categories[i]);
    let productsArr = [];

    for (let j = 0; j < products[i].length; j++) {
      const element = products[i][j];
      if (categories[i]._id === element.category) {
        // console.log('asdfa')
        productsArr.push(
          <span>

            <p><b>Name: </b>{element.name}</p>

            <p><b>Price: </b>{element.price}</p>

            <p><b>Description: </b>{element.description}</p>

            <p><b>Special: </b>{element.isSpecial ? 'true' : 'false'}</p>
            <br />
          </span>
        )
      }

    }
    rows.push(
      <AccordionItem uniqueKey={i} key={categories[i]._id} title={categories[i].name}>
        
          { productsArr }
        
      </AccordionItem>
    );
    rows.push(<br />);
    productsArr = [];
  }
  return rows;
}

const ProductList = (props: any) => {
  // console.log(props);
  useEffect(() => {
  });

  return (
    <Accordion>

      {selectCategories(props.Categories, props.Products)}
    </Accordion>
  );
};

// ProductList.getInitialProps = (res: any) => {
//   const { query } = res;
//   return {
//     ...query,
//   };
// };

export default ProductList;
