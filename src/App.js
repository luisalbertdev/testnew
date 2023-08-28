
import './App.css';
import News from './News';
import MyNavbar from './miscomponentes/MyNavbar';
import lente from './vbg.mp4';
import lsl from './visual/letras sin logo.png';


function App() {
  return (
    <div>

      {/* ***** Main Banner Area Start ***** */}
      <section className="section main-banner" id="top" data-section="section1">
            <video src={lente} autoPlay muted loop className="bg-video"></video>
            <div className="video-overlay header-text">
                <MyNavbar/>
                <div className="container">                    
                    <div className="row">
                      <div className="col-lg-12">
                          <div className="caption">
                            <img src={lsl} alt="canalz" />                      
                            <h2>Ventana de Nuestro Pueblo</h2>
                            <p>This is an edu meeting HTML CSS template provided by <a rel="nofollow" href="https://templatemo.com/page/1" target="_blank">TemplateMo website</a>. This is a Bootstrap v5.1.3 layout. The video background is taken from Pexels website, a group of young people by <a rel="nofollow" href="https://www.pexels.com/@pressmaster" target="_blank">Pressmaster</a>.</p>
                            
                            
                            
                            <div className="main-button-red">
                              <div className=""><a href="#contact">En Vivo</a></div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
      </section>
     {/* ***** Main Banner Area End ***** */}





    {/* ***** PRENSA ***** */}
    <section className="upcoming-meetings" id="pricing">
        <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2 >PRENSA</h2>
                        </div>
                    </div>
        </div>

      
      
      <div className='flexible'>
      <News />
      </div>
    </section>
    {/* ***** FIN PRENSA ***** */}
  </div>
  );
}

export default App;
