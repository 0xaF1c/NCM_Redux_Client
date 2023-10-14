import { http } from "../utils/request"

export const banner = () => {
  const res = http.get(`/banner`, {
    params: {
      type: 0
    }
  })
  
  return res
}