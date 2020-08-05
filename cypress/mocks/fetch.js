const results = require('./computerCategory')
const pause = require('./pause')


const fetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {

    if (url.includes('https://api.mercadolibre.com/items/')) {
      const productId = url.split('items/')[1]
      return Promise.resolve(results.results.find(({id}) => id === productId ))
    }
    return Promise.resolve(results)
  } 
});

// const obj = {
//   status: 200,
//   ok: true,
//   json: () => {
 
//     if (url.includes('https://api.mercadolibre.com/items/')) {
//       const productId = url.split('items/')[1]
//       return Promise.resolve(results.results.find(({id}) => id === productId ))
//     }
//     return Promise.resolve(results)
//   } 
// }

// const fetch = (url) => new  Promise(resolve => setTimeout(() => resolve(obj),1000))

module.exports = fetch;
