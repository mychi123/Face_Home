import { Avatar } from "@material-ui/core";
import React from "react";
import"./Widgets.css"

function Widgets({src,Icon,title}) {
  return (
    <div className="Widgets">
     <iframe src="https://tse2.explicit.bing.net/th?id=OIP.4o7kXjQ4YxQJpNQwNmoRyAHaEK&pid=Api&P=0&w=274&h=155"
     width="340"
     height="100%"
     style={{border:"none",overflow:"hidden"}}
     scrolling="no"
     frameBorder="0"
     allowTransparency="true"
     allow="encrypted-media"
     padding-top="30px"
     >
       </iframe>  
    </div>
  );
}

export default Widgets;
