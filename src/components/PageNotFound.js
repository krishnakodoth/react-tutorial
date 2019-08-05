import React, { Component } from 'react';

class PageNotFound extends Component {
    render() {
        return (
            <div className="container">

      <h1>404</h1>
      <p><strong>File not found</strong></p>

      <p>
        The site configured at this address does not
        contain the requested file.
      </p>

      <p>
        If this is your site, make sure that the filename case matches the URL.<br />
        For root URLs (like <code>http://example.com/</code>) you must provide an
        <code>index.html</code> file.
      </p>

      
    </div>
        );
    }
}

export default PageNotFound;