import React from 'react'
import "./Feed.css"
import StoryReel from '../StoryReel/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
function Feed() {
    return (
        <div className="feed">
           <StoryReel title="midu"/>
           <MessageSender/>
           <Post
           profilePic="https://avatar-nct.nixcdn.com/singer/avatar/2018/06/19/4/a/d/e/1529401377989_600.jpg"
           message="fff"
           timestamp="times"
           username ="abc"
           image="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/244505829_431857674964952_3875654560189821924_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=JSTBdhmamZwAX-f1s78&_nc_ht=scontent.fsgn5-8.fna&oh=29b35c9ce5e22f7b48d9e434405cdb68&oe=61882941"

           
           />
        </div>
    )
}

export default Feed
