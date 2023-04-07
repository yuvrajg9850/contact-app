import React from "react";
import {Link} from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
            <Link to={`/contact/${id}`} state={{contact: props.contact}}>
                <div className = "header">
                    <div>{name}</div>
                    <div>{email}</div>
                </div>
            </Link>
            </div>
            <Link to={"/delete"} state={{contact: props.contact}}>
            <i
             className="trash alternate outline icon right floated"
             style={{color: "red", marginTop: "7px" }}
            //  onClick={ () => props.clickHandler(id)}
             ></i>
             </Link>
        </div>
    );
};

export default ContactCard;