import React from 'react';
import { useField } from 'formik';
import { StyledInput } from '../Main/styled/StyledSearchForm';

const SimpleInput = ({ ...props }) => {
  const [field] = useField(props);
  return <StyledInput {...field} {...props} />;
};

export default SimpleInput;
