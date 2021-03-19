import Work from "./Work";

const Works: React.FC = () => {
  const works = [
    {
      key: 1,
      title: "Tsuda Room Search",
      img: "/profile/TsudaRoomSearch.png",
      text:
        "初めての個人開発。コロナで大学に行けない大学1年生のために作ったLINEBOT。",
      techs: "GAS, JavaScript, LINE Messaging API",
      link:
        "https://hiyoko-coder.hatenablog.com/entry/2020/09/29/200231?_ga=2.101298499.319324300.1608184294-524672757.1606356560",
    },
    {
      key: 2,
      title: "的当て",
      img: "/profile/processing.gif",
      text:
        "大学の授業にて。クリックでボールを発射し的に当たると文字が出現します。",
      techs: "Processing",
      link: "https://github.com/Piyopanman/graphics_works",
    },
    {
      key: 3,
      title: "ひよこ(?)",
      img: "/profile/povray.png",
      text:
        "大学の授業にて。ウサギさん♡ネコちゃん♡キャワ♡みたいな感じだとつまらないよなと思いながら作ったらこうなりました。",
      techs: "POV-ray",
      link: "https://github.com/Piyopanman/graphics_works",
    },
    {
      key: 4,
      title: "Twitter Reputation Search",
      img: "/profile/TwitterReputationSearch.png",
      text:
        "オータムハッカソンにて。形態素分析を用いたネガポジ判定ができます。",
      techs: "JavaScript, Flask, TwitterAPI など",
      link: "https://github.com/y-yana/Twitter-Reputation-Search",
    },
    {
      key: 5,
      title: "日報",
      img: "/profile/daily.png",
      text:
        "個人開発。1日にやったことをまとめておきたくて作りました。2021年3月にNext.jsとTypeScriptで書き換えました。",
      techs: " Django, Next.js, TypeScript (以前はReact)",
      link: "https://piyopanman.com/daily",
    },
  ];
  return (
    <div>
      <h1 className="pro-title">Works</h1>
      <div className="work-container">
        {works.map((w) => (
          <Work {...w} />
        ))}
      </div>
    </div>
  );
};

export default Works;
