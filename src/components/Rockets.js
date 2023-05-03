import { useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const rocketsList = useSelector((state) => state.rockets);

  return (
    <div className="rockets-container">
      {rocketsList.map((r) => (
        <Rocket key={r.id} rocket={r} />
      ))}
    </div>
  );
};

export default Rockets;
