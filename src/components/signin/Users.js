import React from 'react'
// import { Link } from 'react-router-dom'
function Users(props) {
    return (
        <div className="card  text-center mt-4">
        <img src={props.data.avatar} className=' w-50  h-25 d-block mx-auto mt-3'  alt="" />
          <div className="card-body h-50">
            <h2 className=" text-success" style={{fontFamily:"san-serif"}}><i>{props.data.name}</i></h2>
            <p className=' text-primary'>username : {props.data.username}</p>
            <p className=' text-success'>college:{props.data.college}</p>
            <p className='text-primary'>LinkedIn Profile:</p>
                <a href={props.data.LinkedinUrl} target="_blank" rel="noopener noreferrer">{props.data.username}'s LinkedIn Profile</a>            </div>
            </div>
    )
}

export default Users