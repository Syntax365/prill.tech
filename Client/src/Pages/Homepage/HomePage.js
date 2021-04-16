import React, { Component } from "react";

import HomepageHero from "./Hero/HomepageHero.jsx";
import FunFactSection from "./DailyFactSection/DailyFactSection.jsx";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Button from "../../Components/Button/Button";

import "./Homepage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="">
        <HomepageHero />
        <FunFactSection />
        <ContactForm />
      </div>
    );
  }
}

export default HomePage;
