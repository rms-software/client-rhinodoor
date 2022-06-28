import axios from 'axios'

const rms_settings = {
    socials: {
        facebook: 'BakkerijAdriaans',
        email: 'bakkerijadriaans@gmail.com',
        tel: '0624939954',
    },
    
    server_url: process.env.NODE_ENV === 'production' ? 'https://rhino-ms.herokuapp.com' : 'http://localhost:5000',
    company_id: 3
}

const cache = {}

const cache_result = async (name, getter) => {
    if (cache[name]) {
        return cache[name]
    } else {
        cache[name] = await getter()
        return cache[name]
    }
}

const testConnection = async () => {
    const url = `${rms_settings.server_url}/api/ping`

    try {
        const response = await axios.get(url);
        return response.status === 200;    
    } catch (error) {
        return false;
    }
}

// /api/open/{companyId}/general/get-info
const getCompanyInfo = () => cache_result('getCompanyInfo', async () => {
    const url = `${rms_settings.server_url}/api/open/${rms_settings.company_id}/general/get-info`
    const response = await axios.get(url)
    response.data.socials = rms_settings.socials
    return response.data
})

// api/open/{companyId}/products/all
const getProductList = () => cache_result('getCompanyProducts', async () => {
    const url = `${rms_settings.server_url}/api/open/${rms_settings.company_id}/products/all`
    const response = await axios.get(url)
    return response.data
})

// api/open/{companyId}/products/{id}
const getProductInfo = productId => cache_result('getCompanyProductInfo', async () => {
    const url = `${rms_settings.server_url}/api/open/${rms_settings.company_id}/products/${productId}`
    const response = await axios.get(url)
    return response.data
})

// api/open/{companyId}/orders
const placeOrder = async (order) => {
    const url = `${rms_settings.server_url}/api/open/${rms_settings.company_id}/orders`
    const response = await axios.post(url, order)
    return response.data
}

export default {
    // Company
    getCompanyInfo,

    // Products
    getProductList,
    getProductInfo,
    
    // Ordering
    placeOrder,

    // Others
    testConnection,
}