import { FcFolder } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";

const Folder = ({ mainFolder, handleDeleteMainFolder }) => {
  const { name, id } = mainFolder;
  return (
    <div>
      <div className="flex flex-col items-center border-2 px-6 py-9 rounded-xl hover:bg-slate-100 relative">
        <FcFolder className="text-4xl mb-2"></FcFolder>
        <p className="text-sm font-semibold">{name}</p>
        <button onClick={() => handleDeleteMainFolder(id)} className="absolute top-1 right-1 text-lg text-red-500 bg-slate-100 p-2 rounded-full">
          <AiOutlineDelete></AiOutlineDelete>
        </button>
      </div>
    </div>
  );
};

export default Folder;
