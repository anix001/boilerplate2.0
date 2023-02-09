/* eslint-disable no-extra-boolean-cast */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios'
import store from '../store/store'
import {
  errorNotify,
  successNotify,
} from '../store/modules/notify/notifyActions'
import { logout } from '../store/modules/auth/authActions'
import {
  getIdToken,
  getClinicCode,
} from '../utils/helpers/authorization'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config:any) {
    const id_token = getIdToken()
    const clinicCode = getClinicCode()

    try {
      if (!!id_token) {
        // @ts-ignore
        config.headers['Authorization'] = `Bearer ${id_token}`
      }
      if (!!clinicCode) {
        // @ts-ignore
        config.headers['X-EPARAMARSHA-CC'] = clinicCode
      }
      return config
    } catch (err) {
      // console.log("error in axios", err)
    }

    // Do something before request is sent
    return config
  },
  function (error:any) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response:any) {
    response.status === 200 &&
      !!response.data.message &&
      successNotify(response.data.message)
    return response.data
  },
  function (error:any) {
    if (error.response && error.response.status === 401) {
      //when 401 i.e unauthorized comes
      //write function to clear session
      // console.log('its 401')

      // const navigate = useNavigate()
      store.dispatch(logout())
      // navigate('/')
      // window.history.pushState({},'','/')

      store.dispatch(errorNotify('authentication error'))
    }

    if (error.response && error.response.status === 403) {
      store.dispatch(errorNotify('not authorized'))
    }

    return Promise.reject(error?.response?.data?.message)
  }
)

export default axiosInstance
