import { StyledButton } from './Button.styles';
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg';

const Button = (props) => (
  <StyledButton {...props}>
    <DeleteIcon />
  </StyledButton>
);

export default Button;
