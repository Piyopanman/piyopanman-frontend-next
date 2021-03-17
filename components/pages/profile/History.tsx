interface Props {
  date: string;
  event: string;
}

const History: React.FC<Props> = (props) => {
  return (
    <div>
      <div className="history-date">{props.date}</div>
      <div className="history-event">{props.event}</div>
    </div>
  );
};

export default History;
