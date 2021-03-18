import Layout from "../../components/Layout";
import Histories from "../../components/pages/profile/Histories";
import Skills from "../../components/pages/profile/Skills";
import Works from "../../components/pages/profile/Works";

const ProfileIndex: React.FC = () => {
  return (
    <Layout title="プロフィール - ぴよぱんまん">
      <h1>プロフィール</h1>
      <Histories />
      <Skills />
      <Works />
    </Layout>
  );
};

export default ProfileIndex;
