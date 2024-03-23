// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:4000/alumni/get_user/VNRVJIET')
//       .then((response) => {
//         setUsers(response.data.payload);
//       })
//       .catch((error) => console.error('Error fetching users:', error));
//   }, []);

//   return (
//     <div>
//       {users.map((user) => (
//         <div key={user._id} className="user-card">
//           <h3>Name: {user.name}</h3>
//           <p>Username: {user.username}</p>
//           <p>College: {user.college}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
import { FaSearch } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Users from './Users';
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchUsername, setSearchUsername] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/alumni/get_user/VNRVJIET')
      .then((response) => {
        setUsers(response.data.payload);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    // Filter users based on searchUsername
    const filtered = users.filter(user =>
      user.username.toLowerCase().includes(searchUsername.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchUsername, users]);

  const handleSearchChange = (event) => {
    setSearchUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    // Filter users based on searchUsername when the form is submitted
    const filtered = users.filter(user =>
      user.username.toLowerCase().includes(searchUsername.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div>
     <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
  <input
    type="text"
    placeholder="Search by username"
    value={searchUsername}
    onChange={handleSearchChange}
    style={{ marginRight: '10px' }} // Add some margin to separate input and button
  />
  <button type="submit"  style={{ background: 'dark', border: 'green',width:'40px' }}>
    <FaSearch style={{ fontSize: '1.2rem', cursor: 'pointer' }} />
  </button>
</form>

      {filteredUsers.length > 0 ? (
        <div className='row '>{
        filteredUsers.map((user) => (
          <div className='col col-lg-4' key={user.id}>
            <Users data={user}/>
            </div>
        ))}
      </div>) : (
        <p style={{ color: 'red' }}>No user found with the entered username.</p>
      )}
    </div>
  );
};

export default UserList;

