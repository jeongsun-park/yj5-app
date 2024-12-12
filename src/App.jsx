import { IoIosMenu } from "react-icons/io";
import { CiLogin } from "react-icons/ci";
import { GoSignIn } from "react-icons/go";
function App() {
  return (
    <div className="max-w-sm mx-auto w-full ">
      <div className="w-full flex justify-between">
        <div>
          <IoIosMenu size={28} />
        </div>
        <div className="flex gap-4">
          <p>
            <CiLogin size={28} />
          </p>
          <p>
            <GoSignIn size={28} />
          </p>
        </div>
      </div>
      <h1 className=" font-bold text-gray-900 py-4 text-center border-b border-gray-400">QR Scanner</h1>
    </div>
  );
}

export default App;
