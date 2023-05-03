import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMissions } from './missions';

const baseUrl = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS = 'missions/FETCH_MISSIONS';

const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async (_, thunkAPI) => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  const missions = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
  thunkAPI.dispatch(getMissions(missions));

  return missions;
});

export default fetchMissions;
