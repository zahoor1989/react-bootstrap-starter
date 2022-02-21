import axios from 'axios'
import { backEndUrl } from '../config'

export const getAllPartners = () => {
    return axios.get(`${backEndUrl}/allpartners`);
}

export const getInvitationPartners = async(data) => {
    debugger
    return await axios.post(`${backEndUrl}/partners`,  { ...data });
}
