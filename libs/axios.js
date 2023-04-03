import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://api-dev.anchor.tiqwa.com/api',
  headers: {
    'x-tenant': 'yopeetravails.api-dev.anchor.tiqwa.com',
  },
})

export default axiosInstance
