import axiosClass from 'axios'
import { API_ENDPOINT } from '../constants/config'

export const axios = axiosClass.create({
  baseURL: API_ENDPOINT,
})
