import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image
            }}
          />
          <View style={styles.cardBgShadow}></View>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri: albumData[0].thumbnail_image
              }}
            />
            <Text style={styles.headerArtistStyle}>{albumData[0].artist}</Text>
            <Text style={styles.headerTextStyle}>{albumData[0].title}</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image
            }}
          />
          <View style={styles.cardBgShadow}></View>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri: albumData[1].thumbnail_image
              }}
            />
            <Text style={styles.headerArtistStyle}>{albumData[1].artist}</Text>
            <Text style={styles.headerTextStyle}>{albumData[1].title}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image
            }}
          />
          <View style={styles.cardBgShadow}></View>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri: albumData[2].thumbnail_image
              }}
            />
            <Text style={styles.headerArtistStyle}>{albumData[2].artist}</Text>
            <Text style={styles.headerTextStyle}>{albumData[2].title}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image
            }}
          />
          <View style={styles.cardBgShadow}></View>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri: albumData[3].thumbnail_image
              }}
            />
            <Text style={styles.headerArtistStyle}>{albumData[3].artist}</Text>
            <Text style={styles.headerTextStyle}>{albumData[3].title}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image
            }}
          />
          <View style={styles.cardBgShadow}></View>
          <View style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{
                uri: albumData[4].thumbnail_image
              }}
            />
            <Text style={styles.headerArtistStyle}>{albumData[4].artist}</Text>
            <Text style={styles.headerTextStyle}>{albumData[4].title}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailStyle: {
    borderRadius: 80,
    height: 80,
    width: 80,
    marginBottom: 5
  },
  headerArtistStyle: {
    color: "#fff",
    marginBottom: 10
  },
  headerTextStyle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    position: "relative",
    height: 390 ,
    width: null
  },
  cardBgShadow: {
    position: "absolute",
    backgroundColor: "#000",
    zIndex: 9,
    height: 390,
    width: "100%",
    opacity: 0.5,
    left: 5,
    top: 5
  },
  thumbnailContainerStyle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99
  }
});

export default Albumlist;
