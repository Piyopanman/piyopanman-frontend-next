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
      text: "ここのフロントエンドに使用",
    },
    {
      name: "Next.js",
      text: "ここのフロントエンドに使用しようとしている",
    },
    {
      name: "JavaScript",
      text: "ハッカソンと短期インターンで使用",
    },
    {
      name: "Go",
      text: "CAのインターンでAPI書いた(gin,gorm,zap)",
    },
    {
      name: "TypeScript",
      text: "ここのフロントエンドに使用しようとしている",
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
