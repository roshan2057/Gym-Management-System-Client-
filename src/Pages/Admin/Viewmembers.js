import React, { useEffect, useState } from 'react'
import '../../resources/css/viewmembers.css'
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';


const Viewmembers = () => {
    const [members, setMember] = useState([]);

    useEffect(() => {
        axios.get('/admin/members', {
            headers: {
                'auth': Cookies.get('token')
            }
        }).then(response => {
            // console.log(response.data);
            setMember(response.data.data);

        }).catch(error => {
            throw error
        });
    }, []);

    function deletemem(id){
        console.log(id);
    }




    return (
        <>
            <div className='main'>
                <h1>Members in Gym</h1>
                <table border={"2px"}>
                    <tr>
                        <th>S.N</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th colSpan={2}>Action</th>
                    </tr>


                    {members.map((member, index) => (
                        <tr key={member.id}>
                            <td>{index + 1}</td>
                            <td>{member.name}</td>
                            <td>{member.phone}</td>
                            <td>{member.address}</td>
                            <td><Link to={'/edit'}>Edit</Link></td>
                            <td ><button type ="button" onClick={() => deletemem(member.id)}>Delete</button></td>
                        </tr>
                    ))}

                </table>
            </div>
        </>
    )

                    }
export default Viewmembers