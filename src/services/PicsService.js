//import { AppState } from "../AppState";
import { AppState } from "../AppState";
import { Pic } from "../models/Pic";
import { nasaApi } from "./AxiosService";

class PicsService{
  async getPic(query) {
  try {
    const res = await nasaApi.get('apod?api_key=2LVuMz526lpJ4dMM93iviJslsLFCVv5OGdzq1VXN&date='+ query)
    console.log(res.data)
    AppState.pics = new Pic(res.data)
    console.log("app", AppState.pics)
  } catch (error) {
    console.error(error)
  }
}
}
export const picsService = new PicsService()