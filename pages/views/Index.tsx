import React, { Component, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { Catalogue } from 'pages/components/home/Catalogue';
import { MainSlider } from 'pages/components/home/MainSlider';
import { SpecialOffers } from 'pages/components/home/SpecialOffers';
import { Pafos } from 'pages/components/home/Pafos';
import { Service } from 'pages/components/home/Service';
import Navbar from "../components/Layout/Navbar";
import navButtons from "../interfaces/NavButtons";

// import '../../styles/global.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RegisterComponentWithCustomLoading = dynamic(
  () => import('../components/home/Register'),
  { loading: () => <p>Loading</p> },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginComponentWithCustomLoading = dynamic(
  () => import('../components/home/Login'),
  { loading: () => <p>Loading</p> },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginAndRegister = ({showAll, showReg, showLog}) => {
  return (
    <div className={`sidebar ${showAll ? '' : 'hidden'}`}>
        <div className={`${!showReg ? '' : 'hidden'}`}>
            <RegisterComponentWithCustomLoading />
        </div>
        <div className={`${!showLog ? '' : 'hidden'}`}>
            <LoginComponentWithCustomLoading/>
        </div>
    </div>
  )
};

const Index = (props: any) => {
  const [showSide, setShowSide] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [loaded, setLoaded] = useState(true);
  const [showReg, setShowReg] = React.useState(false);
  const toggleLogin = () => {
      setShowLogin(o => o = !o);
      setShowSide( showLogin === true || showReg === true);
  };
  const toggleReg = () => {
      setShowReg(o => o = !o);
      setShowSide( showLogin === false || showReg === false);
  };
  const hideAll = () => {
    setShowLogin(true);
    setShowReg(true);
    setShowSide(false);
  };
  useEffect(() => {
    if (props.categories[0] && props.newProducts[0]) setLoaded(true);
    setShowSide( showLogin === false || showReg === false);
  });

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Navbar onToggleReg={toggleReg} onToggleLog={toggleLogin} navButtons={navButtons} />
      <div className="container">
        <div className="main-bg">
          <div className="red-square RSleft"/>
          <div className="red-square RSright"/>
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
        {showSide ? <div onClick={hideAll} className="shade"/> : ''}
        <LoginAndRegister showAll={showSide} showLog={showLogin} showReg={showReg}/>
    </Layout>
  );
};

Index.getInitialProps = (res: any) => {
  const { query } = res;
  return {
    ...query,

  };
};

export default Index;
