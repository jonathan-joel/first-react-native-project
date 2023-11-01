import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "../atoms/StyledText";

const parseThousands = (value) => {
  return value >= 1000 ? `${Math.round(value / 1000) / 10}k` : String(value);
};

const RepositoryStats = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <StyledText align="start" fontWeight="bold">
          Country:
        </StyledText>
        <StyledText align="center">{parseThousands(props.country)}</StyledText>
      </View>
      <View style={styles.infoContainer}>
        <StyledText align="center" fontWeight="bold">
          Review:
        </StyledText>
        <StyledText align="center" fontWeight="bold">
          {props.reviewCount}
        </StyledText>
      </View>
      <View style={styles.infoContainer}>
        <StyledText align="end" fontWeight="bold">
          Rating:
        </StyledText>
        <StyledText align="center">{props.ratingAverage}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f2f2f2", // Color de fondo de la sección
    padding: 10, // Espaciado interior
    borderRadius: 10, // Borde redondeado
    margin: 10, // Margen exterior
  },
  infoContainer: {
    flex: 1, // Distribución equitativa de las secciones
    alignItems: "center", // Alineación del contenido en el centro
    borderRightWidth: 1, // Línea divisoria a la derecha
    borderColor: "#ccc", // Color de la línea divisoria
    padding: 10, // Espaciado interior
  },
});

export default RepositoryStats;