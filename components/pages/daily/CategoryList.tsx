import Link from "next/link";

const CategoryList: React.FC = () => {
  return (
    <div className="category-list">
      <ul>
        <li>
          <Link href="/daily/category/univ">
            <a>大学</a>
          </Link>
        </li>
        <li>
          <Link href="/daily/category/study">
            <a>勉強</a>
          </Link>
        </li>
        <li>
          <Link href="/daily/category/other">
            <a>その他</a>
          </Link>
        </li>
        <li>
          <Link href="/daily/category/first_meet">
            <a>はじめましてだったこと</a>
          </Link>
        </li>
        <li>
          <Link href="/daily/category/wanna_do">
            <a>やりたいこと</a>
          </Link>
        </li>
        <li>
          <Link href="/daily/category/summary">
            <a>1日のまとめ</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryList;
