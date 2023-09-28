export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box widescreen">
        <div className="hero--section--content">
        <div>
                <div className="section--title  heyim" style={{display:"inline",color:'#fff'}} >Hey, I'm</div>
                <div class="section--title love" style={{display:"inline",color:'#f07900'}}> Love</div>
            </div>
          
          <h1 className="hero--section--title" style={{color:'#FFD580'}}>
            <span className="hero--section-title--color">Computer Science</span>{" "}
            <br />
            Undergraduate
          </h1>
          <p className="hero--section-description heroIntro" style={{color:'#fff'}}>
          Welcome to my portfolio!
            <br /> Feel free to explore and get to know about me.
          </p>
        </div>
        <button className="btn btn-primary"
        onClick={() => {
          window.open("https://drive.google.com/file/d/1zyHpePcoL5A2OEoD8hSLlFXU8KFzECyB/view", "_blank");
          
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-text-fill" viewBox="0 0 16 16" style={{ marginRight: '8px' }} >
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"/>
</svg>
          View My Resume</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hs.png" alt="Hero Section" />
      </div>
    </section>
  );
}
