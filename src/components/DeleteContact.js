import React from "react";
import { useLocation, Link } from "react-router-dom";
import ContactCard from './ContactCard';



const DeleteContact = (props) => {
    const location = useLocation();
    const {id, name, email} = location.state.contact;

    return(
        <div className="main">
            <div className="ui center aligned container">
               <h2>Are You Sure Want to Delete {name}'s' Contacts Details</h2>
                
                <div class="ui buttons">
                <Link to="/">
                    <button class="ui red button">No</button>
                </Link>
                    <div class="or"></div>
                    <button class="ui positive button"  
                     onClick={ () => props.clickHandler(id)}
                    >Yes</button>
                    </div>
            </div>
        </div>
    )
}

export default DeleteContact;