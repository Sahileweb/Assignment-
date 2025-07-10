const Footer = () => {
  return (
    <footer className="flex items-center gap-6 pl-8 pr-4 pt-1 pb-0 relative self-stretch w-full flex-[0_0_auto] z-0 bg-white border-t border-solid border-[#eeeeee]">
      <div dir="ltr" data-orientation="horizontal" className="items-start inline-flex relative flex-[0_0_auto]">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="inline-flex items-center justify-center text-muted-foreground bg-transparent p-0 h-auto"
          tabIndex={0}
          data-orientation="horizontal"
        >
          <button
            type="button"
            role="tab"
            aria-selected="true"
            aria-controls="radix-:r0:-content-all-orders"
            data-state="active"
            id="radix-:r0:-trigger-all-orders"
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:shadow gap-2 px-4 py-2.5 rounded-none bg-[#e8f0e9] border-t-2 border-solid border-[#4b6a4f] font-paragraph-16-m-semi-bold-16-24 text-[#3e5741]"
            tabIndex={0}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            All Orders
          </button>

          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r0:-content-pending"
            data-state="inactive"
            id="radix-:r0:-trigger-pending"
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 px-4 py-2.5 rounded-none border-t-0 text-[#757575]"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Pending
          </button>

          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r0:-content-reviewed"
            data-state="inactive"
            id="radix-:r0:-trigger-reviewed"
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 px-4 py-2.5 rounded-none border-t-0 text-[#757575]"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Reviewed
          </button>

          <button
            type="button"
            role="tab"
            aria-selected="false"
            aria-controls="radix-:r0:-content-arrived"
            data-state="inactive"
            id="radix-:r0:-trigger-arrived"
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2 px-4 py-2.5 rounded-none border-t-0 text-[#757575]"
            tabIndex={-1}
            data-orientation="horizontal"
            data-radix-collection-item=""
          >
            Arrived
          </button>

          <button
            className="gap-1 px-1 py-2 self-stretch inline-flex items-center justify-center relative flex-[0_0_auto]"
            aria-label="Add new tab"
          >
            <div className="inline-flex items-center gap-2 p-1 relative flex-[0_0_auto] bg-white rounded">
              <div className="relative w-5 h-5">
                <img
                  className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                  alt="Add tab"
                  src="https://c.animaapp.com/mclmkdkf288FZk/img/group-1.png"
                />
              </div>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

