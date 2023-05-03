/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
import { useSelector } from 'react-redux';
import '../styles/myProfile.css';

const MyProfile = () => {
  const missions = useSelector((state) => state.missions);
  const rocketsList = useSelector((state) => state.rockets);
  const joinMissions = missions.filter((mission) => mission.reserved);
  const myRockets = rocketsList.filter((rockets) => rockets.reserved);

  return (
    <div className="container">
      <section className="profile-section">
        <div className="profile">
          <h2>My Missions</h2>
          <ul className="profile-list">
            {joinMissions.map((mission) => (
              <li className="profile-item" key={mission.id}>
                <span className="profile-name">{mission.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="profile">
          <h2>My Rockets</h2>
          <ul className="profile-list">
            {myRockets.map((rocket) => (
              <li className="profile-item" key={rocket.id}>
                <span className="profile-name">{rocket.rocket_name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
