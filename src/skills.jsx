import { Card, Button } from 'react-bootstrap';
import javaImage from './images/javaicon.png';
import cplusplusImage from './images/cplusplus.png';
import reactImage from './images/react.png';
import jsImage from './images/js.png';
import pythonImage from './images/python.png';
import './css/skills.css';
export const Skills = () => {
  return (
    <div>
      <h2 className='skills-title'>My Skills.</h2>

      <div className='skills-cont'>
        <div className='lang'>
          <h3>Java</h3>
          <img src={javaImage} alt='java-logo' />
        </div>
        <p id='skills-desc'>
          Object Oriented analysis and design using common design patterns.
        </p>
      </div>

      <div className='skills-cont'>
        <div className='lang'>
          <h3>c++</h3>
          <img src={cplusplusImage} alt='java-logo' />
        </div>
        <p id='skills-desc'>
          procedural programming and data structures and algorithms using STL.
        </p>
      </div>

      <div className='skills-cont'>
        <div className='lang'>
          <h3>React</h3>
          <img src={reactImage} alt='java-logo' />
        </div>
        <p id='skills-desc'>
          Built front-end components using the react library and react hooks.
        </p>
      </div>

      <div className='skills-cont'>
        <div className='lang'>
          <h3>JS</h3>
          <img src={jsImage} alt='java-logo' />
        </div>
        <p id='skills-desc'>
          added interactive behavior to project. Using the document object
          model.
        </p>
      </div>

      <div className='skills-cont'>
        <div className='lang'>
          <h3>Python</h3>
          <img src={pythonImage} alt='java-logo' />
        </div>
        <p id='skills-desc'>
          Created and built out gui desktop applications using Tkinter library.
        </p>
      </div>

      <hr />
    </div>
  );
};
