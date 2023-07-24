import { useDispatch, useSelector } from "react-redux";
import Folder from "../components/Folder";
import { deleteMainFolders, getMainFolders } from "../features/mainFolderSlice";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Home = () => {
  const { mainFolders } = useSelector(
    (state) => state.mainFolders
  );
  const dispatch = useDispatch();

  // Getting all the main folders
  useEffect(() => {
    dispatch(getMainFolders());
  }, [dispatch]);

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
    <div className="grid grid-cols-4 gap-5">
      {mainFolders.map((mainFolder) => (
        <Folder
          key={mainFolder.id}
          mainFolder={mainFolder}
          handleDeleteMainFolder={handleDeleteMainFolder}
        ></Folder>
      ))}
    </div>
  );
};

export default Home;
