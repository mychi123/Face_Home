import React from "react";
import "./MessageSender.css";
import SidebarRow from "../SidebarRow/SidebarRow";

import VideocamOutlinedIcon  from '@material-ui/icons/VideocamOutlined';
import InsertPhotoOutlinedIcon   from '@material-ui/icons/InsertPhotoOutlined';
import MoodIcon    from '@material-ui/icons/Mood';
import { Avatar } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
function MessageSender() {
    const  handlesubmit=(e)=>{

    };
  return (

    <div className="MessageSender">
    
      <div className="MessageSender_top">
      <Avatar alt="Remy Sharp" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/236614992_1662428977299963_8345698157471019737_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=YGTwQg08ZTYAX8y2Ypa&_nc_ht=scontent.fsgn5-8.fna&oh=d866e765b64101664597d59cf904afc0&oe=618988E2" />
<form>
    <input type="text"
    placeholder={"Bạn đang nghĩ gì thế"}/>
   {/* <button onClick={handlesubmit}type ="submit"></button> */}
</form>
      </div>
      <div className="MessageSender_bottom">
      <div className="MessageSender_options">
        <VideocamOutlinedIcon style={{color:"red"}}/>
        <h3>Video Trực tiếp</h3>
        </div>
        <div className="MessageSender_options">
        <InsertPhotoOutlinedIcon style={{color:"green"}}/>
        <h3>Ảnh/Video</h3>
        </div>
        <div className="MessageSender_options">
        <MoodIcon style={{color:"orange"}}/>
        <h3>Cảm xúc/Hoạt động</h3>
        </div>

          </div>
          </div>
  
  );
}

export default MessageSender;
