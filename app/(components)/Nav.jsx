import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <Link href={process.env.GITHUB_LINK} target="_blank">
          <p className="text-default-text hover:text-gray-300">
            {process.env.GITHUB_LINK}
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
