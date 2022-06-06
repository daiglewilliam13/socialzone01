import React, { FC } from "react";
import './showprofile.css';
import { useSelector} from 'react-redux';
import { RootState } from "../../app/store";
interface ProfileProps {
    id: string
}

const getUser = async (id:string, token: string) =>{
    console.log(token)
    const response = await fetch('http://localhost:8080/v1/users/'+id, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    });
    return response.json();
}
const ShowProfile: FC<ProfileProps> = (props): JSX.Element => {
    const token = useSelector((state: RootState) => state.authStatus.auth.tokens.access.token)
    const user = getUser(props.id, token);
    console.log(user);
    return(
        <div className="profile-wrapper">
        <p>SHOW PROFILE COMPONENT</p>
        <p>{props.id}</p>
        </div>
    )
}

export default ShowProfile;