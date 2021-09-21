import "./topbar.css";
import { NotificationsNone } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIcon">
            <NotificationsNone />
            <span className="topbarIconBadge">2</span>
          </div>
          {/* <div className="topbarIcon">
            <Language />
            <span className="topbarIconBadge">3</span>
          </div> */}

          <div className="topbarImg">
            <img
              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
              alt=""
            />
            <span>Sam</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
