import { StyledDeleteButton } from './DeleteButton.styles';
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';

const DeleteButton = (props) => (
  <StyledDeleteButton {...props}>
    <DeleteIcon />
  </StyledDeleteButton>
);

export default DeleteButton;
