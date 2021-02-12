import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div id="Home">
        <div className="content_title">Eric Durbin</div>
        <div className="text">
          I am a beginning programmer with a strong desire to
          learn and make great changes to the world around me
        </div>
        <div className="content_body">
          <div className="text">
              I am a Sophomore at Purdue University studying Computer Science. 
              I've used a variety of both web and system technologies but have yet to find the niche I will specialize in.
              Whenever I am not programming, I spend my free time developing my skills on trumpet, playing chess, 
              or seeking out resources to further my knowledge of the world around me.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
