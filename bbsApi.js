const API_URL = `http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com/bbs`;
const getImagePath = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
    `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;
  
export const getBbs = async () => {
    const { results } = await fetch(API_URL).then((x) => x.json());
    const bbs = results.map(
      ({
        _id,
        title,
        desc,
        comments,
        likes,
        tag,
        url,
        category,
        createdAt
      }) => ({
        key: String(_id),
        title,
        description: desc,
        comments,
        likes,
        tag,
        url,
        category,
        createdAt
      })
    );
  
    return bbs;
  };