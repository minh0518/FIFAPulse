import styled from 'styled-components';

export const StatisticsContainerDiv = styled.div``;

export const OutlineHeading = styled.h2`
  margin-top: 2em;
`;

export const OutlineUl = styled.ul`
  list-style: none;
  li {
    margin: 1.2em 0;
    font-size: 1.2rem;
    display: flex;
    justify-content: space-between;
  }
  width: 50%;
  margin: 0 auto;
  padding-bottom: 10%;
  border-bottom: 1px solid lightgray;
`;

export const DataNotExistDiv = styled.div`
  height: 19em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  font-size: 1.3rem;
  font-weight: bolder;
`;

export const DetailStatisticsDiv = styled.div`
  margin-top: 5%;
`;

export const DetailStatisticsUl = styled.ul`
  padding-left: 0;
  margin-top: 5%;
  list-style: none;
  display: flex;
  justify-content: space-around;
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
  }
`;

export const StatisticsContentDiv = styled.div``;
