import propTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';
import { Wrapper, TextWrapper, NameStyled, Attendance } from './UsersListItem.styles';

const showIndex = (index) => alert(`This student is #${index + 1}`);

const UsersListItem = ({ index, userData: { average, name, attendance = '0%' } }) => (
  <>
    <Wrapper>
      <Average>{average}</Average>
      <TextWrapper>
        <NameStyled>{name}</NameStyled>
        <Attendance>attendance: {attendance}</Attendance>
      </TextWrapper>
      <Button onClick={() => showIndex(index)} />
    </Wrapper>
  </>
);

UsersListItem.propTypes = {
  userData: propTypes.shape({
    average: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    attendance: propTypes.string,
  }),
};

export default UsersListItem;
