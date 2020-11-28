import React from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import AddProductForm from 'pages/components/admin/products/AddProductForm'
import ProductList from 'pages/components/admin/products/ProductList';

const AdminProducts = (props: any) => {

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
