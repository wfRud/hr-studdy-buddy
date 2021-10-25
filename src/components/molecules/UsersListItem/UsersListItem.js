import { useContext } from 'react';
import propTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import { Wrapper, TextWrapper, NameStyled, Attendance } from './UsersListItem.styles';
import { UserShape } from 'types';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);
  return (
    <Wrapper>
      <Average>{average}</Average>
      <TextWrapper>
        <NameStyled>{name}</NameStyled>
        <Attendance>attendance: {attendance}</Attendance>
      </TextWrapper>
      <DeleteButton onClick={() => deleteUser(name)} />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: propTypes.shape(UserShape),
};

export default UsersListItem;
