import { http } from "../utils/request"

export const getMusicUrl = (id: string | number) => {
  return http.get(`/song/url`, {
    params: {
      id
    }
  })
}