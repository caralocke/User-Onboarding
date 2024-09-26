import * as yup from 'yup' //imported yup

export default yup.object().shape({
    name: yup.string()
             .required(`Name is required`)
             .min(3,`Name must be at least 3 characters long`),
    email: yup.string()
              .email(`Must be a valid email`)
              .required(`A valid email address is required`),
    password: yup.string()
                 .min(6, `Password must be at least 6 characters long`)
                 .required(`Password is required`),
    terms: yup.boolean()
              .oneOf([true], `You must agree to the Terms of Service`)
})