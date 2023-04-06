import React from "react";
import {Link} from "react-router-dom"
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
            <Link to={`/contact/${id}`}>
                <div className = "header">
                    <div>{name}</div>
                    <div>{email}</div>
                </div>
            </Link>
            </div>
            <i
             className="trash alternate outline icon right floated"
             style={{color: "red", marginTop: "7px" }}
             onClick={ () => props.clickHandler(id)}
             ></i>
        </div>
    );
};

export default ContactCard;