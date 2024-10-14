// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import { Link } from 'react-router-dom';

export default function Related() {
    const [photoData, setPhotoData] = useState([]);
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        const fetchPhotoData = async () => {
            try {
                const photoResponse = await fetch('http://localhost:5000/api/photos');
                const photosData = await photoResponse.json();
                setPhotoData(photosData.slice(0, 9));

                const postResponse = await fetch('http://localhost:5000/api/posts');
                const postsData = await postResponse.json();
                setPostData(postsData.slice(0, 9));
            } catch (error) {
                console.error('Error fetching related data:', error);
            }
        };

        fetchPhotoData();
    }, []);

    
    const combinedData = photoData.map((photo) => {
        const correspondingPost = postData.find(post => post.id === photo.id); 

        return {
            id: photo.id,
            imageUrl: photo.url, 
            title: correspondingPost?.title || 'No Title', 
            author: correspondingPost?.id || 'Unknown Author' 
        };
    });

    return (
        <div className="bg-white p-10">
            <h2 className='text-2xl md:text-3xl font-bold text-black'>Related articles or posts</h2>
            <div className='mb-28 mt-7 grid grid-cols-3 gap-5 gap-y-28'>
                {combinedData.length > 0 ? (
                    combinedData.map((item) => (
                        <div key={item.id} className="related-post">
                        <ImageCard imageUrl={item.imageUrl} 
                                   title={<Link to={`/post/${item.id}`} className="text-indigo-400 hover:underline">{item.title}</Link> } 
                                   author={item.author} />
                        </div>
                    ))
                ) : (
                    <p>Loading related articles...</p>
                )}
            </div>
        </div>
    );
}
