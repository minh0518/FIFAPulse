import React from 'react';
import { LoadingContainerDiv } from './Loading.styled';
import Spinner from '../../images/LoadingSpinner.gif';

const Loading = () => {
  return <img src={Spinner} alt="Loading Spinner" />;
};

export default Loading;
