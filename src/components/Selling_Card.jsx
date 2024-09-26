/* eslint-disable react/prop-types */

function Card({ props }) {
  console.log(props);
  return (
    <>
      {props &&
        props?.map((prop, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <img
              src={prop.image}
              alt={prop.tipe}
              className="w-[350px] h-[200px] object-cover"
            />
            <h6 className="text-2xl font-semibold">{prop.tipe} Donut</h6>
            <p>${prop.price}</p>
          </div>
        ))}
    </>
  );
}

export default Card;
