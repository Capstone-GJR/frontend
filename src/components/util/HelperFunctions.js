// Helper function returns setting the axios header with authZ JWT 

export const AuthZHeader = () => {
        const header = {
            headers: {
                Authorization: localStorage.getItem("access_token")
            }
        };
    return header;
}