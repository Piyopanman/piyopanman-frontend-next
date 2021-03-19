interface Props {
  date: string;
  event: string;
}

const History: React.FC<Props> = (props) => {
  return (
    <div>
      <p className="history-date">{props.date}</p>
      <p className="history-event">{props.event}</p>
    </div>
  );
};

export default History;
