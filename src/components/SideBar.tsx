import { Icon } from "./Index";

function SideBar() {
  return (
    <div>
      <div className="fixed w-1/6 h-screen bg-gray-800 text-white text-center">
        <h1 className="py-8 text-xl font-semibold">SUJUD.CO</h1>
        <div className="sidebar-group text-left">
          <div className=" mb-2 text-slate-400 p-4 px-6 mx-6 rounded-md hover:bg-gray-600/50 flex">
            <Icon nama="Dashboard"></Icon>
            Dashboard
          </div>
          <div className=" mb-2 text-slate-400 p-4 px-6 mx-6 rounded-md hover:bg-gray-600/50 flex">
            <Icon nama="Product"></Icon>
            Product
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
