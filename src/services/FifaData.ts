import axios from 'axios';
import { UserInfo } from '../types/type';

export default class FIFAData {
  instance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.nexon.co.kr/fifaonline4/v1.0',
      headers: {
        Authorization: import.meta.env.REACT_APP_API_KEY_FIFA,
      },
    });
  }

  getUserId = async <T extends UserInfo>(userNickName: string): Promise<T> => {
    const result = await this.instance.get<T>('users', {
      params: {
        nickname: userNickName,
      },
    });
    return result.data;
  };
}
