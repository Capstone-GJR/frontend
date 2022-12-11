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

export const axiosPost = async (e, endPoint, obj) => {
  e.preventDefault();
    try {
        return await
            axios
                .post
                (`${endPoint}`, obj, {
                    headers: {
                        Authorization: localStorage.getItem("access_token")
                    }
                })

    } catch (err) {
        return err
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