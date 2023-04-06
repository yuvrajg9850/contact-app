import React from "react";
import { useLocation, Link } from "react-router-dom";
import user from "../images/user.jpg";


const ContactDetail = () => {
    const location = useLocation();
    const {id, name, email} = location.state.contact;
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>                           
            </div>      
            <div className="ui container center aligned">
            <Link to="/">
            <button className="ui button green">Back To Contact List</button>     
            </Link> 
            </div>              
        </div>
       
    );
 
};

export default ContactDetail;