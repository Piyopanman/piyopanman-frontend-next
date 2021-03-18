import marked from "marked";

interface Props {
  date: string;
  content: string;
}

const CategoryContent: React.FC<Props> = (props) => {
  return (
    <div className="category-content">
      <h1 className="category-date">{props.date}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: `${marked(`${props.content}`)}` }}
      ></div>
    </div>
  );
};

export default CategoryContent;
