import React, { useEffect, useState } from 'react';
import FIFAData from '../../../../Services/FifaData';

const PlayerImg = ({ spId }: any) => {
  const [imgUrl, setImgUrl] = useState<any>(null);

  useEffect(() => {
    const getImage = async () => {
      const fifa = new FIFAData();

      let result;
      try {
        result = await fifa.getActionImg(spId);
      } catch {
        const pid = Number(String(spId).split('').slice(3).join(''));

        result = await fifa.getHeadImg(pid);
      } finally {
        setImgUrl(result);
      }
    };

    getImage();
  }, [spId]);

  return (
    <div>
      <img src={imgUrl} alt="선수 이미지" />
    </div>
  );
};

export default PlayerImg;
