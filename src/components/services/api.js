import PropTypes from 'prop-types';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '35889681-02ba7716b80ea31f4bc425b89';

export default function fetchImagesWithQuery(searchQuery, page) {
  const response = axios.get(
    `?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}

fetchImagesWithQuery.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
