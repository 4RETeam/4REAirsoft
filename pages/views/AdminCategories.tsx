import React, { Component, useEffect } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { Catalogue } from 'pages/components/home/Catalogue';
import { MainSlider } from 'pages/components/home/MainSlider';
import { SpecialOffers } from 'pages/components/home/SpecialOffers';
import { Pafos } from 'pages/components/home/Pafos';
import { Service } from 'pages/components/home/Service';
import AddProductForm from 'pages/components/admin/products/AddProductForm'
import ProductList from 'pages/components/admin/products/ProductList';
import { CreateCategoryDto } from 'apps/nestgqltsveikals/src/categories/dto/categories.dto';
import { CategoryDocument } from 'apps/nestgqltsveikals/src/categories/schemas/categories.schema';


const renderInfo = (categories: CategoryDocument[]) => {
  const res = [];
  console.log(categories);
  for(let i = 0; i< categories.length;i++){
    res.push(<div>{categories[i]._id}</div>)
  }
  return res;
}

const AdminCategories = (props: any) => {

  useEffect(() => {
  });


  return (
    <AdminLayout title="Home | Next.js + TypeScript Example">
      {/* <AddProductForm Props={props.categories}/> */}
      <br />
      <h3 className='text-center main-heading'>ALL CATEGORIES</h3>
      {renderInfo(props.categories)}
      {/* <ProductList Categories={props.categories} Products={props.products}/> */}
    </AdminLayout>
  );
};

AdminCategories.getInitialProps = (res: any) => {
  const { query } = res;
  console.log(query);
  return {
    ...query,
  };
};

export default AdminCategories;
