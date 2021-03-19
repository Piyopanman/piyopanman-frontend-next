import Skill from "./Skill";

const Skills: React.FC = () => {
  const skills = [
    {
      name: "Java",
      text: "大学で2年間。GoFのデザパタ面白い",
    },
    {
      name: "Django",
      text: "ここのバックエンドに使用",
    },
    {
      name: "React",
      text: "かつてここのフロントエンドに使用していた",
    },
    {
      name: "Next.js",
      text: "ここのフロントエンドに使用",
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
      text: "ここのフロントエンドに使用",
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
