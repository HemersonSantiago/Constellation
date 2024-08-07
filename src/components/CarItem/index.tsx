import React from "react";
import * as S from "./styles";
import { ICar } from "../../interfaces/ICar";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

export default function CarItem(item: ICar) {
  const {
    model,
    make,
    fuel,
    engineSize,
    year,
    mileage,
    favourite,
    details,
    imageCar,
    formatted,
  } = item;
  const { specification } = details;
  const { colour } = specification;
  const { startingBid, auctionDateTime } = formatted;

  return (
    <S.Wrapper>
      <S.Grid>
        <S.ImageContainer>
          <img src={imageCar} alt={`${make}-${model}`} />
        </S.ImageContainer>
        <S.DetailsContainer>
          <S.TitleContainer>
            <S.Title>
              <S.Brand>{make}</S.Brand>/<S.Model>{model}</S.Model>
            </S.Title>
            <S.Star>
              {favourite ? (
                <FaHeart color="red" fontSize={20} />
              ) : (
                <FiHeart fontSize={20} />
              )}
            </S.Star>
          </S.TitleContainer>
          <S.InfoCarContainer>
            <S.FirstLineContainer>
              <S.Info>
                <S.TitleInfo>Year</S.TitleInfo>
                <S.ContentInfo>{year}</S.ContentInfo>
              </S.Info>
              <S.Info>
                <S.TitleInfo>Engine</S.TitleInfo>
                <S.ContentInfo>{engineSize}</S.ContentInfo>
              </S.Info>
              <S.Info>
                <S.TitleInfo>Km</S.TitleInfo>
                <S.ContentInfo>{mileage}</S.ContentInfo>
              </S.Info>
              <S.Info>
                <S.TitleInfo>Fuel</S.TitleInfo>
                <S.ContentInfo>{fuel}</S.ContentInfo>
              </S.Info>
              <S.Info>
                <S.TitleInfo>Color</S.TitleInfo>
                <S.ContentInfo>{colour}</S.ContentInfo>
              </S.Info>
            </S.FirstLineContainer>
            <S.SecondLineContainer>
              <S.StartingBid>{startingBid}</S.StartingBid>
              <S.AuctionDate>
                <S.AuctionDateTitle>auction day</S.AuctionDateTitle>
                {auctionDateTime}
              </S.AuctionDate>
            </S.SecondLineContainer>
          </S.InfoCarContainer>
        </S.DetailsContainer>
      </S.Grid>
    </S.Wrapper>
  );
}
