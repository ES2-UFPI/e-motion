import React from 'react';
import { Text, View ,Dimensions} from 'react-native';
import {
    LineChart,
} from 'react-native-chart-kit'

interface LineChartIterface{
    labels:string[];
    data:number[];
    onPressDataPoint:(index:number)=>void;
}

const LineChartComponent = ({labels, data,onPressDataPoint}: LineChartIterface) => {
  const minValue = Math.min.apply(null, data);
  const maxValue =  Math.max.apply(null, data);;  
  const line = {
        labels:labels,
        datasets: [
          {
            data: data,
            strokeWidth: 1.8, 
          }
        ],
    };
    
      
    return(
        <LineChart
          data={line}
          width={Dimensions.get('window').width*2} // from react-native
          height={Dimensions.get('window').height*0.35}
          chartConfig={{
            backgroundColor: '#FCFCFF',
            backgroundGradientFrom: '#FCFCFF',
            backgroundGradientTo: '#FCFCFF',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `#E1948B`,
              style: {
                borderRadius: 16
              }
          }}
          bezier
          fromZero
          style={{
            marginVertical: 0,
            borderRadius: 16,
            marginRight:0,
            paddingRight:Dimensions.get('window').width/10
          }}
          onDataPointClick={(p) => {console.log(p);onPressDataPoint(p.index)}}

        />

    )
}

export default LineChartComponent;