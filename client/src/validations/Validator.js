import validator from 'validator';
import React from 'react';

export const required = (value) => {
    if (!value.toString().trim().length) {
        // We can return string or jsx as the 'error' prop for the validated Component
        return <span className="error">'Required *'</span>;
        }
    };
    
export const email = (value) => {
    if (!validator.isEmail(value)) {
    return <span className="error">`${value} is not a valid email.`</span>
    }
};
    

export const password = (value) => {
    // get the maxLength from component's props
    if (!value.toString().trim().length <7) {
    // Return jsx
    return <span className="error">The password should atleast be of 7 character.</span>
    }
};