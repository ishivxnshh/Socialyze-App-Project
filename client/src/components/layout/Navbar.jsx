import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-6 py-2 bg-slate-900 text-pink-800 font-sans'>
      <Link to="/" className='w-32 h-12 flex items-center'>
        <img className='border border-solid border-black-800 hover:border-gray-300 rounded-xl' src={logo} alt="logo" />
      </Link>

      <div className='space-x-6 text-lg'>
        {/* <a href="#about" className="hover:text-black hidden bg-pink-300 p-1 px-2 md:inline border border-solid border-pink-800 hover:border-black rounded-xl" >About</a>
        <a href="#contact" className="hover:text-black hidden bg-pink-300 p-1 px-2 md:inline  border border-solid border-pink-800 hover:border-black rounded-xl" >Contact</a> */}
        <Link to="https://github.com/ishivxnshh/ShitBolo-Project" target="_blank" rel="noreferrer" className="hover:text-black bg-pink-300 p-1 px-2 border border-solid border-pink-800 hover:border-black rounded-xl" >Github</Link>
      </div>

    </div>
  )
}

export default Navbar