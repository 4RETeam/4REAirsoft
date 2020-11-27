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

const AdminProducts = (props: any) => {

  useEffect(() => {
  });

  return (
    <AdminLayout title="Home | Next.js + TypeScript Example">
      <AddProductForm Props={props.categories}/>
      <br/>
      <h3 className='text-center main-heading'>ALL PRODUCTS</h3>
      <ProductList Categories={props.categories} Products={props.products}/>
    </AdminLayout>
  );
};

AdminProducts.getInitialProps = (res: any) => {
  const { query } = res;
  // console.log(query);
  return {
    ...query,
  };
};

export default AdminProducts;
