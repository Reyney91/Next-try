import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between p-7 bg-gray-800">
      <span>MyProject</span>
      <nav>
        <Link className="no-underline text-red-600 hover:underline" href={"/"}>
          Main
        </Link>
        <Link
          className="no-underline text-red-600 hover:underline ml-5"
          href={"/about"}
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;

