import { Link } from 'react-router-dom';
import bgImage from '../assets/bg.jpeg';

function Home() {
    
  return (
    <>
      <div>
      <div className="hero min-h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to="content">
              <button className="btn btn-red text-white">Search Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;