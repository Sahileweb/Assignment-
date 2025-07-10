import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <div className="flex items-center gap-2 px-2 py-1.5 w-full bg-white border-b border-[#eeeeee]">
      {/* Left: Toolbar Button */}
      <button
        onClick={() => console.log('Toolbar clicked')}
        className="h-9 flex items-center gap-1 px-2 bg-white rounded hover:bg-gray-100"
      >
        <span className="text-sm text-black">Tool bar</span>
        <img
          src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-double.svg"
          alt="Chevron"
          className="w-4 h-4"
        />
      </button>

      <div className="w-px h-6 bg-[#eeeeee]"></div>

      {/* Middle: Action Buttons */}
      <div className="flex flex-1 gap-1">
        {[
          {
            label: 'Hide fields',
            icon: 'https://c.animaapp.com/mclmkdkf288FZk/img/eye.svg',
          },
          {
            label: 'Sort',
            icon: 'https://c.animaapp.com/mclmkdkf288FZk/img/arrow-sort.svg',
          },
          {
            label: 'Filter',
            icon: 'https://c.animaapp.com/mclmkdkf288FZk/img/filter.svg',
          },
          {
            label: 'Cell view',
            icon: 'https://c.animaapp.com/mclmkdkf288FZk/img/arrow-autofit.svg',
          },
        ].map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => console.log(`${label} clicked`)}
            className="h-9 px-4 flex items-center gap-1 bg-white rounded-md hover:bg-gray-100"
          >
            <img src={icon} alt={label} className="w-5 h-5" />
            <span className="text-sm text-black">{label}</span>
          </button>
        ))}
      </div>

      {/* Right: Import/Export/Share & New Action */}
      <div className="flex items-center gap-2">
        <div className="flex gap-2">
          {[
            {
              label: 'Import',
              icon: 'https://c.animaapp.com/mclmkdkf288FZk/img/arrow-download.svg',
            },
            {
              label: 'Export',
              icon: 'https://c.animaapp.com/mclmkdkf288FZk/img/arrow-upload.svg',
            },
            {
              label: 'Share',
              icon: 'https://c.animaapp.com/mclmkdkf288FZk/img/share.svg',
            },
          ].map(({ label, icon }) => (
            <button
              key={label}
              onClick={() => console.log(`${label} clicked`)}
              className="h-9 px-4 flex items-center gap-1 bg-white rounded-md border border-[#eeeeee] shadow-sm hover:bg-gray-100"
            >
              <img src={icon} alt={label} className="w-5 h-5" />
              <span className="text-sm text-gray-700">{label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => console.log('New Action clicked')}
          className="h-9 px-6 flex items-center gap-1 bg-[#4b6a4f] rounded-md text-white hover:bg-opacity-90"
        >
          <img
            src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
            alt="New Action"
            className="w-5 h-5"
          />
          <span className="text-sm">New Action</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
