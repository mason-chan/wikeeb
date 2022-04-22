import React from "react";
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    componentDidMount() {
        document.querySelector("#nav_hamburger")?.addEventListener("click", () => {
            if (document.querySelector("#nav_hamburger_open")?.classList.contains("hidden")) {
                document.querySelector("#nav_hamburger_open")?.classList.remove("hidden")
                document.querySelector("#nav_hamburger_close")?.classList.add("hidden")
                document.querySelector('#nav_hamburger_menu')?.classList.add("hidden")
            } else {
                document.querySelector("#nav_hamburger_open")?.classList.add("hidden")
                document.querySelector("#nav_hamburger_close")?.classList.remove("hidden")
                document.querySelector('#nav_hamburger_menu')?.classList.remove("hidden")
            }
        })
    }
    render() {
        return (
            <header className="w-full px-8 text-second bg-first">
                <div className="container flex flex-row flex-wrap justify-between py-5 mx-auto lg:flex-row lg:items-center max-w-[100%] ">
                    <div className="relative flex flex-row justify-between md:flex-row">
                        <Link to="/" className="flex items-center mb-0 font-medium text-gray-900 lg:w-auto md:items-center md:justify-center">
                            <div className="self-center text-second text-3xl">
                                <h1>WiKeeb</h1>
                            </div>
                        </Link>
                        <nav className="hidden flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-6 md:border-l md:border-gray-200 md:flex">
                            <Link className="mr-5 px-4 py-2 font-semibold leading-6 text-second bg-transparent rounded-lg hover:bg-second hover:text-first"
                                to="/">
                                Home
                            </Link>
                            <Link className="mr-5 px-4 py-2 font-semibold leading-6 text-second bg-transparent rounded-lg hover:bg-second hover:text-first"
                                to="/introduction">
                                Introduction
                            </Link>
                            <Link className="mr-5 px-4 py-2 font-semibold leading-6 text-second bg-transparent rounded-lg hover:bg-second hover:text-first"
                                to="/intermediate">
                                Intermediate
                            </Link>
                            <Link className="mr-5 px-4 py-2 font-semibold leading-6 text-second bg-transparent rounded-lg hover:bg-second hover:text-first"
                                to="/advanced">
                                Advanced
                            </Link>
                        </nav>
                    </div>
                    <button
                        className="rounded-lg items-center inline-flex justify-end md:hidden focus:outline-none focus:shadow-outline mr-3"
                        id="nav_hamburger"
                    >
                        <svg fill="currentColor" viewBox="0 0 20 20" className="w-9 h-9">
                            <path
                                id="nav_hamburger_open"
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                            <path
                                id="nav_hamburger_close"
                                className="hidden sticky"
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    id="nav_hamburger_menu"
                    className="hidden absolute w-full right-0 md:hidden z-50"
                    style={{
                        backdropFilter: "blur(10px) saturate(180%)",
                        WebkitBackdropFilter: "blur(10px) saturate(180%)",
                        backgroundColor: "rgba(255, 255, 255, 0.55)",
                    }}
                >
                    <nav className="w-full flex flex-wrap items-center text-base text-center md:mb-0 divide-y divide-slate-800">
                        <Link
                            to="/"
                            className="w-full px-4 py-2 font-semibold leading-10 text-first bg-transparent hover:bg-gray-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/introduction"
                            className="w-full px-4 py-2 font-semibold leading-10 text-first bg-transparent hover:bg-gray-200"

                        >
                            Introduction
                        </Link>
                        <Link
                            to="/intermediate"
                            className="w-full px-4 py-2 font-semibold leading-10 text-first bg-transparent hover:bg-gray-200"

                        >
                            Intermediate
                        </Link>
                        <Link
                            to="/advanced"
                            className="w-full px-4 py-2 font-semibold leading-10 text-first bg-transparent hover:bg-gray-200"

                        >
                            Advanced
                        </Link>
                    </nav>
                </div>
            </header>
        )
    };
};

export default Nav;