import React from  'react';
import { Link } from "react-router-dom";


class AddContact extends React.Component{
    state = {
        name: "",
        email: "",

    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});
        alert("Added Successfully!!!");
    };
render(){   
    
    return(
        <div className="ui main">
            <h2> AddContact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input 
                    type="text"
                     name="name" 
                     placeholder="Name" 
                     value={this.state.name}
                     onChange={ (e) => this.setState({name: e.target.value})} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={this.state.email}
                    onChange={ (e) => this.setState({email: e.target.value})}/>
                </div>
                <button className="ui button blue" > Add</button>          

             </form>
             <Link to="/">
             <button className="ui button blue left floated" style={{marginTop: "3px"}}> Contact List</button>             
             </Link>

        </div>
        
    );
}

}

export default AddContact;