import React from "react"
import Swal from "sweetalert2"

const AddCoffee = () => {
  const handleAddCoffee = e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const quantity = form.quantity.value
    const supplier = form.supplier.value
    const taste = form.taste.value
    const category = form.category.value
    const details = form.details.value
    const photo = form.photourl.value

    const newCoffee = { name, quantity, supplier, taste, category, details, photo }

    console.log(newCoffee)

    fetch("http://localhost:5001/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newCoffee)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "User Added Successfully!",
            icon: "success"
          })
        }
        form.reset()
      })
  }

  return (
    <div className="bg-[#f4f3f0] p-24">
      <h2 className="text-xl font-extrabold mb-10 text-center">Add a Coffee</h2>
      <p className="mb-10 text-center">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
      <form onSubmit={handleAddCoffee}>
        {/* Form coffee name and quantity row*/}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2">
            <label className="mb-3">
              <span>Coffee Name</span>
            </label>
            <input name="name" type="text" placeholder="Enter coffee Name" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2">
            <label className="mb-3">
              <span>Quantity</span>
            </label>
            <input name="quantity" type="text" placeholder="Enter coffee quantity" className="input input-bordered w-full" />
          </div>
        </div>
        {/* Form supplier and taste*/}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2">
            <label className="mb-3">
              <span>Supplier</span>
            </label>
            <input name="supplier" type="text" placeholder="Name" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2">
            <label className="mb-3">
              <span>Taste</span>
            </label>
            <input name="taste" type="text" placeholder="Enter coffee taste" className="input input-bordered w-full" />
          </div>
        </div>

        {/* Form category and detailsrow*/}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control md:w-1/2">
            <label className="mb-3">
              <span>Category</span>
            </label>
            <input name="category" type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2">
            <label className="mb-3">
              <span>Details</span>
            </label>
            <input name="details" type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
          </div>
        </div>
        {/* Form row*/}
        <div className="md:flex gap-5 mb-6">
          <div className="form-control w-full">
            <label className="mb-3">
              <span>Photo</span>
            </label>
            <input name="photourl" type="text" placeholder="Enter Your Photo URL" className="input input-bordered w-full" />
          </div>
        </div>

        <button className="btn mt-3 w-full bg-[#D2B48C] "> Add Coffee</button>
      </form>
    </div>
  )
}

export default AddCoffee
