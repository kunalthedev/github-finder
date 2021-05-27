/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {Card, CardBody , Button} from 'reactstrap'

const UserCard = ({user}) => {
    return (
        <Card className="text-center mt-3 mb-4">
            <img src={user.avatar_url} alt={user.name} className="img-thumbnail"/>
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-info">Available for hiring : {user.hireable ? 'Yes':  'No'}</div>

                <div className="text-primary">Followers : {user.followers}</div><br />
                <a href={user.html_url} target="_blank">

                <Button color="primary">Visit Profile</Button>
                </a>
            </CardBody>
        </Card>
    )
}

export default UserCard
