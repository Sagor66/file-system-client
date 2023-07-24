import { useDispatch, useSelector } from "react-redux";
import CreateFolder from "./components/CreateFolder";
import { useEffect } from "react";
import { getMainFolders } from "./features/mainFolderSlice";

function App() {
  const { isLoading, mainFolders, error } = useSelector(state => state.mainFolders)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMainFolders())
  }, [dispatch])

  console.log({ mainFolders })

  return (
    <div className="container bg-slate-50 mx-auto p-10 shadow-2xl my-10">
      <h1 className="text-3xl font-bold mt-10 mb-20 w-fit border-b-4 border-b-yellow-400 pb-2 mx-auto">Folder System</h1>
      <div>
        <CreateFolder></CreateFolder>
      </div>
    </div>
  );
}

export default App;
