import React, { Component } from "react";
import resumePDF from './static/files/resume.pdf';
import { Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class Resume extends Component {

  render() {
    return (
      <div id="Resume">
        <div className="content_title">About Me</div>
        <div className="content_body">
          <div className="title">Resume</div>
          <div className="embededpdf">
            <Document file={resumePDF}>
              <Page pageNumber={1}/>
            </Document>
          </div>
          <div className="title">Curriculum</div>
          <div className="text">
              In my first two years at Purdue University, I have taken these computer courses:
              <ul>
                  <li>Object Oriented Programming (Java)</li>
                  <li>Programming in C (C)</li>
                  <li>Computer Science Tools (Git/Bash)</li>
                  <li>Foundations of Computer Science (Data Structures/Time Compexity/Proof Techniques)</li>
                  <li>Computer Architecture</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Systems Programming</li>
              </ul>
          </div>
          <div className="text">
              I have also taken these non-computer courses
              <ul>
                  <li>Calculus II</li>
                  <li>Calculus III</li>
                  <li>Linear Algebra</li>
                  <li>Calculus based Physics</li>
                  <br/>
                  <li>Music Theory I</li>
                  <li>Wind Ensemble (Concert Band)</li>
                  <li>American Music Repertory Ensemble (Jazz Band)</li>
              </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Resume;
