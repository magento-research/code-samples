import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
  const {pages} = props;

  const links = pages.map(page => {
    return (
      <li key={page.url}>
        <Link to={page.url}>{page.label}</Link>
      </li>
    );
  });

  return <ul>{links}</ul>;
};

export default Home;
