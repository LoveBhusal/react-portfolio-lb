import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        
        <h2 className="skills--section--heading" style={{color:'#f07900'}}>My Skills</h2>
      </div>
      <div className="skills--section--container">
      {data.skills.map((skill) => (
          <div key={skill.id} className="skills--section--card">
            <div className="skills--section--img">
              <img src={skill.src} alt={skill.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{skill.title}</h3>
              <ul>
                {Array.isArray(skill.description) ? (
                  skill.description.map((desc, descIndex) => (
                    <li key={descIndex} className="skills--section--description">
                      {desc}
                    </li>
                  ))
                ) : (
                  <li className="skills--section--description">{skill.description}</li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
