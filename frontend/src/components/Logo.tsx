import { IoTriangle } from "react-icons/io5";
import { Link } from "react-router-dom";

type LogoProps = {
  path: string;
};

const Logo = ({ path }: LogoProps) => {
  return (
    <Link to={path} className="flex items-center gap-2 font-semibold text-2xl">
      <IoTriangle className="text-orange-500 text-4xl" />
      <div>
        <span className="text-orange-600">API</span>
        <span className="text-gray-500">Buildr</span>
      </div>
    </Link>
  );
};

export default Logo;
