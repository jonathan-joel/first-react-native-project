import React from "react";
import { View } from "react-native";
import StyledText from "../atoms/StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 1000) / 10}k` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyledText align="center" fontWeight="bold">
          Country: 
        </StyledText>
        <StyledText align="center">{parseThousands(props.country)}</StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Review:
        </StyledText>
        <StyledText align="center" fontWeight="bold">
          {props.reviewCount}
        </StyledText>
      </View>
      <View>
        <StyledText align="center" fontWeight="bold">
          Rating:
        </StyledText>
        <StyledText align="center">{props.ratingAverage}</StyledText>
      </View>
    </View>
  );
};

export default RepositoryStats;