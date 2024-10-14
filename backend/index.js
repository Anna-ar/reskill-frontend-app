import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
});

app.get('/api/photos', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch photos', error });
    }
});

app.get('/api/post/:id', async (req, res) => {
    const postId = req.params.id;
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (response.data) {
            res.json(response.data);
        } else {
            res.status(404).json({ message: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching the post', error });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
