// Helper function returns setting the axios header with authZ JWT

import axios from "axios";

export const AuthZHeader = () => {
        const header = {
            headers: {
                Authorization: localStorage.getItem("access_token")
            }
        };
    return header;
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