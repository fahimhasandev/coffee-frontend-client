import React, { useState } from "react"
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"

const Users = () => {
  const loadedUsers = useLoaderData()
  const [users, setUser] = useState(loadedUsers)

  console.log(users)

  const handleDeleteBtn = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5001/users/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              })
            }

            const filter = users.filter(user => user._id !== _id)
            setUser(filter)
          })
      }
    })
  }
  return (
    <div>
      <h2 className="text-3xl">Users</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Num</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr className="hover" key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="btn">E</button>
                  <button onClick={() => handleDeleteBtn(user._id)} className="btn">
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
