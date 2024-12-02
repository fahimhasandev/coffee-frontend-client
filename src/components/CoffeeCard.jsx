import React, { useState } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee

  const handleDelete = _id => {
    console.log(_id)

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
        console.log("Delete Confirm")

        fetch(`http://localhost:5001/coffee/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              })

              const remaining = coffees.filter(cof => cof._id !== _id)
              setCoffees(remaining)
            }
          })
      }
    })
  }
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4">
        <h2 className="card-title">Name: {name}</h2>
        <p>{quantity}</p>
        <p>{supplier}</p>
        <p>{taste}</p>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>

            <button className="btn join-item bg-orange-400">X</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeCard
