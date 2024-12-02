import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard"
import { useState } from "react"

function App() {
  const LoadedCoffees = useLoaderData()

  const [coffees, setCoffees] = useState(LoadedCoffees)

  return (
    <>
      <h1 className="text-6xl text-center my-20">coffees: {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-4">
        {coffees.map(coffee => (
          <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees} />
        ))}
      </div>
    </>
  )
}

export default App
