import "./SkillsSection.css";
const SkillsSection = () => {
  const skillsImages: any = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      heading: "JavaScript",
      usage: "Web Development",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
      heading: "TypeScript",
      usage: "Web Development",
    },
    {
      img: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
      heading: "React",
      usage: "Client Side Programming",
    },
    {
      img: "https://asset.brandfetch.io/idYHMwWF60/idGhyEM0wZ.png",
      heading: "MongoDB",
      usage: "NoSQL Database",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",
      heading: "NodeJS",
      usage: "Server Side Programming",
    },
    {
      img: "https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png",
      heading: "MySQL",
      usage: "SQL Database",
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
      heading: "Python",
      usage: "Server Side Programming, Data Science",
    },
    {
      img: "https://global.discourse-cdn.com/auth0/optimized/3X/9/c/9cc1ef8534a9d54c982759ede0f686630974ad79_2_1024x919.png",
      heading: "Django",
      usage: "Server Side Programming",
    },
  ];
  return (
    <>
      <section className="skills-section">
        <h1 id="skills-h1">Skills</h1>
        <div className="skills-section-container">
          <div className="skills">
            {skillsImages.map((skill: any) => {
              return (
                <div className="box">
                  <div className="imgBx">
                    <img src={skill.img} alt="STAR-WARS-THE-FORCE" />
                  </div>
                  <div className="content">
                    <h2>
                      {skill.heading}
                      <br />
                      <span>{skill.usage}</span>
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default SkillsSection;
