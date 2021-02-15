import React, { Component } from "react";
import { TOC, TOC_item } from "./App";
 
class Challenges extends Component {
  render() {
    return (
      <div id="Challenges">
        <p className="content_title">Challenges</p>
        <TOC>
          <TOC_item href="#hello_world">Hello World Hackathon</TOC_item>
          <TOC_item href="#foobar">Google Foobar</TOC_item>
          <TOC_item href="#p_euler">Project Euler</TOC_item>
        </TOC>
        <Challenge id="hello_world">
          <div class="title">Hello World Hackathon</div>
          <div class="text">
              I participated in the Purdue University Hello World Hackathon in late
              2019. The event was a 24 hour coding "Hackathon", where my team of 5
              people had 24 hours to create a project and present it to the judges
              at the end for scoring. The project we made was the bare-bones version
              of Project Synergi, and at the end of the event my team got 2nd place
              out of about 50 groups. 
          </div>
          <div class="text">
              Overall, the whole event taught me much more than full-stack development
              fundamentals. I learned how to work on a team towards a common goal
              and how to both teach people when they need taught and lead people when
              they lose sight of the goal.
          </div>
        </Challenge>
        <Challenge id="foobar">
          <div class="title">Google Foobar</div>
          <div class="text">
              I received an invitation to Google Foobar early 2020. Google Foobar is
              Google's in-house code challenge where they ask algorithmic based questions
              of increasing complexity with a focus on time complexity and data structures.
          </div>
          <div class="text">
              I am still working on it, but at the moment I am on level 4 out of 5 of the
              challenge. Some examples of problems I had to solve include (but are not limited to):
              <ul>
                  <li>an example of the paritioning problem</li>
                  <li>bit-shifting: performing complex calculations by shifting the bits of numbers</li>
                  <li>pathfinding: finding the shortest path to an object</li>
                  <li>finding if a set of numbers contains a triple of a, b, c where a is a multiple of b, and b is a multiple of c</li>
              </ul>
          </div>
        </Challenge>
        <Challenge id="p_euler">
          <div class="title">Project Euler</div>
          <div class="text">
              Project Euler is similar to Google Foobar, but is not tied to any corporation.
              The premise is still the same however, with there being complex algorithmic-based
              math problems to be solved using programming.
          </div>
          <div class="text">
              Some of the challenges that I have completed include:
              <ul>
                  <li>Largest Prime Factor of a set of numbers</li>
                  <li>Largest Pallindrome Product</li>
                  <li>10001st prime number</li>
                  <li>Finding Pythagorean Triplets</li>
                  <li>Highly divisible triangular numbers</li>
                  <li>Summation of Prime Numbers</li>
              </ul>
          </div>
        </Challenge>
      </div>
    );
  }
}

function Challenge (props) {
  return <div id={props.id}>{props.children}</div>
}
export default Challenges;
