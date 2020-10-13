import React, { useState } from 'react'
import Data from './Form'

export default function TeamMembers() {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        role: ""
    });


    const onInputChange = (event) => {
        if (/^[a-zA-Z]*$/.test(event.target.value)) {
          setFormData({
            ...formData,
            [event.target.name]: event.target.value
          });
        }
      };


    return (
        <div>
        <form onSubmit={(event) => {
            event.preventDefault();
            // axios code here, perhaps
        }}>
        <label>
        First Name:
            <input onChange={onInputChange} name="fname" value={formData.fname} id="fname" placeholder="First Name" />
        </label>
        <br />

        <label>
        Last Name:
            <input onChange={onInputChange} id="lname" name="lname" placeholder="Last Name" />
        </label>
        <br />

        <label>
        Role:
            <input onChange={onInputChange} id="lname" name="role" placeholder="Role" />
        </label>
        <br />

        <input type="submit" />
        
        
        
        </form>
        
        
        </div>
    )
}