import React from 'react';
import {View, Text, Animated} from 'react-native';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryScatter,
  VictoryTheme,
} from 'victory-native';
import sizes from '../../constants/sizes';
import DotsCard from './DotsCard';

const LineChartCard = ({data}) => {
  const scrollX = new Animated.Value(0);
  const nbrOfCharts = [1, 2, 3];
  return (
    <>
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        snapToInterval={sizes.width - 50}
        snapToAlignment="center"
        decelerationRate="normal"
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        {nbrOfCharts.map((item, index) => (
          <VictoryChart
            key={`${index}`}
            domainPadding={20}
            theme={VictoryTheme.material}
            height={200}
            width={sizes.width - 50}
            padding={{top: 30, bottom: 30, left: 30, right: 30}}>
            <VictoryLine
              data={data}
              style={{
                data: {
                  stroke: '#1d04a8',
                },
                parent: {
                  border: '1px solid #ccc',
                },
              }}
              categories={{
                x: ['15 MIN', '30 MIN', '45 MIN', '1 H'],
                y: ['10', '20', '30'],
              }}
            />
            <VictoryScatter
              size={4}
              style={{
                data: {
                  fill: '#1d04a8',
                  stroke: '#1d04a8',
                  strokeWidth: 1,
                },
              }}
              data={data}
            />
            <VictoryAxis
              style={{
                grid: {stroke: 'transparent'},
                axis: {stroke: 'transparent'},
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: {stroke: 'transparent'},
                grid: {
                  stroke: 'grey',
                },
              }}
            />
          </VictoryChart>
        ))}
      </Animated.ScrollView>
      <DotsCard
        nbr={nbrOfCharts}
        itemScroll={scrollX}
        width={sizes.width - 50}
      />
    </>
  );
};

export default LineChartCard;
