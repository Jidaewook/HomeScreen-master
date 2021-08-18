export const BASE_URL = 'http://passme-env.eba-fkpnrszj.us-east-2.elasticbeanstalk.com';

export const getRecommend = async () => {
    const { results } = await fetch(`${BASE_URL}/ncs`).then((x) => x.json());

    const recommends = results.map(
        ({
            _id,
            title,
            desc,
            poster,
        }) => ({
            key: String(_id),
            title: title,
            desc: desc,
            poster: poster,

        })
    );
 
    return recommends;
}

