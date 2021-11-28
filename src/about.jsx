import img1 from './images/profilepic.jpg';
import './css/about.css';
export const About = () => {
  return (
    <>
      <div className='bio'>
        <img src={img1} alt='profile-pic' id='profile-pic' />
        <h2>Hello.</h2>
        <p id='desc'>
          I am a graduate from Southern Alberta Institute of Technology (SAIT).
          I am always learning new techonologies and have a passion for coding.
        </p>
        <hr />
      </div>
    </>
  );
};
