const target = (prod, dev) => process.env.NODE_ENV === 'production' ? prod : dev;

export const API = target('https://kzou-server.herokuapp.com', 'http://localhost:3000');