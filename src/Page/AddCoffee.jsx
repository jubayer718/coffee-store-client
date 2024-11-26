

const AddCoffee = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="card-body   bg-[#F4F3F0]">
        <div className="grid grid-cols-2 gap-5 rounded-lg">
          <div>
           <label className="label">
            <span className="label-text">Coffee Name</span>
          </label>

  <input className="input input-bordered join-item w-full" placeholder="Coffee Name" />
 
</div>
          <div>
           <label className="label">
            <span className="label-text">Quantity</span>
          </label>

  <input className="input input-bordered join-item w-full" placeholder="Available Quantity" />
 
          </div>
          


</div>
<input className="btn rounded-md bg-[#D2B48C] w-full my-4" type="submit" value="add coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;