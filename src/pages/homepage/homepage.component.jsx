import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./home-page.styles";

const Homepage = () => (
  <HomePageContainer className="homepage">
    <Directory />
  </HomePageContainer>
);
export default Homepage;
