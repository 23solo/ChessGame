import { User } from '../user/User';

export const kingCheckPosition = (
  user: User,
  position: [number, number],
  revert: boolean = false
) => {
  if (revert) {
    user.kingCheckedFrom = [-1, -1];
    return;
  }
  user.kingCheckedFrom = [position[0], position[1]];
};
