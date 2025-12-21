import { FaGoogle, FaGithub } from "react-icons/fa";

interface AuthFormHeadProps {
  title?: string;
}

const AuthFormHead = ({ title }: AuthFormHeadProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">
        {title || "Continue with"}
      </h2>
      <ul className="flex justify-center items-center gap-6 mb-6">
        <li className="h-[3rem] w-[3rem] bg-orange-600 rounded-md text-2xl text-white flex items-center justify-center cursor-pointer hover:bg-orange-700 transition-colors">
          <FaGithub />
        </li>
        <li className="h-[3rem] w-[3rem] bg-orange-600 rounded-md text-2xl text-white flex items-center justify-center cursor-pointer hover:bg-orange-700 transition-colors">
          <FaGoogle />
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <span className="inline-block border-t border-gray-300 w-[100%]"></span>
        <span className="font-semibold text-lg mx-4 text-gray-800">or</span>
        <span className="inline-block border-t border-gray-300 w-[100%]"></span>
      </div>
    </div>
  );
};

export default AuthFormHead;
