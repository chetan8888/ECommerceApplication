import { Fragment, useEffect, useState, Profiler } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/General";
import { Helmet } from "react-helmet";

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState();
  TabTitle("Home - Shopping");

  const logRenderDuration = (id, phase, actualDuration) => {
    console.log(`${id} [${phase}] took ${actualDuration}ms`);
  };

  useEffect(() => {
    axios
      .get("https://shema-backend.vercel.app/api/items")
      .then((res) => setFeaturedItems(res.data))
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Profiler id="Home Component" onRender={logRenderDuration}>
        <Helmet>
          <title>Shopzy</title>
          <meta name="description" content="Shopzy Home Page." />
        </Helmet>
        <Landing />
        <FeaturedCategories />
        <FeaturedItems items={featuredItems} />
      </Profiler>
    </Fragment>
  );
};

export default Home;
