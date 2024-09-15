/* eslint-disable react/prop-types */

function Image(props) {
  return (
    <img
      src={props.image}
      alt=""
      className="shadow w-[300px] h-[300px] object-cover hover:-translate-y-[2px] hover:shadow-2xl hover:duration-300 hover:delay-75 hover:ease-in-out"
    />
  );
}

export default Image;
