import React from "react";

const ContactCard = (props) => {
    const {id, name, email} = props.contact
    return (
        <div className="item">
            <div className="content">
                <div className = "header">
                    <div>{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            <i
             className="trash alternate outline icon"
             style={{color: "red", marginTop: "7px" }} ></i>
        </div>
    );
};

export default ContactCard;