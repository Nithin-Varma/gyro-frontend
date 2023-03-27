import { Grid, Heading } from "@chakra-ui/react";
import LandingView from "./components/Landing_view.tsx";
import Header from "../../layout/Header";
// import Header from "lib/layout/Header";

// /home/nithin/gyro-frontend/src/lib/pages/home/components/Landing_view.tsx
// import CTASection from "./components/Landing_view";
import SomeImage from "./components/SomeImage";
import SomeText from "./components/SomeText";

const Home = () => {
  return (
    <Grid >
      {/* <SomeText /> */}
      
      {/* <CTASection /> */}
      <Header />
      <LandingView />
      <SomeImage />
    </Grid>
  );
};

export default Home;
