import React from "react";
import "./Header.css";
import {  Avatar, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';

import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import NotificationsIcon from '@material-ui/icons/Notifications';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Header() {
  return (
    <div>
      <div className="header">
        <div className="header__left">
        <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.hGaetDAQWapgIJbIOhPhXwHaHa&pid=Api&P=0&w=300&h=300" />

        </div>
        <div className="header__input">
          <SearchIcon/>
          <input type="text" placeholder="Tìm kiếm trên Facebook " />
        </div>
        <div className="header__middle">
          <div className="header__options header__options__active">
           <HomeIcon/>
          </div>
          <div className="header__options">
           <EmojiFlagsIcon/>
          </div>
          <div className="header__options">
           <OndemandVideoIcon/>
          </div>
          <div className="header__options">
          <AspectRatioIcon/>
          </div>
        </div>
        <div className="header__right">
          <div className="header__info">
          <Avatar alt="Remy Sharp" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/236614992_1662428977299963_8345698157471019737_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YGTwQg08ZTYAX8y2Ypa&_nc_ht=scontent.fsgn5-8.fna&oh=d866e765b64101664597d59cf904afc0&oe=618988E2" />
            <h4>Nguyễn thị mỹ chi</h4>
          </div>
         <IconButton className="header__icon">
         <AppsOutlinedIcon/>
         </IconButton>
           
         
          
         <IconButton className="header__icon">
           
           <LocalPostOfficeIcon/>
           </IconButton>
           
           <IconButton className="header__icon">
            
            <NotificationsIcon/>
            </IconButton>
           
            <IconButton className="header__icon">
           
           <KeyboardArrowDownIcon/>
           </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
