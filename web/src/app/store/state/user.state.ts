import { User } from '../../models/user.model';

export interface IUserState {
  users: User[];
  selectedUser: User;
}

export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
};
