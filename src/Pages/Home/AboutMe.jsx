export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/aboutphoto.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          
          <h1 className="skills-section--heading about--heading"style={{color:'#f07900'}}>About Me</h1>
          <p className="hero--section-description about--description" style={{color:'#fff'}}>
          I am a junior at the University of Texas at Dallas majoring in Computer Science. I am passionate and driven in learning new things and applying concepts that I learn into software solutions, whether if it's a side project or a hackathon.
          </p>
          <p className="hero--section-description about--description" style={{color:'#fff'}}>
          Outside of school and my major, I have a multitude of hobbies and passions. I love listening to music. My favorite genre is rap/hip-hop and my favorite artists are Kanye West, Lupe Fiasco and Lil Wayne. I find solace in night driving, working out and weightlifting, playing video games, and playing basketball. I am an avid sports enthusiast and I greatly enjoy debating NBA topics with my friends. I also love cooking and watching drama and thriller related movies. My two favorite movies of all time are Scarface and Interstellar.
          </p>
        </div>
      </div>
    </section>
  );
}
