import { http } from "../utils/request"

export const getPlaylistDetail = (id: string | number) => {
  return http.get(`/playlist/detail`, {
    params: {
      id
    }
  })
}