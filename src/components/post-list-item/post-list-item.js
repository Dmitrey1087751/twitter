import React from "react";
const PostListItem = ({label, important=false}) => {

let classNames 

    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-lebel">
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                type="button"
                className="btn-star btn-sm">
                    <i class="fa fa-star"></i>   
                </button>
                <button 
                type="button"
                className="btn-trash btn-sm">
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
                </div>
        </li>
    )
}
export default PostListItem;