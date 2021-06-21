import Skill from "./Skill";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Java",
      text: "大学で2年間。GoFのデザパタ面白い。少しだけServletとJSP",
    },
    {
      name: "Django",
      text: "ここのバックエンドに使用",
    },
    {
      name: "React",
      text: "かつてここのフロントエンドに使用していたり、個人開発で使ったり",
    },
    {
      name: "Next.js",
      text: "クックパッドインターンで使用したり、個人開発で使ったり",
    },
    {
      name: "JavaScript",
      text: "ハッカソンとNAVI TIMEインターンで使用",
    },
    {
      name: "Go",
      text: "CAインターンでAPI書いた(gin,gorm,zap)",
    },
    {
      name: "TypeScript",
      text: "クックパッドインターンで使用したり、個人開発で使ったり",
    },
  ];
  return (
    <div>
      <h1 className="pro-title">Skills</h1>
      <div className="skill-container">
        {skills.map((s) => (
          <Skill key={s.name} {...s} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
