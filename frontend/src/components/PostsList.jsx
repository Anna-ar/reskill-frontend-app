// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';


export default function PostsList(){
    const [photos, setPhotos] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/photos'); 
                const data = await response.json();
                setPhotos(data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPhotos();
        fetchPosts();
    }, []);



    return(
        <>
            <div className='h-auto min-h-[50vh] bg-white p-5 px-14'>
                <h1 className='mb-5 text-4xl md:text-5xl font-bold text-black'>Posts List</h1>
                <p className='w-1/2 mb-14 text-gray-500'>{posts[20]?.body}</p>
                <img src={photos[0]?.url} alt={photos[0]?.title} className='w-full h-auto mb-4 mt-4 rounded' />
                <p className='w-3/5 mx-auto text-left m-16'>{posts[0]?.body}
                </p>
                <div className='flex justify-between'>
                    <img 
                            src={photos[1]?.url} 
                            alt={photos[1]?.title} 
                            className='w-1/2 h-auto mr-2 pr-2' 
                    />
                    <img 
                            src={photos[2]?.url} 
                            alt={photos[2]?.title}
                            className='w-1/2 h-auto ml-2 pl-2' 
                    />
                </div>
                <p className='w-3/5 mx-auto text-left m-16'>{posts[1]?.body}
                </p>
            </div>
        </>
    )
}
