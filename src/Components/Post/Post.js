import { Avatar } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ScreenShareOutlinedIcon from "@material-ui/icons/ScreenShareOutlined";
import React from "react";
import "./Post.css";
function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="Post">
      <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topinfo">
          <h3>{username}</h3>
          <p>time</p>
        </div>
      </div>

      <div className="post_bottom">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} alt="" />
      </div>
      <div className="post_options">
        <div className="post__option">
          <ThumbUpAltIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <CommentIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ScreenShareOutlinedIcon />
          <p>Chia sẻ</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
