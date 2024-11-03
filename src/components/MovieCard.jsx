import {useState, useEffect} from 'react'

const MovieCard = ({searchInput}) => {
  console.log(searchInput)
  const [movies, setMovies] = useState([])
  const API_KEY = 'fc70bba5'

  const movieTitles = [
    'Inception',
    'The Dark Knight',
    'Interstellar',
    'The Matrix',
    'Gladiator'
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchInput) {
          // Fetch single movie based on search input
          const response = await fetch(`https://www.omdbapi.com/?t=${searchInput}&apikey=${API_KEY}`);
          const data = await response.json();
          setMovies(data.Response === "True" ? [data] : []);
        } else {
          // Fetch all movies from the movieTitles array
          const moviePromises = movieTitles.map(title =>
            fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
              .then(res => res.json())
          );

          const fetchedMovies = await Promise.all(moviePromises);
          setMovies(fetchedMovies.filter(movie => movie.Response === "True"));
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, [searchInput]);


  return (
    <div className="flex gap-4 p-4 mt-20">
      {movies.map((movie, index) => (
        <div key={index} className="flex flex-col w-48 xl:w-64 overflow-hidden gap-4 p-4 sm:p-2">
          <div className="h-80 xl:h-96">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="object-cover rounded-t-lg"
            />
            <div className="flex flex-row justify-between bg-black rounded-b-lg px-2 py-1">
            <p className="text-sm mt-2 text-white">⭐ {movie.imdbRating}/10</p>
            <p className="text-sm mt-2 text-white">{movie.imdbVotes} votes</p>
            </div>

          </div>
          <div className="">
            <h3 className="text-xl font-semibold mb-2">{movie.Title}</h3>
            <p className="text-gray-600">{movie.Genre}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieCard
