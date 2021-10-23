export const GET_USERS = 'GET_USERS';

// action creator
export function getUsers(users) {
  // return the action with the type of GET_USERS
  return {
    type: GET_USERS,
    users,
  };
}
