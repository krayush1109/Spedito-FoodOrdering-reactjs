import React from 'react'

import { Link, NavLink } from 'react-router-dom';

const temp = () => {
    return (
        <nav className="navbar" >
            <div className="navbar-container">
                <div className="navbar-logo">MyApp</div>
                <ul className='navbar-links'>
                    {/* <li>
                        <NavLink to='/createUsername' className={`${(navData)=> navData.isActive ? "active-link": "bg-black"} navbar-link`}>Create</NavLink> 
                    </li> */}

                    <NavLink
                        to='/'
                        className={(navData) =>
                            `${navData.isActive ? 'active-link' : ''} navbar-link`
                            // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                        }
                    >
                        Home
                    </NavLink>

                    <li>
                        <NavLink
                            to='/about'
                            className={(navData) =>
                                `${navData.isActive ? 'active-link' : ''} navbar-link`
                            }>About</NavLink>
                    </li>
                </ul>
                <ul className="navbar-links">
                    <li>
                        <NavLink
                            to="/gallery"
                            className={(navData) =>
                                `${navData.isActive ? 'active-link' : ''} navbar-link`
                            }>Gallery</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className='nav-top'>
                <div className='w-full h-16 mt-5 text-white font-bold bg-zinc-800 px-[--nav-px] '>
                    <div className='flex justify-between items-center w-full h-full'>
                        <div className='navt-t-left'>
                            <NavLink
                                to='/'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/unknown/1'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Order Online
                            </NavLink>
                            <NavLink
                                to='/unknown/2'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Your Whishlist
                            </NavLink>
                        </div>
                        <div className='navt-t-center h-60 w-60 translate-y-7'>
                            <div className='h-full w-full  border-8 rounded-full  border-gray-100 shadow-md ' >
                                <div className='h-full w-full bg-lime-500  rounded-full flex justify-center items-center  ' >
                                    <img src="/images/navbar/logo.png" alt="NA" srcset="" />
                                </div>
                            </div>
                        </div>
                        <div className='navt-t-right'>
                            <NavLink
                                to='/unknown/3'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Our Menu
                            </NavLink>
                            <NavLink
                                to='/unknown/4'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Latest News
                            </NavLink>
                            <NavLink
                                to='/unknown/5'
                                className={(navData) =>
                                    `${navData.isActive ? 'active-link' : ''} navbar-link`
                                    // `${navData.isActive ? console.log(navData) : console.log(navData)} navbar-link`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className='nav-bottom bg-red-500 h-28 w-full font-semibold'>
                <div className='px-[--nav-px]'>
                    <div className="nav-b-lhs"></div>
                    <div className="nav-b-rhs"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar