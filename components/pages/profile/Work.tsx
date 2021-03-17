interface Props {
  title: string;
  img: string;
  text: string;
  techs: string;
  link: string;
}

const Work: React.FC<Props> = (props) => {
  return (
    <div className="work-item">
      <a href={props.link}>{props.title}</a>
      <img className="work-img" src={props.img} />
      <p className="work-text">{props.text}</p>
      <p className="work-tech">使用技術: {props.techs}</p>
    </div>
  );
};

export default Work;
