import React from "react";

interface UserDisplayCardProps {
    id: string
}
const UserDisplayCard: React.FC<UserDisplayCardProps> = props =>{ 

    return(
        <div>
        <p>{props.id}</p>
        </div>
    )
}

export default UserDisplayCard;