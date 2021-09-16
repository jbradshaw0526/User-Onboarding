import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('what is your name')
        .min(3, 'must be 3 characters long'),
    email: yup
        .string()
        .email('must be a valid email address!')
        .required('Emails be required!'),
    password: yup
        .string()
        .trim()
        .required('password')
        .min(7, 'must be 7 characters long'),
    termsOfService: yup.boolean(true),
})

export default formSchema; 