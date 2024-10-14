
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

export default function ImageCard({ imageUrl, title, author }) {
  return (
    <div className="rounded-lg">
      <img src={imageUrl} alt={title} className="w-full rounded object-cover" />
      <div className="pt-4">
      
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{author}</p>
      </div>
    </div>
  );
}

ImageCard.propTypes = {
  imageUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  author: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
