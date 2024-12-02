import Swal from 'sweetalert2'

const AddCoffee = () => {


  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const details = form.details.value;
    const newCoffee = {
      coffeeName,quantity,supplier,taste,category,photo,details
    }
    console.log(newCoffee)


    fetch('https://coffee-store-server-brown-delta.vercel.app/coffee', {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(newCoffee)

    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          Swal.fire({
  title: 'success!',
  text: 'user added successfully',
  icon: 'success',
  confirmButtonText: 'Cool'
})
        }
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <form onSubmit={handleAddCoffee} className="card-body   bg-[#F4F3F0]">
        <h2 className="text-2xl text-center font-semibold my-3">add coffee</h2>
        <p className="text-center w-3/4 mx-auto my-3">
          It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
        <div className="grid grid-cols-2 gap-5  rounded-lg">
          <div>
           <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>

  <input className="input input-bordered join-item w-full" name="name" placeholder="Coffee Name" />
 
</div>
          <div>
           <label className="label">
            <span className="label-text">Quantity</span>
          </label>

  <input className="input input-bordered join-item w-full" name="quantity" placeholder="Available Quantity" />
 
          </div>
          
          {/* supplier */}
           <div>
           <label className="label">
            <span className="label-text">Supplier</span>
          </label>

  <input className="input input-bordered join-item w-full" name="supplier" placeholder="Enter Coffee supplier" />
 
          </div>
          {/* Taste */}
           <div>
           <label className="label">
            <span className="label-text">Taste</span>
          </label>

  <input className="input input-bordered join-item w-full" name="taste" placeholder="Enter Coffee taste" />
 
          </div>
          {/* category */}
           <div>
           <label className="label">
            <span className="label-text">Category</span>
          </label>

  <input className="input input-bordered join-item w-full" name="category" placeholder="Enter Coffee category" />
 
          </div>
          {/* Details */}
           <div>
           <label className="label">
            <span className="label-text">Details</span>
          </label>

  <input className="input input-bordered join-item w-full" name="details" placeholder="Enter Coffee details" />
 
          </div>


        </div>
        <input className="input input-bordered my-3" type="text" name="photo" id="" placeholder='PhotoURL'/>
<input className="btn rounded-md bg-[#D2B48C] w-full my-4" type="submit" value="add coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;