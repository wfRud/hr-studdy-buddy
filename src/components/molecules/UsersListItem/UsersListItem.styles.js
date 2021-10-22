import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 9px;
  padding-bottom: 24px;
  border-bottom: 1px solid #dfe2e8;
  &::not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
`;

export const TextWrapper = styled.div`
  margin: 0 12px 0 24px;
`;

export const NameStyled = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  margin: 0;
`;

export const Attendance = styled.p`
  margin: 0;
`;
