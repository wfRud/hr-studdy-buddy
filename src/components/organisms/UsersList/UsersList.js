import { StyledList } from './UsersList.styles';
import { Title } from 'components/atoms/Title/Title';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';

const UsersList = ({ users }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem userData={userData} key={userData.name} />
        ))}
      </StyledList>
    </>
  );
};

export default UsersList;
