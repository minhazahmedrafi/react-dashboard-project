import React from "react";
import Chart from "../../components/chart/Chart";
import { userData } from "../../DummyData";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetsLarge from "../../components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title={"User Analytics"}
        grid
        dataKey={"Active User"}
      />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetsLarge />
      </div>
    </div>
  );
};

export default Home;
