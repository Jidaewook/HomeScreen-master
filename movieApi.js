const genres = {
  12: '의사소통',
  14: '수리능력',
  16: '문제해결',
  18: '자원관리',
  27: '자기개발',
  28: '조직이해',
  35: '정보능력',
  36: '기술능력',
  37: '직업윤리',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  100: '계산',
  101: '추론',
  102: '설명',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

const results = [
  {
    id: 1101822001,
    title: '시간, 속력, 거리 (1)',
    desc: "수리능력 중 응용수리 영역의 첫 번째 난관, 시간/속력/거리 첫번째 시간",
    genre_ids: [
      14,
      101
    ],
    rating: 5.5,
    poster_path: require("../HomeScreen-master/assets/images/thumb/sample1.png"),
    backdrop_path: require('../HomeScreen-master/assets/images/thumb/back1.jpeg'),
    professor: {},
    comments: [],
    likes: [],
    url: `https://youtu.be/16iF_hKs034`
    },
    {
      id: 1101822002,
      title: '상황구성_위치추론 (1)',
      desc: "문제해결능력, 위치추론 기초이론",
      genre_ids: [
        14,
        100
      ],
      rating: 6.5,
      poster_path: require("../HomeScreen-master/assets/images/thumb/sample5.jpeg"),
      backdrop_path: require('../HomeScreen-master/assets/images/thumb/back2.jpeg'),
      professor: {},
      comments: [],
      likes: [],
      url: `https://youtu.be/X3nq35bfJmA`
    },
    {
      id: 1101822003,
      title: '상황구성_위치추론 (2)',
      desc: "문제해결능력, 위치추론 기본이론. 문제해결 접근법을 적용하라",
      genre_ids: [
        14,
        102
      ],
      rating: 6.5,
      poster_path: require("../HomeScreen-master/assets/images/thumb/sample2.png"),
      backdrop_path: require('../HomeScreen-master/assets/images/thumb/back3.jpeg'),
      professor: {},
      comments: [],
      likes: [],
      url: `https://youtu.be/h03HjVWloQU`
    },
    {
      id: 1101822004,
      title: '상황구성_요일추론 (1)',
      desc: "문제해결능력, 요일문제는 단순하다. 정해진 틀에서 빠르게 해결하라",
      genre_ids: [
        14,
        102
      ],
      rating: 8.5,
      poster_path: require("../HomeScreen-master/assets/images/thumb/sample3.jpeg"),
      backdrop_path: require('../HomeScreen-master/assets/images/thumb/back4.jpeg'),
      professor: {},
      comments: [],
      likes: [],
      url: `https://youtu.be/X3nq35bfJmA`
    },
    {
      id: 1101822005,
      title: '상황구성_요일추론 (2)',
      desc: "문제해결능력, 요일추론 접근법 확인과 실전 적용",
      genre_ids: [
        14,
        102
      ],
      rating: 10.0,
      poster_path: require("../HomeScreen-master/assets/images/thumb/sample4.jpeg"),
      backdrop_path: require('../HomeScreen-master/assets/images/thumb/back5.jpeg'),
      professor: {},
      comments: [],
      likes: [],
      url: `https://youtu.be/X3nq35bfJmA`
    },
]

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=8a919d63fb74ef8af3e7074f3f1ca20f&sort_by=popularity.desc`;
const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  // const { results } = await fetch(API_URL).then((x) => x.json());
  const movies = results.map(
    ({
      id,
      title,
      poster_path,
      backdrop_path,
      rating,
      desc,
      professor,
      comments,
      likes,
      genre_ids,
    }) => ({
      key: String(id),
      title,
      poster: poster_path,
      backdrop: backdrop_path,
      rating,
      description: desc,
      professor,
      comments,
      likes,
      // releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );

  return movies;
};