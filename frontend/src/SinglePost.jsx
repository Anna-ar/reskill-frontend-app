import { useParams } from 'react-router-dom';   
import { useEffect, useState } from 'react'; 
import axios from 'axios';   


export default function SinglePost(){

        const { id } = useParams();
        const [post, setPost] = useState(null);
        const [photo, setPhoto] = useState(null);
       
        useEffect(() => {
          
            axios.get(`http://localhost:5000/api/post/${id}`)
            .then(response => setPost(response.data))
            .catch(error => console.error('Error fetching post:', error));
      
          
            axios.get(`http://localhost:5000/api/photos`) 
            .then(response => {
                const relatedPhoto = response.data.find(photo => photo.id === parseInt(id));
                setPhoto(relatedPhoto);
            })
            .catch(error => console.error('Error fetching photos:', error));
    }, [id]);

          if (!post || !photo) return <div>Loading...</div>;

    return(<>
        <div className='single-post grid grid-cols-1 md:grid-cols-2 gap-4 px-14 mt-20 mb-16 w-full'>
            <div className='post-text pb-10 md:pr-14'>
                <h1 className='text-5xl font-bold mb-3 pb-4'>Single Post</h1>
                <p className='mb-4 text-gray-500'>{post.title}</p>
                <p className='text-lg'>{post.body}{post.body}{post.body}</p>
            </div>
            <div className='post-image pb-20 md:pl-14'>
                <img src={photo.url} alt={photo.title} className='w-full h-auto' />
            </div>
        </div>
    </>)
    
}

