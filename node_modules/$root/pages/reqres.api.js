import BaseAPI from '$root/pages/base.api';

const ReqresAPI = {
    auth : (data) => BaseAPI.post('/auth', data) 
}

export default ReqresAPI;