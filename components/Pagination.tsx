import React from 'react';

const Pagination = ({ numberPage, currentNumberPage, setCurrentNumberPage }: { numberPage: number, currentNumberPage: number, setCurrentNumberPage: React.Dispatch<React.SetStateAction<number>> }) => {
    // Create an array of numbers from 1 to numberPage
    const numbers = Array.from({ length: numberPage }, (_, index) => index + 1);

    return (
        // Only display the pagination if there is more than one page
        numberPage > 1 && (
            <>
                <button
                    onClick={() => currentNumberPage > 1 && setCurrentNumberPage(currentNumberPage - 1)}
                    aria-label="Previous Button"
                    className={`px-2 hover:scale-125 hover:drop-shadow-[0px_0px_4px_#FFFFFF] transition duration-300 ${currentNumberPage <= 1 && "cursor-not-allowed"}`}
                    disabled={currentNumberPage <= 1} // Disable the button when at the first page
                >
                    <div className="w-full h-full font-inter font-semibold text-base lg:text-xl flex items-center justify-center">
                        <p className="text-white">
                            &lt; {/* Display the less-than symbol */}
                        </p>
                    </div>
                </button>
                {numbers.map((number: number) => (
                    <button
                        key={number}
                        onClick={() => setCurrentNumberPage(number)} // Set the currentNumberPage to the clicked number
                        aria-label={`Page-${number}`}
                        className={`px-2 ${currentNumberPage===number&&"drop-shadow-[0px_0px_2px_#FFFFFF] scale-105"} hover:scale-125 hover:drop-shadow-[0px_0px_4px_#FFFFFF] transition duration-300 `}
                    >
                        <div className="w-full h-full font-poppins text-base lg:text-xl flex items-center justify-center">
                            <p className="text-white ">
                                {number} {/* Display the current number */}
                            </p>
                        </div>
                    </button>
                ))}
                <button
                    onClick={() => currentNumberPage < numberPage && setCurrentNumberPage(currentNumberPage + 1)}
                    aria-label="Next Button"
                    className={`px-2 hover:scale-125 hover:drop-shadow-[0px_0px_4px_#FFFFFF] transition duration-300 ${currentNumberPage >= numberPage && "cursor-not-allowed"}`}
                    disabled={currentNumberPage >= numberPage} // Disable the button when at the last page
                >
                    <div className="w-full h-full font-inter font-semibold text-base lg:text-xl flex items-center justify-center">
                        <p className="text-white">
                            &gt; {/* Display the greater-than symbol */}
                        </p>
                    </div>
                </button>
            </>
        )
    );
};

export default Pagination;
