import "./card-list.css";
import Card from "../card/Card";

const Cardlist = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default Cardlist;
