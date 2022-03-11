import React from "react";
import PostListItem from "../post-list-item";

const PostList = ({posts}) => {
    return (
        <ul className="app-list list-group">
        <PostListItem label='Going to lern React' important/>
        <PostListItem label='That is so goog'/>
        <PostListItem label='I need a break...'/>
        </ul>
    )
}

export default PostList;