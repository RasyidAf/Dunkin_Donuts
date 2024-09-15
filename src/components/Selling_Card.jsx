/* eslint-disable react/prop-types */

function Card(props) {
    return (
        <div className="flex flex-col gap-[10px]">
            <img src={props.image} alt={props.tipe} className="w-[350px] h-[200px] object-cover" />
            <h6 className="text-2xl font-semibold">{props.tipe} Donut</h6>
            <p>${props.price}</p>
        </div>
    )
}

export default Card;