import $ from 'jquery';
import Typed from 'react-typed';
export const Header = (props) => {
    // Typed Initiate
    if ($('.hero .hero-text h2').length === 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        console.log("aaaaaaaaaaaa",typed_strings);
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

  return (
    <div className="hero" id="home">
      <div className="container-fluid">
          <div className="row align-items-center">
              <div className="col-sm-12 col-md-6">
                  <div className="hero-content">
                      <div className="hero-text">
                          <p>I'm</p>
                          <h1>Rilah Mario MIHARINIAINA</h1>
                          <h2>
                          <Typed
                                strings={['Web Designer', 'Web Developer', 'Apps Designer', 'Apps Developer']}
                                typeSpeed={100}
                                backSpeed={20}
                                smartBackspace={false}
                                loop={true}
                            />
                          </h2>
                          <div className="typed-text">Web Designer, Web Developer, Fullstack Developer, Apps Designer, Apps Developer</div>

                      </div>
                      <div className="hero-btn">
                          <a className="btn" href="">Hire Me</a>
                          <a className="btn" href="">Contact Me</a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-12 col-md-6 d-none d-md-block">
                  <div className="hero-image">
                      <img src="img/hero.png" alt="Hero Image" /> 
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
