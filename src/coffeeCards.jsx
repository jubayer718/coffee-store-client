import { useState } from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCards = ({coffee,coffees,setCoffees}) => {

  const { _id, coffeeName, quantity, supplier, taste, category, photo, details } = coffee
  
 
  console.log(coffee)
  
  const handleDelete = (_id) => {
    console.log(_id)
    


Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     fetch(`https://coffee-store-server-brown-delta.vercel.app/coffee/${_id}`, {
      method:"DELETE",
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.deletedCount>0
        ) {
      
           Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

          {
            const remaining = coffees.filter(cof => cof._id !== _id);
            setCoffees(remaining)
}

}
    })




   
  }
});
    
   

}

  // const handleUpdate = (_id) => {
  //   console.log(_id)

    

  // }
  return (
  <div className="card card-side bg-[#F5F4F1] shadow-xl">
  <figure>
    <img
      src={photo}
      alt="coffee" />
  </figure>
  <div className=" flex items-center justify-between w-full p-5">
        <div>
           <h2 className="card-title">Coffee Name: {coffeeName}</h2>
        <p> Quantity: { quantity}</p>
        <p> Supplier: { supplier}</p>
        <p>Taste: { taste}</p>
        <p>Category: { category}</p>
        <p>Details: { details}</p>
       </div>
    <div className="flex flex-col gap-3">
      <button className="btn bg-[#D2B48C] text-white"><FaEye></FaEye></button>
     <Link to={`updatedCoffee/${_id}`} className="btn bg-[#3C393B] text-white"><FaPen></FaPen></Link>
      <button onClick={()=>handleDelete(_id)} className="btn bg-[#EA4744] text-white"><RiDeleteBin6Line></RiDeleteBin6Line></button>
    </div>
  </div>
</div>
  );
};

export default CoffeeCards;