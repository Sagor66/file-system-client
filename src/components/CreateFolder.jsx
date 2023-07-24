import { useState } from "react";
import { PiFolderNotchPlusFill } from "react-icons/pi";
import { FcFolder } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { createMainFolders, getMainFolders } from "../features/mainFolderSlice";

const CreateFolder = () => {
  const [showFolder, setShowFolder] = useState(false);
  const dispatch = useDispatch();

  const createFolder = () => {
    setShowFolder(!showFolder);
  };

  const handleCreateFolder = (e) => {
    e.preventDefault();
    const name = e.target.value;

    const data = { name }

    dispatch(createMainFolders(data)).then((res) => {
      console.log(res);
      dispatch(getMainFolders())
    });
    console.log(`Create folder ${name}`);

    setShowFolder(!showFolder);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateFolder(e);
    }
  };

  return (
    <div className="flex items-center gap-5">
      <button
        onClick={createFolder}
        className="flex flex-col items-center border-2 px-6 py-9 rounded-xl hover:bg-slate-100"
      >
        <PiFolderNotchPlusFill className="text-4xl text-amber-400"></PiFolderNotchPlusFill>
        <p className="text-sm font-semibold">Create New folder</p>
      </button>
      {showFolder && (
        <>
          <form
            onSubmit={handleCreateFolder}
            className="flex flex-col items-center border-2 px-6 py-7 rounded-xl"
            action=""
          >
            <FcFolder className="text-4xl mb-2"></FcFolder>
            <input
              className="border-2 border-black px-2 py-1 text-xs rounded"
              type="text"
              name="name"
              onKeyPress={handleKeyPress}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default CreateFolder;
