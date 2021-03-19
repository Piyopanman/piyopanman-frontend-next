import Link from "next/link";

interface Props {
  id: number;
  date: string;
  evaluation: string;
}

const DailyContent: React.FC<Props> = (props) => {
  let eva: string;
  if (props.evaluation === "perfect") {
    eva = "/daily/hiyoko_perfect.png";
  } else if (props.evaluation === "good") {
    eva = "/daily/hiyoko_good.png";
  } else if (props.evaluation === "soso") {
    eva = "/daily/hiyoko_soso.png";
  } else {
    eva = "/daily/hiyoko_bad.png";
  }

  return (
    <div className="daily-content">
      <Link href={`daily/${props.id}`}>
        <a className="date">{props.date}</a>
      </Link>
      <Link href={`daily/${props.id}`}>
        <a>
          <img src={eva} className="evaluation" />
        </a>
      </Link>
    </div>
  );
};

export default DailyContent;
