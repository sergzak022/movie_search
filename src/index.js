import { render } from 'react-dom';
import jsonp from 'browser-jsonp';
import { debounce } from 'underscore';

import Container from './components/Container';
import MovieList from './components/MovieList';
import QueryInput from './components/QueryInput';

import config from './config';

module.exports = container => {

  let queryInptChange = query => {
    requestResource(query, response => {
      renderApp( container, response.results );
    });
  };

  let requestResource = ( query, cb ) => {
    jsonp({
        url: `${config.baseUrl}&query=${query}`,
        success: cb
    });
  };

  let renderApp = ( container, movies = [] ) => {
    render(
      <Container>
        <QueryInput
          onQueryChange={debounce(queryInptChange, 400)}
        />
        <MovieList
          movies={movies}
        />
      </Container>,
      container
    );
  };

  renderApp( container );
};
