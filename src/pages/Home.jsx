import { useDispatch, useSelector } from "react-redux";
import Folder from "../components/Folder";
import { deleteMainFolders, getMainFolders } from "../features/mainFolderSlice";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Home = () => {
  const { isLoading, mainFolders, error } = useSelector(
    (state) => state.mainFolders
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMainFolders());
  }, [dispatch]);

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
