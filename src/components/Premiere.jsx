import {useState, useEffect} from 'react'

const Premiere = () => {
  const [movies, setMovies] = useState([])
  const API_KEY = 'fc70bba5'

  const movieTitles = [
    'John Wick',
    'Spider Man',
    'Big Hero 6',
    'Stranger Things',
    'Dark'
  ];

  useEffect(() => {
    const fetchMovies = async () => {
      try {
          const moviePromises = movieTitles.map(title =>
            fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
              .then(res => res.json())
          );

          const fetchedMovies = await Promise.all(moviePromises);
          setMovies(fetchedMovies.filter(movie => movie.Response === "True"));
        }
        catch (error) {
        console.error('Error fetching movies:', error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div className="mt-20 bg-[#2b3148] pb-8">
      <div className="max-w-7xl mx-auto self-center">
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"/>
      </div>
      <div className="flex flex-wrap flex-row max-w-7xl mx-auto">
      {movies.map((movie, index) => (
        <div key={index} className="flex flex-col 2xl:w-56 xl:w-48 lg:w-44 md:w-36 sm:w-28 xs:w-36 w-32 mx-auto overflow-hidden">
          <div className="2xl:h-96 lg:h-80 md:h-64">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="object-cover rounded-t-lg"
            />
            <div className="flex flex-row justify-between bg-black rounded-b-lg px-2 py-1">
            <p className="text-sm mt-2 text-white">⭐ {movie.imdbRating}/10</p>
            {/* <p className="text-sm mt-2 text-white">{movie.imdbVotes} votes</p> */}
            </div>

          </div>
          <div className="">
            <h3 className="text-white text-xl font-semibold mb-2">{movie.Title}</h3>
            <p className="text-white">{movie.Genre}</p>
          </div>
        </div>
      ))}
      </div>

    </div>
  )
}

export default Premiere
