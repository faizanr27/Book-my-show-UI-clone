import {useState, useEffect} from 'react'
import { Badge, Button } from "@material-tailwind/react";

const Events = ({searchInput}) => {
  console.log(searchInput)
  const [movies, setMovies] = useState([])
  const API_KEY = 'fc70bba5'

  const movieTitles = [
    'Inception',
    'The Dark Knight',
    'Interstellar',
    'The Matrix',
    'Gladiator',
    // 'The Office'
  ];
  const languages = ['Hindi', 'Bengali', 'English', 'Multi Language'];
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        if (searchInput) {
          // Fetch multiple movie based on search input
          setMovies([]);
          const response = await fetch(`https://www.omdbapi.com/?s=${searchInput.trim()}&page=1&apikey=${API_KEY}`);
          const data = await response.json();
          console.log(data)
          if (!(data.Response === "True")) {
            console.error("No movies found or an error occurred");
            setMovies([]);
          } else {
            setMovies(data.Search);
          }

          console.log(movies)
        } else {
          // Fetch all movies from the movieTitles array
          const moviePromises = movieTitles.map(title =>
            fetch(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
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
    <div className="flex flex-wrap gap-4 p-4 mt-0 max-w-7xl mx-auto">
      {languages.map((lang) => (
        <Badge
          key={lang}
          variant="outlined"
          className="cursor-pointer bg-white"
        >
          <Button className="text-red-500 p-2" variant="outlined">{lang}</Button>
        </Badge>
      ))}

      <h2 className="w-full">Now Showing In Kolkata</h2>
      <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/coming-soon-web-collection-202012090733.png"/>
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
            <h3 className="text-black text-xl font-semibold mb-2">{movie.Title}</h3>
            <p className="text-black">{movie.Genre}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Events