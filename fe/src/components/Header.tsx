
import { AiOutlineHeart, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="max-w-6xl mx-auto font-bold py-4">
                <div className="grid grid-cols-3 gap-8 items-center">
                    <div>
                        <img src="/public/Frame 168.svg" alt="NhShop" />
                    </div>
                    <nav>
                        <ul className="flex justify-center space-x-5 ">
                            <li>
                                <Link to="/" className="hover:text-green-500">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="hover:text-green-500">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-green-500">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-green-500">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex justify-end space-x-4">
                        <Link to="/auth/login">
                            <AiOutlineUser />
                        </Link>
                        <Link to="/search">
                            <AiOutlineSearch />
                        </Link>
                        <Link to="/wishlist">
                            <AiOutlineHeart />
                        </Link>
                        <Link to="/cart">
                            <IoCartOutline />
                        </Link>
                    </div>
                </div>
            </div>
        </header>



    )

}

export default Header