import styled from "styled-components";

export const Wrapper = styled.div`
  width: 800px;
  border: 1px solid rgba(112, 112, 111, 0.15);
  border-radius: 10px;
  background-color: #dadada;
  padding: 12px;
  margin-bottom: 12px;
`;

export const Grid = styled.div`
  display: flex;
`;

export const ImageContainer = styled.div`
  & > img {
    width: 250px;
    height: 180px;
    margin-right: 12px;
    border-radius: 10px;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-size: 18px;
  line-height: 1.2;
  color: #003049;
`;

export const Brand = styled.span``;
export const Model = styled.span``;
export const Star = styled.span`
  cursor: pointer;
`;
export const InfoCarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FirstLineContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
export const Info = styled.div``;
export const TitleInfo = styled.p`
  font-size: 12px;
  line-height: 0;
  letter-spacing: 0.033em;
  color: #757575;
`;

export const ContentInfo = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;
export const SecondLineContainer = styled.div`
  border-top: 1px solid #003049;
  display: flex;
  justify-content: space-between;
`;
export const StartingBid = styled.h5`
  font-size: 20px;
  color: #003049;
  line-height: 26px;
`;
export const AuctionDate = styled.p``;

export const AuctionDateTitle = styled.span``;

export const TimeLeft = styled.p``;
