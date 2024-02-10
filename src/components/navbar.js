import React, {useState} from "react";

function Navbar() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <header
            className="flex flex-wrap sm:justify-start bg-white sm:flex-nowrap z-50 w-full text-md py-5 sticky top-0">
            <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center justify-between">
                    <a className="flex-none text-xl font-semibold">Patryk Antonik</a>
                    <div className="sm:hidden">
                        <button
                            type="button"
                            className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
                            onClick={handleNavCollapse}
                            aria-controls="navbar-with-collapse"
                            aria-expanded={!isNavCollapsed}
                        >
                            <svg className={`${isNavCollapsed ? 'block' : 'hidden'} flex-shrink-0 w-5 h-5`}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6"/>
                                <line x1="3" y1="12" x2="21" y2="12"/>
                                <line x1="3" y1="18" x2="21" y2="18"/>
                            </svg>
                            <svg className={`${isNavCollapsed ? 'hidden' : 'block'} flex-shrink-0 w-5 h-5`}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round">
                                <path d="M18 6L6 18"/>
                                <path d="M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-with-collapse" className={`${isNavCollapsed ? 'hidden' : ''} basis-full grow sm:block`}>
                    <div
                        className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5"
                    >
                        <a className="font-semibold text-black hover:text-gray-400"
                           href="#" aria-current="page">Home</a>
                        <a className="font-semibold text-black hover:text-gray-400"
                           href="#about">About</a>
                        <a className="font-semibold text-black hover:text-gray-400"
                           href="#projects">Projects</a>
                        <a className="font-semibold text-black hover:text-gray-400"
                           href="#contact">Contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
