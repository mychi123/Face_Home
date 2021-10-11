import { Avatar } from '@material-ui/core'
import React from 'react'
import"./Story.css"
function Story({image,profilesSrc,title}) {
    return (
        <div style ={{backgroundImage :`url(${image})`}}className="Story">
          <Avatar src={profilesSrc}className="Story__avata" />
          <h4>{title}</h4> 
        </div>
    )
}

export default Story