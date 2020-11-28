import React, { Component, useEffect } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from '@paljs/ui';

const Admin = (props: any) => {

  return (
    <AdminLayout title="Home | Next.js + TypeScript Example">

      <Row className='mx-5'>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card status="Primary" accent="Info">
            <CardHeader>Status and accent card</CardHeader>
            <CardBody>Hello Card component this body of card</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
        <Col breakPoint={{ xs: 12, md: 6 }}>
          <Card accent="Info">
            <CardHeader>Card with accent</CardHeader>
            <CardBody>Hello Card component this body of card</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </Col>
      </Row>

    </AdminLayout>
  );
};

Admin.getInitialProps = (res: any) => {
  const { query } = res;
  // console.log(query);
  return {
    ...query,
  };
};

export default Admin;
