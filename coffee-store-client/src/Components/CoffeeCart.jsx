import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCart = ({ coffee }) => {
  const {_id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method:"DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your coffee has been deleted.',
                'success'
              )
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl ">
        <figure>
          <img src={photo} className="w-80" alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pr-4">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="btn-group btn-group-vertical space-y-4 m-5">
              <button className="btn">View</button>
              <Link to={`updateCoffee/${_id}`}>
              <button className="btn">Update</button>
              </Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-orange-500 text-white"
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCart;
