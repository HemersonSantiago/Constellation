import React from "react";
import useGetList from "../../hooks/useList";
import CarItem from "../../components/CarItem";
import { ICar } from "../../interfaces/ICar";
import * as S from "./styles";

export const List = () => {
  const { data, isLoading } = useGetList();

  console.log("dataTeste >>>", data, isLoading);

  return (
    <S.Wrapper>
      <div>
        {data && data.length && data.map((item: ICar) => <CarItem {...item} />)}
      </div>
    </S.Wrapper>
  );
};
