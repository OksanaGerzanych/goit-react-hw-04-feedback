import React from 'react';
import PropTypes from 'prop-types';
import { Feedback } from './FeedbackOptions.styled';
import { ButtonFeedback } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Feedback>
    {options.map(option => (
      <ButtonFeedback
        key={option}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </ButtonFeedback>
    ))}
  </Feedback>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
