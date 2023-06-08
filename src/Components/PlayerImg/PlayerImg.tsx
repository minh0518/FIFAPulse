import React, { useEffect, useState } from 'react';
import { Img } from './PlayerImg.styled';
import FIFAData from '../../Services/FifaData';
import DummyProfile from '../../images/dummyProfile.jpg';
import { PlayerImgProps } from '../../types/props';
import { changeSpidToPid } from '../../utils/MatchStatistics';

const PlayerImg = ({ spId, width, height }: PlayerImgProps) => {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  useEffect(() => {
    const getImage = async () => {
      const fifa = new FIFAData();

      let result = null;
      try {
        result = await fifa.getActionImg(spId);
      } catch {
        const pid = changeSpidToPid(spId);

        result = await fifa.getHeadImg(pid);
      } finally {
        setImgUrl(result);
      }
    };

    getImage();
  }, [spId]);

  return imgUrl === null ? (
    <Img src={DummyProfile} alt="더미 이미지" width={width} height={height} />
  ) : (
    <Img src={imgUrl} alt="선수 이미지" width={width} height={height} />
  );
};

export default PlayerImg;
