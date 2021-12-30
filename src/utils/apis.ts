import axios from './request'

export const getMenus = () => {
  return axios.get('/api/menus')
}