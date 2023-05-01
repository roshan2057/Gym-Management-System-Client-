import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect } from 'react'

export const Profile = () => {
    useEffect(() => {
        async function userdata() {
            try {
                    await axios.get("/user/profile",{
                        headers:{
                            'auth':Cookies.get('token')
                        }
                    })
                    .then(response=>{
                        console.log(response)
                    })
                    .catch(error=>{
                        throw error;
                    })
            }
            catch (error) {
                throw error;
            }
        }
        userdata();
    }, [])
    return (
        <div>Profile</div>
    )
}
