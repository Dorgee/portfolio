import './css/projects.css';
import { Carousel } from 'react-bootstrap';
import testimg from './images/campgroundsimage.png';
import test2img from './images/recommerceimage.png';
import test3img from './images/snakegame.png';
export const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>

      <Carousel variant='dark' className='test4'>
        <Carousel.Item>
          <img className='d-block w-70 test3' src={testimg} alt='First slide' />
          <Carousel.Caption>
            <h3>
              <a href='https://campgroundreviews.herokuapp.com/'>Yelp-Camp</a>
            </h3>
            {/* <p className='color'>
              Users can post a campground and other users can leave a review on
              it. Created using node, express, mongoose, and ejs.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-70  test3'
            src={test2img}
            alt='Second slide'
          />
          <div className='move'>
            <Carousel.Caption>
              <h3>
                <a href='https://recommerce-front-end.herokuapp.com/'>
                  Recommerce
                </a>
              </h3>

              {/* <p className='color-2'>
                A platform created using react and spring boot. This site allows
                you to select the model, type, and condition of your phone. It
                will also give you a price and if you agree to that price the
                api will print you out a shipping label.
              </p> */}
            </Carousel.Caption>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-70 test3'
            src={test3img}
            alt='Third slide'
          />
          <Carousel.Caption>
            <h3>
              <a href='https://github.com/Dorgee/SnakeGame'>Snake</a>
            </h3>
            {/* <p className='color'>
              A classic game of snake created using python. Uses concepts likes
              classes and lists.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div class='bottom-container'>
        {/* <a class='footer-link' href='https://www.linkedin.com/in/dorgee-lama/'>
          LinkedIn
        </a>
        <a class='footer-link' href='https://github.com/Dorgee'>
          GitHub
        </a>
        <a
          class='footer-link'
          href='https://recommerce-front-end.herokuapp.com/'
        >
          Website
        </a> */}
        <p class='bot'>© 2021 Dorgee Lama</p>
      </div>
    </div>
  );
};
