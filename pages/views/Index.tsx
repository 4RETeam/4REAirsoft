import React, { Component, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { Catalogue } from 'pages/components/home/Catalogue';
import { MainSlider } from 'pages/components/home/MainSlider';
import { SpecialOffers } from 'pages/components/home/SpecialOffers';
import { Pafos } from 'pages/components/home/Pafos';
import { Service } from 'pages/components/home/Service';
import Login from 'pages/components/home/Login';

// import '../../styles/global.scss';

const RegisterComponentWithCustomLoading = dynamic(
  () => import('../components/home/Register'),
  { loading: () => <p>Loading</p> },
);

const LoginComponentWithCustomLoading = dynamic(
  () => import('../components/home/Login'),
  { loading: () => <p>Loading</p> },
);

const LoginAndRegister = (props) => {
  return (
    <div className={`sidebar ${!props.loggedIn ? "hidden" : ""}`}>
      <RegisterComponentWithCustomLoading />
      <LoginComponentWithCustomLoading/>
    </div>
  )
}

const Index = (props: any) => {
  const [loaded, setLoaded] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  let yes = false;
  useEffect(() => {
    if (props.categories[0] && props.newProducts[0]) setLoaded(true);
    
    // if (loaded) console.log(props.newProducts);
    if (localStorage.getItem('access_token')) setLoggedIn(true);
  });

  setInterval(() => {
    if(typeof window !== 'undefined'){
      if(document.getElementById('loaded')) setLoggedIn(true);
      if(document.getElementById('notLoaded')) setLoggedIn(false);
    }
  },500)

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      {/* {yes ? (<div>yes </div>):(<div>no</div>)} */}
      <Navbar navButtons={navButtons} />
      <div className="container">
        <div className="main-bg">
          <div className="red-square RSleft"></div>
          <div className="red-square RSright"></div>
        </div>
        <div className="carousel-block">
          <h1 className="text-center main-heading">New Arrivals</h1>
          {loaded && <MainSlider Props={props.newProducts} />}
        </div>
      </div>
      <div className="container my-5 py-5">
        <h1 className="text-center main-heading">Catalogue</h1>
        {loaded && <Catalogue Props={props.categories} />}
      </div>
      <div className="service-cont">
        <div className="container">
          <Service />
        </div>
      </div>
      <div className="container my-5 py-5">
        <h1 className="text-center main-heading">SPECIAL OFFERS</h1>
        {loaded && <SpecialOffers Props={props.specialProducts} />}
      </div>
      <Pafos />
      <div className="container">
        <h1 className="text-center main-heading">CONTACT US</h1>
        {/* <Contact /> */}
      </div>
      <LoginAndRegister loggedIn={loggedIn} />
    </Layout>
  );
};

// const isShowing = () => {
//   let thing
  
// }

Index.getInitialProps = (res: any) => {
  const { query } = res;
  // console.log(res);
  return {
    ...query,
    
  };
};

export default Index;
