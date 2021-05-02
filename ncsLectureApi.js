// const subjects = {
//     001: '의사소통',
//     002: '수리',
//     003: '문제해결',
//     004: '자원관리',
//     005: '자기개발',
//     006: '조직이해',
//     007: '정보능력',
//     010: '기술능력',
//     011: '직업윤리',    
//   };
  
const result = [
    {
        classes: 'on_Study',
        // subject: [002],
        title: '시간, 속력, 거리 (1)',
        desc: '기초이론과 기초예제',
        URL: 'https://youtu.be/16iF_hKs034',
        // poster_path: require('../HomeScreen-master/assets/images/thumb/thumb_1.PNG'),
        // backdrop_path: require('../HomeScreen-master/assets/images/thumb/thumb_1.PNG'),
        update: '2021.04.03.',
    },
    
    {
        "adult": false,
        "backdrop_path": "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
        "genre_ids": [
        28,
        878
        ],
        "id": 399566,
        "original_language": "en",
        "original_title": "Godzilla vs. Kong",
        "overview": "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
        "popularity": 4853.228,
        "poster_path": "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
        "release_date": "2021-03-24",
        "title": "Godzilla vs. Kong",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4886
        }
    // {
    //     classes: 'on_Study',
    //     subject:  [002],
    //     title: '시간, 속력, 거리 (2)',
    //     desc: '기본문제 풀이',
    //     URL: 'https://youtu.be/16iF_hKs034',
    //     poster_path: `thumb_2`,
    //     backdrop_path: `thumb_2`,
    //     update: '2021.04.04.',
    // },
    // {
    //     classes: 'on_Study',
    //     subject: [003],
    //     title: '상황구성_위치추론 (1)',
    //     desc: '위치추론 기초이론',
    //     URL: 'https://youtu.be/X3nq35bfJmA',
    //     poster_path: `thumb_3`,
    //     backdrop_path: `thumb_3`,
    //     update: '2021.04.03.',
    // },
    // {
    //     classes: 'on_Study',
    //     subject: [003],
    //     title: '상황구성_위치추론 (2)',
    //     desc: '위치추론 기본문제',
    //     URL: 'https://youtu.be/X3nq35bfJmA',
    //     poster_path: `thumb_4`,
    //     backdrop_path: `thumb_4`,
    //     update: '2021.04.04.',
    // },
    // {
    //     classes: 'on_Study',
    //     subject: [003],
    //     title: '상황구성_위치추론 (3)',
    //     desc: '기초이론과 기초예제',
    //     URL: 'https://youtu.be/X3nq35bfJmA',
    //     poster_path: `thumb_5`,
    //     backdrop_path: `thumb_5`,
    //     update: '2021.04.05.',
    // },
    // {
    //     classes: 'on_Study',
    //     subject: [003],
    //     title: '상황구성_요일추론 (1)',
    //     desc: '기초이론과 기초예제',
    //     URL: 'https://youtu.be/h03HjVWloQU',
    //     poster_path: `thumb_6`,
    //     backdrop_path: `thumb_6`,
    //     update: '2021.04.03.',
    // },
    // {
    //     classes: 'on_Study',
    //     subject: [003],
    //     title: '상황구성_요일추론 (2)',
    //     desc: '요일 기본문제',
    //     URL: 'https://youtu.be/h03HjVWloQU',
    //     poster_path: `thumb_7`,
    //     backdrop_path: `thumb_7`,
    //     update: '2021.04.04.',
    // },
]

const getImagePath = (path) =>
    `../HomeScreen-master/assets/images/thumb${path}`;
const getBackdropPath = (path) =>
    `../HomeScreen-master/assets/images/thumb${path}`;

export const getLectures = async () => {
    // const { results } = await (result).then((x) => x.json());
    const lectures = result.map(
        ({
            classes,
            subject_ids,
            title,
            poster_path,
            backdrop_path,
            desc,
            URL,
            update
        }) => ({
            key: String(id),
            title: title,
            // poster: poster_path,
            // backdrop: backdrop_path,
            subject: subject,
            desc: desc,
            URL: URL,
            update: update,
            // subjects: subject_ids.map((subject) => subjects[subject]),
        })
    )
    return lectures;

}

  
