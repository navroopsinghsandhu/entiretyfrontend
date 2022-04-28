import React from 'react';
import './App.css';
import Footer from './Footer';

function Home() {
  return (

    <div>
        <section className="firstsection">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big" id="web">Our Products</h1>
                    <p className="text-small">
                    We offer fully featured custom software solutions fully tailored to the needs of your business. We always focus on quality, timely delivery and budget friendly solutions to make sure you get exactly what you need under your budget limits.
                    </p>
    
    
                </div>
            </div>
        </section>
    
        <section className="secondsection">
            <div className="box-main">
                <div className="firstHalf">
                    <h1 className="text-big" id="program">
                        Reliability
                    </h1>
                    <p className="text-small">
                    Many businesses run on critical software we developed. You can depend on our software.
                    </p>
    
    
                </div>
            </div>
        </section>

        <Footer /> 
        
    </div>

  );
}

export default Home;