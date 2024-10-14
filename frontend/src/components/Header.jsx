import { Link } from 'react-router-dom';
export default function Header(){
   return(
    <>
    <div>
      <header className='header h-[12vh] flex flex-row justify-between items-center p-5 px-14'>
        <h1>Site name</h1>

        <div className='flex space-x-4'>
          <div className='group'>
          <Link to="/post/20" className='hover:text-indigo-400' >About us</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100 px-2'></div>
          </div>

          <div className='group'>
          <Link to="/post/15" className='hover:text-indigo-400' >Contact us</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100 px-2'></div>
          </div>

          <div className='group'>
            <Link to="/post/10" className='hover:text-indigo-400' >Location</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100 px-2'></div>
          </div>

          <Link to="/" className='bg-black text-white py-2 px-4 rounded hover:bg-indigo-400 hover:text-white transition duration-200'>Home</Link>
        </div>
      </header>
    </div>
    </>
   ) 

}