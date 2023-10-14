import { http } from "../utils/request"

export const getUserStatus = () => {
  const result = http.get(`/login/status`, {
    params: {
      timerstamp: Date.now()
    }
  })
  
  return result
}