import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/ProportyList";
import FeaturedPlace from "../../components/featuredPlace/featurePlace";
import MailList from "../../components/mailList/mailList";
import Footer from './../../components/footer/footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedPlace/>
        <MailList/>
        <Footer/>
        <div className="copyright">Copyright ©2022 Shrimp Booking</div>
      </div>
      
    </div>
  );
};
export default Home;
