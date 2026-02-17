import React, { useState } from "react";

// export default function ArrayObj() {

//     const [user, setUser] = useState({
//         name: "Shubham",
//         email: "shubham@gmail.com",
//         age: "22",

//         family: {
//             father: "Mr. Arvind",
//             mother: "Mrs. Sunita",
//             brother: "Shyam"
//         },

//         address: {
//             city: "Delhi",
//             state: "Delhi",
//             country: "India"
//         }
//     });

//     const [type, setType] = useState("");

//     //Shallow Copy
//     function shallowCopyUpdate() {
//         setUser({
//             ...user,
//             name: "Mohit",
//             age: "23"
//         });
//         setType("Shallow Copy Applied");
//     }

//     //Deep Copy
//     function deepCopyUpdate() {
//         setUser({
//             ...user,
//             name: "Rohan",
//             age: "24",
//             address: {
//                 ...user.address,
//                 city: "Lucknow",
//                 state: "UP"
//             },
//             family: {
//                 ...user.family,
//                 brother: "Amit"
//             }
//         });
//         setType("Deep Copy Applied");
//     }

//     return (
//         <div>
//             <h1>User Details</h1>

//             <h3>{type}</h3>

//             <p><b>Name:</b> {user.name}</p>
//             <p><b>Email:</b> {user.email}</p>
//             <p><b>Age:</b> {user.age}</p>

//             <hr />

//             <h3>Address</h3>
//             <p>City: {user.address.city}</p>
//             <p>State: {user.address.state}</p>
//             <p>Country: {user.address.country}</p>

//             <h3>Family</h3>
//             <p>Father: {user.family.father}</p>
//             <p>Mother: {user.family.mother}</p>
//             <p>Brother: {user.family.brother}</p>

//             <br />

//             <button onClick={shallowCopyUpdate}>Apply Shallow Copy</button>
//             <button onClick={deepCopyUpdate} style={{ marginLeft: "10px" }}>
//                 Apply Deep Copy
//             </button>
//         </div>
//     );
// }
export default function ArrayObj() {
    //using array 
    const [users, setUsers] = useState([
        { name: "Shubham", age: 22 },
        { name: "Rohit", age: 23 },
        { name: "Mohit", age: 24 }
    ]);

    function findUser() {
        return users.find((user) => user.name === "Shubham");
    }
    return (
        <div>
            <h1>Array of Objects</h1>
            <ol>
                {users.map((user, index) => (
                    <li key={index}>{user.name} - {user.age}</li>
                ))}
            </ol>
            <button onClick={() => setUsers([...users, { name: "Rahul", age: 25 }])}>Add User</button>
            <button onClick={() => setUsers(users.filter((user, index) => index !== 2))}>Remove User</button>
            <button onClick={() => setUsers(users.sort((user1, user2) => user1.age - user2.age))}>Sort Users</button>
            <button onClick={() => setUsers(findUser())}>Find User</button>
        </div>
    );
}