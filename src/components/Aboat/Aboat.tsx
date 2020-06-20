/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react';

import { GitHubIcon, LinkedinIcon } from '../../assets';

import './Aboat.scss';

export class Aboat extends Component {
  render() {
    return (
      <div id="about">
        <div className="about-section">
          <h1>About</h1>
          <p>This is a minimal boilerplate example using React, TypeScript and Parcel along with Sass support</p>
        </div>
        <div className="section section-grid">
          <div className="item react-section">
            <h2>React</h2>
            <p>React is a library for building composable user interfaces.</p>
          </div>
          <div className="item typescript-section">
            <h2>TypeScript</h2>
            <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p>
          </div>
          <div className="item parcel-section">
            <h2>Parcel</h2>
            <p>Parcel is a blazing fast, zero configuration web application bundler</p>
          </div>
          <div className="item sass-section">
            <h2>Sass</h2>
            <p>Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.</p>
          </div>
        </div>
        <div className="social-section">
          <h2>Follow Me On Social Media</h2>
          <a href="https://github.com/witoldmetel" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/witoldmetel" target="_blank">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    );
  }
}
