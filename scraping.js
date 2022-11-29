const fetch = require('node-fetch');

const getProduct = () => new Promise((resolve,reject) => { 
    fetch('http://elearning.bsi.ac.id/user/dashboard', {
        method: 'GET',
        headers: {
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Mobile Safari/537.36'
        }
    })
        .then(res => res.text())
        .then(result => {
            resolve(result)
        })
        .catch(err => reject(err))
});

(async () => {
        const detailProduct = await getProduct()
        console.log(detailProduct)
})();