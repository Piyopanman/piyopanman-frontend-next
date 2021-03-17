interface Props {
  name: string;
  text: string;
}

const Skill: React.FC<Props> = (props) => {
  return (
    <div className="skill-item">
      <h1>{props.name}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Skill;
