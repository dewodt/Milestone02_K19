import React, { useState, type Dispatch, type SetStateAction } from "react";
import SearchIcon from "./icons/search-icon";
import CircleCrossIcon from "./icons/circle-cross-icon";

const SearchBar = ({
  value,
  setValue,
  placeholder,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Handler for input focus
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Handler for input blur
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`w-full rounded-full border-[1px] ${isFocused ? "border-custom-orange bg-transparent" : "border-white bg-transparent"
        } flex items-center px-6 lg:px-8 focus:border-custom-orange`}
    >
      <div className="flex w-full items-center justify-between gap-4 py-2 lg:py-3">
        {/* Search Icon */}
        <SearchIcon
          size={24}
          className={`${isFocused||value ? "fill-custom-orange" : "fill-white"
            } w-6 h-6 lg:h-7 lg:w-7`}
        />
        {/* Input field */}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full border-none bg-transparent text-white outline-none text-base lg:text-xl"
          placeholder={placeholder}
        />
        {/* Close Icon */}
        {value && (
          <button onClick={() => setValue("")} className="m-0 h-fit w-fit p-0">
            <CircleCrossIcon size={24} className="fill-custom-orange w-5 h-5 lg:h-6 lg:w-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
