const ColumnNumber: React.FC = () => {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);

  return (
    <div className="w-9 flex flex-col ">
      {/* Header cell */}
      <div className="flex h-9 items-center  pl-2 bg-[#eeeeee]">
        <img
          src="https://c.animaapp.com/mclmkdkf288FZk/img/number-symbol.svg"
          alt="#"
          className="w-4 h-4"
        />
      </div>

      {/* Numbered cells */}
      {numbers.map((num) => (
        <div key={num} className="relative w-8 h-8 bg-white">
          <div className="absolute top-[5px] left-2 text-xs text-[#757575] text-center leading-5">
            {num}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColumnNumber;
