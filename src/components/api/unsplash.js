import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 1Kis-OoGEa20UGsmKF_vD2KXNvcxNEulRMab-3fMtoU'
    }
})