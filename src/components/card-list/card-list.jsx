import Card from "../card/card";
import "./card-list-style.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      const { id, name, email } = monster;

      return <Card key={id} name={name} email={email} id={id} />;
    })}
  </div>
);

export default CardList;
