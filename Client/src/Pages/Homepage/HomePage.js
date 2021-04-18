import React, { Component } from "react";

import HomepageHero from "./Hero/HomepageHero.jsx";
import FunFactSection from "./DailyFactSection/DailyFactSection";
import ContactForm from "../../Components/ContactForm/ContactForm";
import ValueProps from "../../Components/ValueProps/ValueProps";

import "./Homepage.css";

class HomePage extends Component {
  render() {
    return (
      <div id="homepage-container">
        <HomepageHero />
        <FunFactSection />
        <ValueProps />
        <ContactForm />
      </div>
    );
  }
}

export default HomePage;
