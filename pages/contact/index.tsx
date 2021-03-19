import Layout from "../../components/Layout";
import { useForm, SubmitHandler } from "react-hook-form";
import postContact from "../../api/postContact";

export type FormData = {
  name: string;
  email: string;
  twitter: string;
  oshi: string;
  content: string;
};

const ContactIndex = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    postContact(data);
    window.alert(data.name + "さん、お問い合わせありがとうございました！");
    reset();
  };

  return (
    <Layout title="お問い合わせ - ぴよぱんまん">
      <div className="contact-container">
        <h1>お問い合わせフォーム</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>お名前（必須）</h2>
          <input
            type="text"
            name="name"
            required={true}
            ref={register}
            placeholder="ぴよぱんまん"
          />
          <br></br>
          <h2>メールアドレス</h2>
          <input
            type="email"
            name="email"
            ref={register}
            placeholder="hoge@gmail.com"
          />{" "}
          <br></br>
          <h2>Twitterアカウント（必須）</h2>
          <input
            type="text"
            name="twitter"
            required={true}
            ref={register}
            placeholder="@hiyoko_coder"
          />
          <br></br>
          <h2>推し（言語、アーティストなど分野問わず）</h2>
          <input type="text" name="oshi" ref={register} placeholder="Java" />
          <br></br>
          <h2>お問い合わせ内容（必須）</h2>
          <textarea
            name="content"
            required={true}
            ref={register}
            placeholder="奢るので焼肉食べにいきませんか？"
          />
          <br></br>
          <input id="submit-btn" type="submit" value="送信！" />
        </form>
      </div>
    </Layout>
  );
};

export default ContactIndex;
