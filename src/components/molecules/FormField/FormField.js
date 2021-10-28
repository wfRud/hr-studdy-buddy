/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormField = ({ onChange, value, label, name, id, type = 'text', ...props }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input type={type} id={id} type={type} name={name} value={value} onChange={onChange} data-testid={label} />
  </Wrapper>
);

FormField.propTypes = {
  label: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  type: propTypes.string,
};

export default FormField;
