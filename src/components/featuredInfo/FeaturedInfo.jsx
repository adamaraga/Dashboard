import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Paper } from "@material-ui/core";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function FeaturedInfo() {

  return (
    <div className="featured">
      <Paper className="paper featuredItem">
        <div className="progressBar" style={{ width: 80, height: 80 }}>
          <CircularProgressbar
            value={50}
            text={`${50}%`}
            styles={buildStyles({
              pathColor: `#1AD598`,
              textColor: "#686868",
              trailColor: "#ececec",
            })}
          />
        </div>
        <div className="">
          <span className="featuredTitle">Revanue</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">
              +11.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </Paper>
      <Paper className="paper featuredItem">
        <div className="progressBar" style={{ width: 80, height: 80 }}>
          <CircularProgressbar
            value={20}
            text={`${20}%`}
            styles={buildStyles({
              pathColor: `#dd5757`,
              textColor: "#686868",
              trailColor: "#ececec",
            })}
          />
        </div>
        <div className="">
          <span className="featuredTitle">Sales</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$4,415</span>
            <span className="featuredMoneyRate negative">
              -1.4 <ArrowDownward className="featuredIcon negative" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </Paper>
      <Paper className="paper featuredItem">
        <div className="progressBar" style={{ width: 80, height: 80 }}>
          <CircularProgressbar
            value={72}
            text={`${72}%`}
            styles={buildStyles({
              pathColor: `#1AD598`,
              textColor: "#686868",
              trailColor: "#ececec",
            })}
          />
        </div>
        <div className="">
          <span className="featuredTitle">Cost</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,225</span>
            <span className="featuredMoneyRate">
              +2.4 <ArrowUpward className="featuredIcon" />
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      </Paper>
    </div>
  );
}
