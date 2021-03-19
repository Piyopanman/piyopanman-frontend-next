import Layout from "../../components/Layout";
import Histories from "../../components/pages/profile/Histories";
import Skills from "../../components/pages/profile/Skills";
import Works from "../../components/pages/profile/Works";

const ProfileIndex: React.FC = () => {
  return (
    <Layout
      title="プロフィール - ぴよぱんまん"
      twitter="ぴよぱんまんのプロフィールページ"
    >
      <div className="profile">
        <h1 className="title">ぴよぱんまんのプロフィール</h1>
        <img src="/hiyoko.png" />
        <p>最終更新日：2021年3月19日</p>
        <Histories />
        <Skills />
        <Works />
      </div>
    </Layout>
  );
};

export default ProfileIndex;
