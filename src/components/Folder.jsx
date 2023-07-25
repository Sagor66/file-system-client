import { FcFolder } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Folder = ({ folder, handleDeleteFolder, key }) => {
  const { name, id } = folder;

  useEffect(() => {
    console.log({ folder, key })
  }, [folder, key])

  return (
    <div className="relative">
      <button
        onClick={() => handleDeleteFolder(id)}
        className="absolute top-1 right-1 text-lg text-red-500 bg-slate-100 p-2 rounded-full"
      >
        <AiOutlineDelete></AiOutlineDelete>
      </button>
      <Link to={`/nested/${id}`} className="flex flex-col items-center border-2 px-6 py-9 rounded-xl hover:bg-slate-100">
        <FcFolder className="text-4xl mb-2"></FcFolder>
        <p className="text-sm font-semibold">{name}</p>
      </Link>
    </div>
  );
};

export default Folder;
