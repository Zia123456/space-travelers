// actions
const GET_MISSIONS = 'missions/GET_MISSIONS';
const JOIN_MISSION = 'missions/JOIN_MISSION';

// reducer
const initialSatate = [];

const missionsReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id === action.payload) {
          return {
            ...mission,
            reserved: !mission.reserved,
          };
        }
        return mission;
      });
    default:
      return state;
  }
};

// action creator
export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export default missionsReducer;
