import React from 'react';
import './css/App.css';

import {
  Route,
  NavLink,
  Routes,
  BrowserRouter,
  HashRouter
} from "react-router-dom";

import {HashLink as Link} from 'react-router-hash-link';

import Home from "./home"
import Projects from "./projects"
import Challenges from "./challenges"
import Resume from "./resume"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Content />
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

class Content extends React.Component {
  renderRoute(path, comp) {
    return <Route path={this.props.path} component={this.props.component}/>
  }
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/challenges" element={<Challenges/>}/>
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    );
  }
}

class NavBar extends React.Component {
  renderList(url, name, key) {
    return <NavItem url={url} key={key} name={name}/>
  }

  render() {
    var items = [
      {"url": "/projects", "name": "Projects"},
      {"url": "/challenges", "name": "Challenges"},
      {"url": "/resume", "name": "Resume/Curriculum"}
    ];
    var listItems = items.map((x, i) => this.renderList(x.url,x.name, i));
    return(
      <ul className="NavBar">
        <li className="Name"><NavLink className="nav_link" to="/">Eric Durbin</NavLink></li>
        {listItems}
      </ul>
    );
  }
}

class NavItem extends React.Component {
  render() {
    return(
      <li className="NavItem"><NavLink className="nav_link" to={this.props.url}>{this.props.name}</NavLink></li>
    );
  }
}

class TOC extends React.Component {
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

const TocItem = (props) => {
  return (
    <div className="toc_item">
      <Link smooth className={props.className + " link"} to={props.href}>{props.children}</Link>
    </div>
  );
}


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_text">Eric Durbin</div>
        <HashRouter>
          <Link smooth className="footer_github" to="#top">Back to top</Link>

        </HashRouter>
        <a href="https://github.com/durbin3" className="footer_github">My Github</a>
        <a href="https://www.freepik.com" className="footer_github" title="Freepik">Icons</a> 
      </div>
    );
  }
}
export default App;
export { TOC, TocItem };
