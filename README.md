# :baby_chick: ぴよぱんまんのサイト :baby_chick:

[ぴよぱんまんどっとこむ](piyopanman.com)を[JavaScript + React](https://github.com/Piyopanman/piyopanman-daily-frontend)から TypeScript + Next.js で書き換えました！

## 記事

近いうちに書く（宣言して逃げ道を塞いでいくスタイル）

## フロントの使用技術

- **TypeScript**
- React
- **Next.js**
- vercel
- python anywhere

## フロントエンドの構成

- pages/
  - contact/
    - お問い合わせのページです。推しを記入する欄があるのでよかったらあなたの推しを教えてください :kissing_heart:
  - daily/
    - 日報一覧ページです
    - [id].tsx
      - 日報詳細画面です
    - category/
      - カテゴリ別の一覧ページです
  - profile/
    - プロフィールのページです
- api/
  - お問い合わせを送信する時に使われる api
- components
  - 日報ページで使うコンポーネントとプロフィールページで使うコンポーネントで分けてあります
- public
  - 色々画像が置いてあります
- styles
  - sass ファイルが置いてあります

## :star2: 推しポイント :star2:

- **ISR しているので読み込みがめちゃくちゃ早く、UX が良い！！！！**
  - これは js + react 時代にはなかった新しく出来た推しポイント！
  - js + react の時と比べてとっても早くなりました！感動！:heart_eyes_cat:
  - ISR (Incremental Static Regeneration)という手法を使って、アクセスされた時に静的なページを返すだけにしてあるのでレスポンスがとっても早いです！
  - SSG だと build した時にしか静的なページを生成できず、django の方で新しい日報を追加しても表示されません。なので一定期間ごとにデータを再取得＆ページの再レンダリングをしてくれる ISR を使用する必要があります(最初 SSG してたから新しい日報追加しても表示されなくてアレッ？ってなってた)
- カテゴリ別にみることができる！
  - 元々日報を置いていた既存のサービスではカテゴリ別にみるときに不便で、それを改善した自分が使いやすい物を作りたいというモチベーションで作り始めたサイトなのでそれを無事実現できました。
  - 自分で作って自分で使ってみてわかったけどカテゴリ別にみられるのとても良い！寝る前のベッドの中とかスキマ時間に勉強したこととか初めて知ったことを見て復習になるし、「あれ、これってなんだっけ？」ってなったらすぐに調べられる。画期的！！！！
- 1 日の評価がひと目でわかる！

  - perfect ならはなまる、good なら二重マル、soso なら三角、bad ならバツのひよこちゃんを日ごとの一覧ページで表示させるようにしました。
  - なので一覧ページ見たときに「あ、最近は二重マルとか
    はなまるのひよこちゃんが少ないぞ。頑張らないと！」とか「最近はなまるのひよこちゃん多くていい感じ！このテンション保ってこ〜〜〜！」とかモチベの維持になります。

- マークダウンで書ける！
  - Django のライブラリ markdownx を使ったので、admin ページで日報書いているときにプレビューが見られるのですごい便利です。
  - js + react で書いていたときは marked ってライブラリを使って `dangerouslySetInnerHTML`属性に `__html`プロパティを持つ`Object`を渡して...って感じで書いていてちょっとコードが見づらかったんですが、`react-markdown`っていうライブラリを見つけたので`marked`の代わりに使ってスッキリ書くことができるようになりました。
    - marked 使ってた時 ↓
    - `<div dangerouslySetInnerHTML={{ __html: `${marked(`${detail.univ}`)}` }} className="detail-content"></div>`
    - react-markdown 使うようにしたら ↓
    - `<ReactMarkdown className="detail-content">{daily.univ}</ReactMarkdown>`

## JS + React から　 TS + Next.js で書き換えてみての感想

- ISR してレスポンスがとっても早くなって嬉しい
- pages 配下におくと勝手にルーティングしてくれてありがたい
- ダイナミックルーティングもいい感じ
- 型がついている安心感
