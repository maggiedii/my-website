import profileData from '../backend/src/data/profile.json';
import type { Profile } from '../shared/src/profile';

const profile = profileData as Profile;

export function GET() {
  return Response.json(profile);
}
