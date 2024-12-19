// Movie collection array
const movieCollection = [
    { title: 'Inception', genre: 'Sci-Fi', rating: 8.8, releaseYear: 2010 },
    { title: 'The Dark Knight', genre: 'Action', rating: 9.0, releaseYear: 2008 },
    { title: 'Forrest Gump', genre: 'Drama', rating: 8.8, releaseYear: 1994 },
    { title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7, releaseYear: 1999 },
    { title: 'The Godfather', genre: 'Crime', rating: 9.2, releaseYear: 1972 }
  ];
  
  // DOM elements
  const addMovieForm = document.getElementById('add-movie-form');
  const movieTitleInput = document.getElementById('movie-title');
  const movieGenreInput = document.getElementById('movie-genre');
  const movieRatingInput = document.getElementById('movie-rating');
  const movieReleaseYearInput = document.getElementById('movie-release-year');
  const moviesOutput = document.getElementById('movies-output');
  const genreFilterInput = document.getElementById('genre-filter');
  
  // Function to display all movies
  function displayMovies(movies) {
    moviesOutput.innerHTML = ''; // Clear existing movies
    movies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.classList.add('movie-item');
      movieElement.innerHTML = `
        <h3>${movie.title} (${movie.releaseYear})</h3>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Rating:</strong> ${movie.rating}</p>
      `;
      moviesOutput.appendChild(movieElement);
    });
  }
  
  // Function to add a new movie
  addMovieForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newMovie = {
      title: movieTitleInput.value,
      genre: movieGenreInput.value,
      rating: parseFloat(movieRatingInput.value),
      releaseYear: parseInt(movieReleaseYearInput.value)
    };
  
    movieCollection.push(newMovie); // Add to movie collection
    displayMovies(movieCollection); // Re-display movies
    addMovieForm.reset(); // Reset the form
  });
  
  // Function to filter movies by genre
  document.getElementById('filter-btn').addEventListener('click', function() {
    const genreFilter = genreFilterInput.value.toLowerCase();
    const filteredMovies = movieCollection.filter(movie => movie.genre.toLowerCase().includes(genreFilter));
    displayMovies(filteredMovies);
  });
  
  // Initial display of movies
  displayMovies(movieCollection);
  
  // Optional: Add functionality to find the highest-rated movie
  function findHighestRatedMovie() {
    const highestRated = movieCollection.reduce((max, movie) => movie.rating > max.rating ? movie : max);
    console.log(`Highest Rated Movie: ${highestRated.title} (${highestRated.rating})`);
  }
  
  // Call the function to see the highest-rated movie
  findHighestRatedMovie();
  