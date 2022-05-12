import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const {name, age} = useSelector((state) =>state);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Hello, I am {name}</h2>
        <h2>My age is {age}</h2>
        <button onClick={()=> dispatch({type: 'UPDATE_NAME'})}>Update Name</button>
        <button onClick={()=> dispatch({type: 'UPDATE_AGE'})}>Update Age</button>
    </div>
  )
}

export default Profile;