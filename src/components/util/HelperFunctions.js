import axios from "axios";

export const AuthZHeader = () => {
    const header = {
        headers: {
            Authorization: localStorage.getItem("access_token")
        }
    };
    return header;
}

export const removeAuthZ = () => {
    return localStorage.removeItem("access_token");
}

export const axiosRequest = (method, url , form) => {
    switch (method) {
        case 'GET':
            return axios.get(url, AuthZHeader());
        case 'POST':
            return axios.post(url, form, AuthZHeader());
        case 'PUT':
            return axios.put(url, form, AuthZHeader());
        case 'DELETE':
            return axios.delete(url, AuthZHeader());
        default:
            return Promise.reject(new Error(`Invalid HTTP method: ${method}`));
    }
}

export const validateForm = (form) => {
    const { firstName, lastName, email } = form;
    const newErrors = {}

    const regex = /\S+@\S+\.\S+/;
    const blankErrorMsg = 'Field can not be blank';
    const emailErrorMsg = 'Please enter a valid email';

    if(!firstName || firstName === '') newErrors.firstName = blankErrorMsg
    else if (!lastName || lastName === '') newErrors.lastName = blankErrorMsg
    else if (!email || email === '' || !regex.test(email)) newErrors.email = emailErrorMsg

    return newErrors
}

export const checkPassword = (password, password2) => {
    const newErrors = {};

    if (!password || password === '') newErrors.password = "Field can not be blank";
    else if (!password2 || password2 === '') newErrors.password2 = "Field can not be blank";
    else if (password !== password2) newErrors.password2 = "Passwords do not match";

    return newErrors;
}