import React from "react";
import "./Sidebar.css";
import SidebarRow from "../SidebarRow/SidebarRow";
import { Avatar } from "@material-ui/core";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import GroupWorkOutlinedIcon from "@material-ui/icons/GroupWorkOutlined";
import HomeWorkOutlinedIcon from "@material-ui/icons/HomeWorkOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__top__info">
          <Avatar
            alt="Remy Sharp"
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/236614992_1662428977299963_8345698157471019737_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YGTwQg08ZTYAX8y2Ypa&_nc_ht=scontent.fsgn5-8.fna&oh=d866e765b64101664597d59cf904afc0&oe=618988E2"
          />
          <h4>Nguyễn thị mỹ chi</h4>
        </div>
        <SidebarRow Icon={PeopleOutlinedIcon} title="Bạn Bè" />
        <SidebarRow Icon={OndemandVideoOutlinedIcon} title="Watch" />
        <SidebarRow Icon={GroupWorkOutlinedIcon} title="Nhóm" />
        <SidebarRow Icon={HomeWorkOutlinedIcon} title="Market place" />
        <SidebarRow Icon={AccessTimeOutlinedIcon} title="Kỉ niệm" />
        <SidebarRow Icon={KeyboardArrowDownIcon} title="Xem thêm" />
      </div>
      <div> <b> Lối tắt của bạn</b></div>
      <div className="sidebar__bottom">
      
      <Avatar
      variant="rounded"
            alt="Remy Sharp"
            src="https://tse4.mm.bing.net/th?id=OIF.yBQ1dFy0WxBZ4FGNCad7mQ&pid=Api&P=0&w=300&h=300"
          />
          <h4>Bắn trứng khủng long</h4>
          
        </div>
        <div className="sidebar__bottom">
      <Avatar
      variant="rounded"
            alt="Remy Sharp"
            src="https://tse4.mm.bing.net/th?id=OIF.yBQ1dFy0WxBZ4FGNCad7mQ&pid=Api&P=0&w=300&h=300"
          />
          <h4>Bắn trứng khủng long</h4>
          
        </div>
        <div className="sidebar__bottom">
      <Avatar
      variant="rounded"
            alt="Remy Sharp"
            src="https://tse4.mm.bing.net/th?id=OIF.yBQ1dFy0WxBZ4FGNCad7mQ&pid=Api&P=0&w=300&h=300"
          />
          <h4>Bắn trứng khủng long</h4>
          
        </div>
    </div>
  );
}

export default Sidebar;
