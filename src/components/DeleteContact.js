import React from "react";
import { useLocation, Link } from "react-router-dom";
import ContactCard from './ContactCard';

const DeleteContact = (props) => {
    const location = useLocation();
    const {id ,name, email} = location.state.contact;  

    const deleteContactHandler = () => {
        props.getContactId(id);
    }
        
    return(
        <div className="main">
            <div className="ui center aligned container">
               <h2>Are You Sure Want to Delete {name}'s' Contacts Details</h2>                
                    <Link to="/">
                      <div className="ui buttons">
 
                        <button className="ui negative button">No</button>                    
                        <div class="or"></div>
                        <button className="ui positive button" onClick={deleteContactHandler}>Yes</button>
                        </div>

                    </Link>
                </div>
            </div>
    )
}

export default DeleteContact;