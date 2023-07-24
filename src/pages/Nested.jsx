import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    createChildFolders,
  deleteChildFolders,
  getChildFolders,
} from "../features/childFolderSlice";
import { toast } from "react-hot-toast";
import Folder from "../components/Folder";
import CreateFolder from "../components/CreateFolder";
import { useParams } from "react-router-dom";

const Nested = () => {
  const { childFolders } = useSelector((state) => state.childFolders);
  const [showFolder, setShowFolder] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams()

  // Getting all the main folders
  useEffect(() => {
    dispatch(getChildFolders());
  }, [dispatch]);

  // Create Child Folder
  const handleCreateFolder = (e) => {
    e.preventDefault();
    const name = e.target.value;
    const root_id = id

    const data = { root_id, name };

    dispatch(createChildFolders(data)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Folder Created!");
      } else {
        toast.error("Couldn't create folder");
      }
      dispatch(getChildFolders());
    });
    console.log(`Create folder ${name}`);

    setShowFolder(!showFolder);
  };

  // Delete Main Folder
  const handleDeleteChildFolder = (id) => {
    dispatch(deleteChildFolders(id)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("Folder Deleted!!");
      } else {
        toast.error("Couldn't delete the folder");
      }
      dispatch(getChildFolders());
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
        {childFolders.map((childFolder) => (
          <Folder
            key={childFolder.id}
            folder={childFolder}
            handleDeleteFolder={handleDeleteChildFolder}
          ></Folder>
        ))}
      </div>
    </>
  );
};

export default Nested;
