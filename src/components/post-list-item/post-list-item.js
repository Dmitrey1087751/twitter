import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default class PostListItem extends React.Component {

    render() {
        let classNames = 'app-list-item d-flex justify-content-between'

        if (important) {
            classNames += ' important';
        }

        const { label, important = false } = this.props

        return (
            <li className={classNames}>
                <span className="app-list-item-lebel">
                    {label}
                </span>

                <div className="d-flex justify-content-center align-items-center">
                    
                    <button
                        type="button" className="btn-star btn-sm" >
                        <FontAwesomeIcon icon={faStar} />

                    </button>

                    <button
                        type="button" className="btn-trash btn-sm">
                        <FontAwesomeIcon icon={faTrashCan} />

                    </button>

                    <i className="fa fa-heart"><FontAwesomeIcon icon={faHeart} /></i>

                </div>
            </li>
        )

    }
}
