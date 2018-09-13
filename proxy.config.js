const proxy = [
    {
        context: '/api',
        target: 'https://aw-cheapest-hotels-api.herokuapp.com/',
        pathRewrite: {'^/api' : ''}
    }
];

module.exports = proxy;