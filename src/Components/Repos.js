/* eslint-disable react/jsx-no-target-blank */
import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {ListGroup, ListGroupItem, Button} from 'reactstrap'

const Repos = ({repos_url, url}) => {
    const [repos, setRepos] = useState([])

    const fetchRepos = async() => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }
    useEffect(()=>{
        fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repos_url])
    return (
        <ListGroup>
            {repos.map((repo)=>(
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                    {/* <Link to= > */}
                    <a href={repo.html_url} target="_blank">

                    <Button color="success">View Repo</Button>
                    </a>
                    {/* </Link > */}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Repos
