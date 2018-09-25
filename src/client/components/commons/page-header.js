import React from 'react';
import Helmet from 'react-helmet-async';
import PropTypes from 'prop-types';

const PageHeader = ({ title, metaDescription, metaKeyword, metaAuthor }) => (
  <Helmet
    title={title}
    meta={[
      { name: 'description', content: metaDescription },
      { name: 'keywords', content: metaKeyword },
      { name: 'author', content: metaAuthor }
    ]}
  />
);

PageHeader.propTypes = {
  title: PropTypes.string,
  metaDescription: PropTypes.string,
  metaKeyword: PropTypes.string,
  metaAuthor: PropTypes.string
};

PageHeader.defaultProps = {
  title: 'Reax - Ahmad Aidil',
  metaDescription: 'Reax (React) from scratch - SSR and PWA',
  metaKeyword: 'React,SSR,PWA',
  metaAuthor: 'Ahmad Aidil'
};

export default PageHeader;
