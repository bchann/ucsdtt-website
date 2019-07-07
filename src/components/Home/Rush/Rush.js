import './Rush.css';

import React from 'react';
import { Element } from 'react-scroll';
import { isChrome } from '../../../shared/helpers.js';

function Rush() {
  return (
    <Element name="rush" className="rush">
      <div className="rush-pic-container">
        <img
          className=" rush-pic"
          data-src={isChrome ? require('./images/rush-cover.webp') : require('./images/rush-cover.png')}
          alt="Rush"
        />
      </div>
    </Element>
  );
}

export { Rush };
