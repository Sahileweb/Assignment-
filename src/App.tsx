import Header from './components/Header';
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';
import ColumnNumber from './components/ColumnNumber';
import ColumnNumber2 from './components/ColumnNumber2';

const App = () => {
  return (
      
    <div className="min-h-screen flex flex-col">
       <div className="sticky top-0 z-10 bg-white">
      <Header />
      <Toolbar />
</div>
      {/* Q3 Financial Overview row */}
{/* Combined Row */}
<div className="overflow-x-auto">
<div className="flex   items-center w-354 ml-8 h-8 bg-[#e2e2e2] px-2">
  {/* Q3 Financial Overview */}
  <div className="inline-flex h-5 flex-none w-[167px]   items-center p-1 bg-[#eeeeee] rounded">
    <img className="w-4 h-4" alt="Link" src="https://c.animaapp.com/mclmkdkf288FZk/img/link.svg" />
    <div className="text-xs text-[#545454]">Q3 Financial Overview</div>
  </div>

  <img className="w-4 h-4" alt="Arrow sync" src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-sync.svg" />

  {/* GAP above URL column */}

     <button className="inline-flex flex-none items-center w-50 h-9 mr-0 ml-100 pl-10 py-0 bg-white">
     
      <div className="text-xs text-[#505450]"></div>
    
    </button>
 

  {/* ABC and Answer a Question */}
 
    <button className="inline-flex flex-none items-center w-37 h-8 mr-0 pl-10 py-0 bg-[#d2e0d4]">
      <img className="w-4 h-4" alt="Arrow split" src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg" />
      <div className="text-xs text-[#505450]">ABC</div>
      <img className="w-4 h-4" alt="More" src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg" />
    </button>

    <button className="inline-flex flex-none items-center w-60  h-8 px-2 py-0 bg-[#DCCFFC]">
      <img className="w-4 h-4" alt="Arrow split" src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg" />
      <div className="text-xs text-[#505450]">Answer a Question</div>
      <img className="w-4 h-4" alt="More" src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg" />
    </button>
  

  {/* Push Extract to far right */}
  <button className="inline-flex flex-none w-30 h-8 items-center   px-1 py-0 bg-[#fac2af] ">
    <img className="w-4 h-4" alt="Arrow split" src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg" />
    <div className="text-xs text-[#505450]">Extract</div>
          <img className="w-4 h-4" alt="More" src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg" />
  </button>

   <button className="inline-flex flex-none w-38 h-8 items-center justify-center bg-[#eeeeee]">
  <img
    className="w-4 h-4"
    alt="Add"
    src="https://c.animaapp.com/mclmkdkf288FZk/img/add.svg"
  />
</button>

</div>


      {/* Columns */}
      <div className="flex ">
        <ColumnNumber />
        <ColumnNumber2 />
      </div>

      <Footer />
      </div>
    </div>
    
  );
};

export default App;
