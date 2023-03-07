import React from 'react';
import PropTypes from 'prop-types';
import { TitleSection } from './Section.styled';

const Section = ({ title, children }) => (
  <div>
    <TitleSection>{title}</TitleSection>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
};
export default Section;
