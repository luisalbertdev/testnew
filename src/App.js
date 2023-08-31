
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
                            <div className="txthome">
                            <img src={lsl}  alt="canalz" />
                            </div>                      
                            <h2 className="">Ventana de Nuestro Pueblo</h2>
                            <p className="">"Bienvenidos a Canal Z, un medio de comunicación comunitario comprometido en brindarte las noticias más relevantes y cercanas a nuestra comunidad local. En Canal Z, nos esforzamos por ofrecerte una mirada auténtica y transparente de los eventos, historias y personas que dan vida a nuestra querida localidad. Desde noticias locales hasta acontecimientos que nos impactan a todos, nuestro objetivo es mantenerte informado y conectado con lo que sucede a tu alrededor. Nos enorgullece ser un canal de comunicación que promueve la diversidad, el progreso y el espíritu comunitario. A través de nuestras noticias, reportajes y cobertura, queremos compartir las voces y perspectivas de nuestra comunidad, fomentando un diálogo enriquecedor. Únete a nosotros mientras exploramos cada rincón y celebramos lo que hace único a nuestro lugar. Descubre la esencia de nuestra comunidad en Canal Z, donde te mantendremos informado y conectado".</p>
                            
                            
                            
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
    <section className="upcoming-meetings" id="Prensa">
    <div className="container"> 
        <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2 >PRENSA</h2>
                        </div>
                    </div>
          </div>  
      </div>

      
      
      <div className='flexible'>
      <News />
      </div>
    </section>
    {/* ***** FIN PRENSA ***** */}
    {/* ***** FOOTER ***** */}
    <section className="footer" id="Contacto">
    <h2>MARACAIBOZUR@GMAIL.COM</h2>
    </section>

    {/* ***** FIN FOOTER ***** */}
  </div>
  );
}

export default App;
