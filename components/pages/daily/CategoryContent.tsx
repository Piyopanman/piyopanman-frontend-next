import ReactMarkdown from "react-markdown";

interface Props {
  date: string;
  content: string;
}

const CategoryContent: React.FC<Props> = (props) => {
  return (
    <div className="category-content">
      <h1 className="category-date">{props.date}</h1>
      <ReactMarkdown>{props.content}</ReactMarkdown>
    </div>
  );
};

export default CategoryContent;
