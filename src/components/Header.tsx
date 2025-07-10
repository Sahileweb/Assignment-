import React from 'react';

const Header: React.FC = () => {
  return (
  <header className="w-full flex justify-between items-center px-4 py-2 bg-white border-b-2 border-gray-200 text-sm">
      {/* Left: Breadcrumb */}
      <div className="flex  items-center gap-4">
        <button
          className="flex items-center justify-center h-6 w-6 p-0 hover:bg-gray-100 rounded"
          onClick={() => console.log('Panel clicked')}
        >
          <img
            src="https://c.animaapp.com/mclmkdkf288FZk/img/panel.svg"
            alt="Panel"
            className="w-6 h-6"
          />
        </button>

        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-black">
                Workspace
              </a>
            </li>
            <li>
              <img
                src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-1.svg"
                alt=">"
                className="w-3 h-3"
              />
            </li>
            <li>
              <a href="#" className="hover:text-black">
                Folder 2
              </a>
            </li>
            <li>
              <img
                src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-1.svg"
                alt=">"
                className="w-3 h-3"
              />
            </li>
            <li className="flex items-center gap-1">
              <a href="#" className="text-black">
                Spreadsheet 3
              </a>
              <button
                className="h-6 w-6 p-0 hover:bg-gray-100 rounded"
                onClick={() => console.log('More clicked')}
              >
                <img
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
                  alt="More"
                  className="w-5 h-5"
                />
              </button>
            </li>
          </ol>
        </nav>
      </div>

      {/* Right: Search + Notification + User */}
      <div className="ml-auto  flex items-center gap-1">
        <div className="flex items-center gap-2 bg-gray-100 rounded-md w-45 h-10 px-2 py-1">
          <img
            src="https://c.animaapp.com/mclmkdkf288FZk/img/group.png"
            alt="Search"
            className="w-4 h-4"
          />
          <input
            className="bg-transparent text-xs  text-neutral-700 outline-none"
            placeholder="Search within sheet"
          />
        </div>

        <button
          className="relative flex items-center justify-center p-2 bg-white rounded-lg hover:bg-gray-100"
          onClick={() => console.log('Alert clicked')}
        >
          <img
            src="https://c.animaapp.com/mclmkdkf288FZk/img/alert.svg"
            alt="Alert"
            className="w-6 h-6"
          />
          <div className="absolute top-0 left-5 w-5 h-5 bg-green-700 text-white text-xs rounded-full border-2 border-white flex items-center justify-center">
            2
          </div>
        </button>

        <button
          className="flex items-center gap-2 px-2 py-1.5 bg-white rounded-lg hover:bg-gray-100"
          onClick={() => console.log('User clicked')}
        >
          <img
            src="https://c.animaapp.com/mclmkdkf288FZk/img/ellipse-1.png"
            alt="John Doe"
            className="w-7 h-7 rounded-full"
          />
          <div className="flex flex-col items-start max-w-[120px]">
            <span className="text-xs text-black">John Doe</span>
            <span className="text-[10px] text-gray-500">
              john.doe@...
            </span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
