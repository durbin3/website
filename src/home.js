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
              I am a Graduating Senior at Purdue University earning a B.S. in Computer Science and a Minor in Mathematics.
              I have some professional experience managing a small team doing full stack web development using modern web technologies.
              I also have academic research experience optimizing Graph Neural Networks, and separately,
              creating and deploying automated financial models to predict and trade using a stock portfolio optimized to have
              the mathematically highest return for a given level of risk (variance).
          </div>

          <div className="text">
            In my free time I dedicate a lot of time practicing jazz trumpet and performing in my jazz band,
            which not only helps my musical skills, but transfers to all areas of my life by improving my public speaking ability
            and showing me ways to practice and improve all skills - as the same methods for practicing music can be applied generally.
          </div>

          <div className="text">
            My interests in computer science center around machine learning, as will become more obvious when viewing my personal projects.
            I have a particular interest in the field of quantitative finance, and more specifically, building predictive models for stocks
            and automated software for backtesting the models and automated trading using those models.
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
