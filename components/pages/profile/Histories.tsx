import History from "./History";

const Histories: React.FC = () => {
  const historeis = [
    {
      date: "2013年3月",
      event: "江戸川女子中学校入学",
    },
    {
      date: "2016年3月",
      event: "江戸川女子高等学校入学",
    },
    {
      date: "2019年3月",
      event: "津田塾大学学芸学部情報科学科入学",
    },
    {
      date: "2020年7月",
      event: "技育祭を視聴し同世代のアウトプットに衝撃を受ける",
    },
    {
      date: "2020年9月",
      event: "技育展「はじめてのアウトプット」 登壇",
    },
    {
      date: "2020年10月",
      event: "オータムハッカソン 敢闘賞受賞",
    },
    {
      date: "2020年11月",
      event: "ICPC 参加",
    },
    {
      date: "2021年2月",
      event: "ナビタイムジャパン インターン参加(3日間)",
    },
    {
      date: "2021年3月",
      event: "サイバーエージェント インターン参加(3週間)",
    },
    {
      date: "2021年3月",
      event: "クックパッド インターン参加(5日間)",
    },
  ];
  return (
    <div>
      <h1 className="pro-title">History</h1>
      <div className="history-container">
        {historeis.map((h) => (
          <History key={h.event} {...h} />
        ))}
      </div>
    </div>
  );
};

export default Histories;
