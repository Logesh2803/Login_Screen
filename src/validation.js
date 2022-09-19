import React from 'react';

const validation = (values) => {
    let errors = {};
    if(!values.email){
        errors.email= "Email is required."
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Enter a valid email id"
    }
  return errors;
}

export default validation;