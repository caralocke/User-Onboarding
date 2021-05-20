import * as yup from 'yup' //import yup
// Here goes the schema for the form copied and pasted and comment it out to use it as a guide.

export default yup.object().shape({
    name: yup.string()//looking at what we imported below, we can see to check a username, it's a string.
       .required('Username is required') //**MAKE SURE REQUIRED APPEARS FIRST**for .required(), put a message if you want stating this field is required.
       .min(3, 'Username must be at least 3 chars'),  // .min() makes it to where you can require a minimum of characters, if not met, it will display the message after the comma 
    email: yup.string()
      .email('Must be a valid email')
      .required('Email is required'), //same for email
    password: yup.string()
      .min(6, 'Passwords must be t least 6 characters long.')
      .required('Password is required.'), //password
    terms: yup.boolean()
    .required('You must agree to the Terms of Service.')
})