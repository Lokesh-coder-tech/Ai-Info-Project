import TextScramble from '../components/TextScramble'
import image from '../assets/images/banner3.jpeg'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='home'>
       <div className="text">
         <h1>Learn AI tools, build future-ready skills with confidence.</h1>
      </div>
      <img src={image} alt="" />
       <div className="text-scramble">
        <TextScramble  text="Aivon-Your Guide to Artificial Intelligence" />
       </div>

       {/* --- 1. WHAT IS AIVON? --- */}
       <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-heading">Demystifying AI.</h2>
            <p className="section-subtext">
              Aivon is your structured guide to the world of Artificial Intelligence. 
              We believe AI shouldn't be complicated. We filter through thousands of tools 
              to bring you the ones that actually matter. Whether you want to write code faster, 
              generate art, or automate your daily tasks, we provide the roadmap.
            </p>
          </div>
          <div className="about-visual">
            <div className="glowing-orb"></div>
          </div>
        </div>
      </section>

      {/* --- 2. FEATURES GRID --- */}
      <section className="features-section">
        <h2 className="section-heading">Why Start Here?</h2>
        <div className="features-grid">
          
          <div className="feature-card">
            <h3>Beginner Focused</h3>
            <p>No complex jargon. We explain concepts in plain English so anyone can understand.</p>
          </div>

          <div className="feature-card">
            <h3>Curated Tools</h3>
            <p>Stop drowning in options. We hand-pick the most reliable and useful AI tools for you.</p>
          </div>

          <div className="feature-card">
            <h3>Practical Skills</h3>
            <p>Don't just read about AI. Learn how to actually apply it to your work and projects.</p>
          </div>

          <div className="feature-card">
            <h3>Future Ready</h3>
            <p>The landscape changes daily. We keep our guides updated so you stay ahead of the curve.</p>
          </div>

        </div>
      </section>

      {/* --- 3. AUDIENCE STRIP --- */}
      <section className="audience-section">
        <h2 className="section-heading" style={{textAlign: 'center'}}>Who is Aivon for?</h2>
        <div className="audience-strip">
          <div className="audience-item">
            <h3>Students</h3>
            <p>Research & Career Prep</p>
          </div>
          <div className="audience-item">
            <h3>Developers</h3>
            <p>APIs & Coding Assistants</p>
          </div>
          <div className="audience-item">
            <h3>Creators</h3>
            <p>Generative Art & Copy</p>
          </div>
          <div className="audience-item">
            <h3>Everyone</h3>
            <p>Curious Minds</p>
          </div>
        </div>
      </section>

      {/* --- 4. VISION SECTION --- */}
      <section className="vision-section">
        <h2>Technology + Humanity</h2>
        <p className="section-subtext">
          There is a fear that AI will replace human creativity. We see it differently. 
          We believe AI is a tool that amplifies human potential. 
          At Aivon, our vision is a future where you remain in the driver's seat.
        </p>
      </section>

      {/* --- 5. CALL TO ACTION --- */}
      <section className="cta-section">
        <h2 className="section-heading">Ready to upgrade your skills?</h2>
        <p className="section-subtext">The future is waiting. Start your journey today.</p>
        <button className="cta-btn" onClick={() => navigate("/aitools")} >Explore AI Tools</button>
      </section>
    </div>
  )
}

export default Home
