import React, { useEffect, useState } from 'react';
import { UserInfo } from '../types/test';
import FIFAData from '../Services/FifaData';

const Test = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  useEffect(() => {
    const getData = async () => {
      const fifa = new FIFAData();
      const result = await fifa.getUserId('웰시코기발바닥');
      setUserInfo(result);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>This is Outlet for Test</h1>
      <p>userInfo below</p>
      {userInfo ? (
        <>
          <p>{userInfo.accessId}</p>
          <p>{userInfo.level}</p>
          <p>{userInfo.nickname}</p>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Test;
