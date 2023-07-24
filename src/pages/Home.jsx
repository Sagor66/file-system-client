import { useDispatch, useSelector } from "react-redux";
import Folder from "../components/Folder";
import {
  createMainFolders,
  deleteMainFolders,
  getMainFolders,
} from "../features/mainFolderSlice";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import CreateFolder from "../components/CreateFolder";

const Home = () => {
  const { mainFolders } = useSelector((state) => state.mainFolders);
  const [showFolder, setShowFolder] = useState(false);
  const dispatch = useDispatch();

  // Getting all the main folders
  useEffect(() => {
    dispatch(getMainFolders());
  }, [dispatch]);

  // Create new main folder
  const handleCreateFolder = (e) => {
    e.preventDefault();
    const name = e.target.value;

    const data = { name };

    dispatch(createMainFolders(data)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Folder Created!");
      } else {
        toast.error("Couldn't create folder");
      }
      dispatch(getMainFolders());
    });
    console.log(`Create folder ${name}`);

    setShowFolder(!showFolder);
  };

  // Delete Main Folder
  const handleDeleteMainFolder = (id) => {
    dispatch(deleteMainFolders(id)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Folder Deleted!!");
      } else {
        toast.error("Couldn't delete the folder");
      }
      dispatch(getMainFolders());
    });
  };

  return (
    <>
      <CreateFolder
        showFolder={showFolder}
        setShowFolder={setShowFolder}
        handleCreateFolder={handleCreateFolder}
      ></CreateFolder>
      <hr className="my-12 border-2 border-yellow-400" />
      <div className="grid grid-cols-4 gap-5">
        {mainFolders.map((mainFolder) => (
          <Folder
            key={mainFolder.id}
            folder={mainFolder}
            handleDeleteFolder={handleDeleteMainFolder}
          ></Folder>
        ))}
      </div>
    </>
  );
};

export default Home;
