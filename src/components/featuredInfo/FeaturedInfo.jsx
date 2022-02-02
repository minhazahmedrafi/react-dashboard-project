import React from "react";
import "./featuredinfo.scss";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const FeaturedInfo = () => {
  return (
    <div className="FeaturedInfo">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,565</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Salse</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,320</span>
          <span className="featuredMoneyRate">
            -2.7 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,565</span>
          <span className="featuredMoneyRate">
            +4.6 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSubtitle">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
