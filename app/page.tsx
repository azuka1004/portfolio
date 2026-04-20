export default function Home() {
  return (
    <div className="container">
      <header className="hero">
<div className="profile-image-container">
           <img 
             src="/img.png"
             alt="Azuka" 
             className="profile-image"
           />
           <div className="profile-overlay">
             <span>Azuka</span>
           </div>
           <div className="profile-glow"></div>
         </div>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I love Mai Sakurajima
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-grid">
          <div className="skill-card">I play on nerves pretty well</div>
          <div className="skill-card">Goat of not doing my responsibilities</div>
          <div className="skill-card">9000+ hours spent on roblox</div>
          <div className="skill-card">I know what is <b>poślizg</b> in engine</div>
        </div>
      </section>

      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Available for projects and collaborations.</p>
        <a href="mailto:wiktorkaliszewski09@gmail.com
" className="contact-btn">
          Contact Me
        </a>
      </section>

      <footer>
        <p>Made with ♡ in by my senpai</p>
      </footer>
    </div>
  );
}