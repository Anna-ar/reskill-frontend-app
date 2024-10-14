import { Link } from 'react-router-dom';
export default function Header(){
   return(
    <>
    <div>
      <header className='container px-6 py-6 mx-auto lg:flex lg:items-center lg:justify-between'>
        <div className='flex px-6'>
          <img src="/logo.svg" alt="Site Logo" className="w-10 h-10 mr-2" />  
          <h1 className='pt-2'> Site name</h1>
          
        </div>
       
        
        <nav className="flex flex-col items-center space-y-8 lg:flex-row lg:space-y-0 lg:-mx-4">
          <div className='group'>
          <Link to="/post/20" className='lg:hover:text-indigo-400  lg:text-black lg:mx-4' >About us</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100 px-2'></div>
          </div>

          <div className='group'>
          <Link to="/post/15" className='lg:hover:text-indigo-400 lg:text-black lg:mx-4' >Contact us</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100 px-2'></div>
          </div>

          <div className='group'>
            <Link to="/post/10" className='lg:hover:text-indigo-400  lg:text-black lg:mx-4' >Location</Link>
            <div className='mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100 px-2'></div>
          </div>

          <Link to="/" className='bg-black lg:text-white py-2 px-4 rounded lg:hover:bg-indigo-400 hover:text-white transition duration-200 lg:mx-4'>Home</Link>
          </nav>
        
       
      </header>
    </div>
    </>
   ) 

}
