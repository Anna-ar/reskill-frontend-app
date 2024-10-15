
export default function Footer(){
    return(
        <>
        <hr className="border-gray-300 w-full"></hr>
        <footer className="relative bg-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-2xl font-semibold text-blueGray-700 pt-1">Site Name</h4>          
            <div className="flex mt-6 justify-center lg:justify-start lg:mb-0 mb-14">
              <button onClick={() => window.location.href = 'https://www.facebook.com'} className="h-10 w-10 flex items-center justify-center rounded-full  mr-4 mt-16">
                <img src="/images/fb.png" alt="fb logo" className="w-10 h-10" />
              </button>
              <button onClick={() => window.location.href = 'https://www.linkedin.com'} className="h-10 w-10 flex items-center justify-center rounded-full  mr-4 mt-16">
                <img src="/images/linkedin.png" alt="Description" className="w-10 h-10" />
              </button>
              <button onClick={() => window.location.href = 'https://www.youtube.com'} className="h-10 w-10 flex items-center justify-center rounded-full  mr-4 mt-16">
                <img src="/images/youtube.png" alt="Description" className="w-10 h-10" />
              </button>
              <button onClick={() => window.location.href = 'https://www.instagram.com'} className=" h-10 w-10 flex items-center justify-center rounded-full mr-4 mt-16">
                <img src="/images/insta.png" alt="Description" className="w-10 h-10" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-sm font-semibold mb-2 pl-2 pb-2">Topic</span>
                <ul className="list-unstyled px-2">
                  <li><a className="footertopic block text-sm" href="/post/1">Post 1</a></li>
                  <li><a className="footertopic block text-sm" href="/post/2">Post 2</a></li>
                  <li><a className="footertopic block text-sm" href="/post/3">Post 3</a></li>
                  <li><a className="footertopic block text-sm" href="/post/4">Post 4</a></li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase  text-sm font-semibold mb-2 pl-2 pb-2">Topic</span>
                <ul className="list-unstyled px-2">
                  <li><a className="footertopic block text-sm" href="/post/5">Post 5</a></li>
                  <li><a className="footertopic block text-sm" href="/post/6">Post 6</a></li>
                  <li><a className="footertopic block text-sm" href="/post/7">Post 7</a></li>
                  <li><a className="footertopic block text-sm" href="/post/8">Post 8</a></li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-sm font-semibold mb-2 pl-2 pb-2">Topic</span>
                <ul className="list-unstyled px-2">
                  <li><a className="footertopic block text-sm" href="/post/9">Post 9</a></li>
                  <li><a className="footertopic block text-sm" href="/post/10">Post 10</a></li>
                  <li><a className="footertopic block text-sm" href="/post/11">Post 11</a></li>
                  <li><a className="footertopic block text-sm" href="/post/12">Post 12</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>   
      </div>
    </footer>
        </>
    )
}