import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from '@reach/router';

const NavigationBar = () => (
  <div>
    <img src="" alt="Log" />
    <h1>Graduation Issue</h1>
    <div>line</div>
    <nav>
      <Link>News</Link>
      <Link>Sports</Link>
      <Link>Arts</Link>
      <Link>Opinion</Link>
      <Link>Photo</Link>
      <Link>Illustrations</Link>
      <Link>Graphics</Link>
      <Link>Video</Link>
      <Link>Prime</Link>
      <Link>The Quad</Link>
      <Link>-30-</Link>
    </nav>
  </div>
);