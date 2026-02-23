import { UserName } from './UserName';
import UserAge from './userAge';
import { UserEmail } from './UserEmail';
import { Fragment } from 'react/jsx-runtime';
import { UserAvatar } from './userAvatar';

export const UserInfo = () => {
  return (
    <Fragment>
      <UserAvatar />
      <UserName />
      <UserAge />
      <UserEmail />
    </Fragment>
  )
}