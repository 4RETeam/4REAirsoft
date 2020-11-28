import React, { Component, useEffect } from 'react';
import AdminLayout from '../components/Layout/AdminLayout';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { Catalogue } from 'pages/components/home/Catalogue';
import { MainSlider } from 'pages/components/home/MainSlider';
import { SpecialOffers } from 'pages/components/home/SpecialOffers';
import { Pafos } from 'pages/components/home/Pafos';
import { Service } from 'pages/components/home/Service';
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from '@paljs/ui';

const Admin = (props: any) => {
  const [loaded, setLoaded] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
  });

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
