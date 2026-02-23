import { UserName } from './UserName';
import UserAge from './userAge';
import { UserEmail } from './UserEmail';
import { Fragment } from 'react/jsx-runtime';
import { UserAvatar } from './userAvatar';
import { UserRoles } from './UserRoles';

export const UserInfo = () => {
  return (
    <Fragment>
      <UserAvatar />
      <UserName />
      <UserAge />
      <UserEmail />
      <UserRoles  />
    </Fragment>
  )
}