// import { API_KEY } from './config';
const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

const API_URL = "http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/ncs"
const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
  const movies = results.map(
    ({
      _id,
      title,
      poster,
      // backdrop_path,
      // vote_average,
      desc,
      // release_date,
      genres_ids,
    }) => ({
      key: String(_id),
      title: title,
      poster: poster,
      // backdrop: getBackdropPath(backdrop_path),
      // rating: vote_average,
      description: desc,
      // releaseDate: release_date,
      genres: genres_ids.map(x => x),
    })
  );

  return movies;
};
