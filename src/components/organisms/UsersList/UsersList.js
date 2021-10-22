import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = () => (
  <Wrapper>
    <StyledList>
      {users.map((userData, i) => (
        <UsersListItem index={i} userData={userData} key={userData.name} />
      ))}
    </StyledList>
  </Wrapper>
);

export default UsersList;
