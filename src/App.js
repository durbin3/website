import React from 'react';
import './App.css';

import {
  Route,
  NavLink,
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
    <header className="App-header" id="top">
    </header>
      <HashRouter>
        <NavBar />
        <Content />
      </HashRouter>
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
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/challenges" component={Challenges}/>
        <Route path="/resume" component={Resume}/>
      </div>
    );
  }
}

// function (props) {
//   return (<Route path={props.path} component={props.component}/>);
// }
class NavBar extends React.Component {
  renderList(url, name) {
    return <NavItem url={url} name={name}/>
  }

  render() {
    var items = [
      {"url": "/projects", "name": "Projects"},
      {"url": "/challenges", "name": "Challenges"},
      {"url": "/resume", "name": "Resume/Curriculum"}
    ];
    var listItems = items.map((x) => this.renderList(x.url,x.name));
    return(
      <ul className="NavBar">
        <li className="Name"><NavLink className="nav_link" to="/">Eric Durbin</NavLink></li>
        {listItems}
      </ul>
    );
  }
}

// <a id="myLink" title="Click to do something" href="PleaseEnableJavascript.html" onclick="MyFunction();return false;">link text</a>
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

const TOC_item = (props) => {
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
      </div>
    );
  }
}
export default App;
export { TOC, TOC_item };
