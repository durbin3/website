import React, { Component } from "react";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {HashLink as Link} from 'react-router-hash-link';
import midi_1 from "./static/images/midi_1.PNG"
import midi_2 from "./static/images/midi_2.PNG"
import midi_3 from "./static/images/midi_3.PNG"
import synergi_1 from "./static/images/homepage.PNG"
import synergi_2 from "./static/images/login.PNG"
import synergi_3 from "./static/images/projects.PNG"
import synergi_4 from "./static/images/github.PNG"
import synergi_5 from "./static/images/create_new.png"
import synergi_6 from "./static/images/editor.PNG"
class Projects extends Component {
  render() {
    return (
      <div id="Projects">
        <p className="content_title">Projects</p>
        <TOC>
          <TOC_item href="#midi">Midi File Parser</TOC_item>
          <TOC_item href="#synergi">Synergi</TOC_item>
          <TOC_item href="#music_maker">Music Maker</TOC_item>
          <TOC_item href="#conway">Conway's Game of Life</TOC_item>
          <TOC_item href="#discord_bot">Discord Bot</TOC_item>
          <TOC_item href="#rock_paper">Rock Paper Scissors</TOC_item>
        </TOC>
        <div className="content">
        <Project id="midi">
            <div className="title">Midi File Parser</div>
            <div>
            <Images className="midi_slideshow">
              <Image i="1" url={midi_1}/>
              <Image i="2" url={midi_2}/>
              <Image i="3" url={midi_3}/>
            </Images>
            <div className="tech_title">Description:</div>
            <div className="text">
              The Midi file Parser can read in a directory,
              and after populating the gui with the .midi files,
              can perform modifications on the song,
              and can save the resulting song to the local computer.
            </div>
            <div className="text">
              Behind the scenes, the midi file is parsed and loaded into
              memory using linked lists and binary trees.
            </div>
            <div className="tech_title">Technologies Used:</div>
            <div className="text">
              C, Midi API, GTK+ graphics library
            </div>
          </div>
        </Project>
        <Project id="synergi">
          <div className="title">Synergi</div>
          <a className="github" href="https://github.com/legalian/synergi">Github Repo</a>
          <Images className="syn_slideshow">
            <Image i="1" url={synergi_1}/>
            <Image i="2" url={synergi_2}/>
            <Image i="3" url={synergi_3}/>
            <Image i="4" url={synergi_4}/>
            <Image i="5" url={synergi_5}/>
            <Image i="6" url={synergi_6}/>
          </Images>
          <div className="tech_title">Description:</div>
          <div className="text">
              Synergi is a work-in-progress real time collaborative code editor with GitHub integration.
              The user can log into the website through GitHub, and after allowing api access to Synergi,
              the user can import a project from GitHub into Synergi. This will allow them to use the in-built
              code editor to edit any file in the imported repository in real time, at the same time as another user.
              Each user can see the updates in real time and can commit/push the changes to back to the GitHub repository.
          </div>
          <div className="text">
              Behind the scenes the file is synchronized in real time, with each change being verified to prevent
              desynchronization between users. The files themselves are loaded onto a server-side database with all the
              changes where they stay until they are pushed to GitHub.
          </div>
          <div className="text">
              The website itself is a flask app hosted on Heroku. It is constructed using
              Jinja templating and with a SQLAlchemy Database.
          </div>
          <div className="tech_title">Technologies Used:</div>
          <div className="text">
              Python, SQLAlchemy, PostgreSQL, HTML/CSS, Javascript, Jinja
          </div>
        </Project>
        <Project id="music_maker">
          <div className="title">Music Generator</div>
          <a className="github" href="https://github.com/durbin3/music-maker">Github repo</a>
          <div className="tech_title">Description:</div>
          <div className="text">
              The Music Generator can take in a time signature, tonality, and length and generate a song
              that follows music theory standards and has complex melody and rhythm. The inspiration for this project
              came from wanting to create an algorithm that would be able to generate an improvised jazz solo that would
              sound pleasing to hear.
          </div>
          <div className="text">
              Behind the scenes the notes are generated using directed graphs and the rhythms are generated by
              recursively subdividing trees.
          </div>
          <div className="tech_title">Technologies Used:</div>
          <div className="text">Java</div>
        </Project>
        <Project id="conway">
          <div className="title">Conway's Game of Life</div>
          <div className="tech_title">Description:</div>
          <div className="text">
              Solo project that recreated the cell evolution simulator conceptualized
              by John Conway in Java for the purpose of gaining experience with java
          </div>
          <div className="tech_title">Technologies Used</div>
          <div className="text">Java</div>
        </Project>
        <Project id="discord_bot">
          <div className="title">Discord Bot</div>
          <div className="tech_title">Description:</div>
          <div className="text">
              The Discord Bot is a smaller project where I created a program to parse the messages being sent
              in my friends Discord chatroom and if one of the messages contains a reference to a movie we have seen,
              the Bot will send a picture of the scene with the appropriate caption in the image.
          </div>
          <div className="tech_title">Technologies Used:</div>
          <div className="text">Javascript, Discord API</div>
        </Project>
        <Project id="rock_paper">
          <div className="title">Rock Paper Scissors</div>
          <div className="tech_title">Description:</div>
          <div className="text">
              The very first project I ever made, this is the game Rock, Paper, Scissors.
              The player can play with one or two players in the browser. Super simple, but I couldn't leave it
              out of my portfolio.
          </div>
          <div className="tech_title">Technologies Used:</div>
          <div className="text">Javascript, HTML/CSS</div>
        </Project>
        </div>
      </div>
    );
  }
}

const Image = (props) => {
  return (
    <div className="each-slide">
      <img src={props.url}></img>
    </div>
  );
}
class Images extends Component {
  render() {
    return (
      <div className={"slide-container " + this.props.className}>
        {/* <button className="button-left" onclick="plusDivs(-1)">&#10094;</button>
        <button className="button-right" onclick="plusDivs(+1)">&#10095;</button> */}
        <Slide className="slidee" autoplay={false}>
          {this.props.children}
        </Slide>
      </div>
    );
  }
};

const Project = (props) => {
  return (
    <div id={props.id} className="project">
      {props.children}
    </div>
  );
}

class TOC extends Component {
  render() {
    return(
      <div className="toc">
        <p className="toc_title">Table of Contents</p>
        <div className="toc_c">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const TOC_item = (props) => {
  return (
    <div className="toc_item">
      <Link smooth className={props.className} to={props.href}>{props.children}</Link>
    </div>
  );
}
export default Projects;
