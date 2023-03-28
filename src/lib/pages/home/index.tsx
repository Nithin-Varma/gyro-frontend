import { Grid, Heading } from "@chakra-ui/react";

import Header from "../../layout/Header";

import LandingView from "./components/Landing_view.tsx";
// import Header from "lib/layout/Header";

// /home/nithin/gyro-frontend/src/lib/pages/home/components/Landing_view.tsx
// import CTASection from "./components/Landing_view";
import WhyToUse from "./components/WhyToUse";
import SomeTextandImage from "./components/SomeTextandImage";

const Home = () => {
  return (
    <Grid>
      {/* <CTASection /> */}
      <Header />
      <LandingView />
      <WhyToUse />
      <SomeTextandImage />
    </Grid>
  );
};

export default Home;
