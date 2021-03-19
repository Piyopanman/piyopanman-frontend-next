import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Link href="/">
          <a>Top</a>
        </Link>
      </h1>
      <ul>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <Link href="/daily">
            <a>Daily</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
