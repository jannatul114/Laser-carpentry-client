import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    console.log(user)
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email;
        // const name = user?.user?.displayName || user?.displayName;

        const MainUser = { email: email }
        if (email) {
            fetch(`http://localhost:5000/users/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(MainUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const accessToken = data.token;
                    console.log('accesstoken', accessToken);
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
        }
    }, [user])
    return [token]
};

export default useToken;