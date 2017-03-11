import React from "react";
import data from "./user";
import CustomizedTooltip from "./CustomizedTooltip";
import CustomizedAxisTick from "./CustomizedAxisTick";

const {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip} = require("recharts");


export default React.createClass({


  render () {
  let data1=[];
  for(let i=0; i<data.length; i++){
    let Time=((data[i].Seconds/60).toFixed(2))/1;
    let Place=data[i].Place;
    let Doping=data[i].Doping;
    let Nationality=data[i].Nationality;
    let Name=data[i].Name;
    let Year=data[i].Year;
   let values={
      Time,
      Place,
      Doping,
      Nationality,
      Name,
      Year
    }
    data1.push(values)

  }
    return (
  <div className="container text-center">
  <strong><h1>Free Code Camp Zipline</h1></strong>
  <strong><h4>D3 Scatterplot Visualization</h4></strong>
  <div id="lc">
  <p id="pos">Position</p>
  <p id="time">Time</p>
  	<ScatterChart width={800} height={700} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
      	<XAxis dataKey={"Time"} domain={[ 'dataMax',"dataMin"]} padding={{ left: 16 }}tick={<CustomizedAxisTick/>}/>
      	<YAxis dataKey={"Place"}/>
      	<Scatter  data={data1} fill="#9cacf1" animationEasing='ease-in-out'/>
      	<CartesianGrid />
      	<Tooltip cursor={{strokeDasharray: '3 3'}}content={<CustomizedTooltip/>}/>
      </ScatterChart>
  </div>
  </div>
    );
  }
});