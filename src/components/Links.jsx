import React, { Component } from "react";

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <>
          <a href="bbc.co.uk/sport" className="link">
            Home
          </a>
          <a href="bbc.co.uk/sport">Contacts</a>
          <a href="bbc.co.uk/sport">Main</a>
        </>
        {/* Same as React Fragment - better than using div */}
        {/* This is same as open bracket */}
      </React.Fragment>
    );
  }
}

export default Links;
