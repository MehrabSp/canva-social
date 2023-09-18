/**
 * Section list
 * @MehrabSp
 */
import { FlatList, useWindowDimensions } from "react-native";
import { data } from "../data";
import { Col2 } from "../Columns/Column2";
import { Col3 } from "../Columns/Column3";
import { itemStyle } from "../style";

export function SectionList() {
  const { height, width } = useWindowDimensions();
  const Columns: boolean = width > height;

  return (
    <>
      {Columns ? (
        <FlatList
          data={data}
          renderItem={({ item }) => Col3(itemStyle, item, Columns)}
          key={"_"}
          scrollEnabled={false}
          keyExtractor={(item) => "_" + item.id}
          // keyExtractor={keyExtractor}
          contentContainerStyle={{
            marginHorizontal: 20,
            marginVertical: 20,
          }}
          numColumns={3}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => Col2(itemStyle, item, Columns)}
          key={"#"}
          scrollEnabled={false}
          keyExtractor={(item) => "#" + item.id}
          // keyExtractor={keyExtractor}
          contentContainerStyle={{
            marginHorizontal: 20,
            marginVertical: 20,
          }}
          numColumns={2}
        />
      )}
    </>
  );
}
