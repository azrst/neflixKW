import axios from 'axios';
import {Alert} from 'react-native/types';
import {endpoint} from '../../utils/endpoint';
import {queryParams} from '../../utils/ultility';
import {apiKey} from '../../utils/variables';

export const apiManager = async (endPoint = {}, body = {}, method = 'GET') => {
  const URL = 'https://api.themoviedb.org';
  try {
    body = {
      api_key: apiKey,
      language: 'en-US',

      ...body,
    };
    const bodyparams = await queryParams(body);
    console.log(
      'body params : ',
      JSON.stringify(`${URL}${endPoint}${bodyparams}`),
    );
    const res = await axios({
      method: method,
      url: `${URL}${endPoint}${bodyparams}`,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
    console.log('api res : ', res.status);
    return res;
  } catch (err) {
    return err;
  }
};

export default apiManager;
