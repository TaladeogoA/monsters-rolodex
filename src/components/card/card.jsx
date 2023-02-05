import "./card-style.css";

const Card = (props) => (
  <div className="card-container" key={props.id}>
    <img
      src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
      alt={`monster ${props.name}`}
    />
    <h2>{props.name}</h2>
    <p>{props.email}</p>
  </div>
);

export default Card;
