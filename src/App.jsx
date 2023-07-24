import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container bg-slate-50 mx-auto p-10 shadow-2xl my-10">
      <h1 className="text-3xl font-bold mt-10 mb-20 w-fit border-b-4 border-b-yellow-400 pb-2 mx-auto">
        Folder System
      </h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
