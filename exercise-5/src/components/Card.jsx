export default function Card({make,model,year,img}) {
    return (
    <div className="card">
      <img src={img} />
      <div>
        <h2>Make:  {make} </h2>
        <h2>Model:{model}</h2>
        <h2>Year:{year}</h2>
      </div>
       <div className="btn">
        <button>View Details</button>
       </div>
    </div>
    );
  }