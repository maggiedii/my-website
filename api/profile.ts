import profileData from '../backend/src/data/profile.json';
import type { Profile } from '../shared/src/profile';

export const runtime = 'nodejs';

const jsonHeaders = {
  'content-type': 'application/json; charset=utf-8',
};

const profile = profileData as Profile;

export default {
  fetch(_request: Request) {
    return new Response(JSON.stringify(profile), {
      status: 200,
      headers: jsonHeaders,
    });
  },
};
