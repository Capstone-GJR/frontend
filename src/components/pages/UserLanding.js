import axios from 'axios';
import { useEffect, useState } from 'react';

function UserLanding() {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const getUserSpaces = async () => {
      try {
        const response = await axios.get('4/space/all', {
          headers: {
            Authorization: localStorage.getItem("access_token")
          }
        })
        setSpaces(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUserSpaces();
  },[])
  
  return (
    <div>
      {spaces.map((space) => (
        <div 
          className='card w-50 p-4 m-4' 
          key={space.id}
          onClick={(e)=> {console.log(space.id)}}
        >
          {space.name}
        </div>
      ))}
    </div>
  )
}

export default UserLanding