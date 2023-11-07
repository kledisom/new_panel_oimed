window.onload = function() {

if($('#graph-1').length){
    var chartOne = new CanvasJS.Chart("graph-1", {
    animationEnabled: true,
    theme: "light2",
    axisX:{
        valueFormatString: "DD MMM",
        crosshair: {
            enabled: true,
            snapToDataPoint: true
        }
    },
    axisY: {
        includeZero: true,
        crosshair: {
            enabled: true
        }
    },
    toolTip:{
        shared:true
    },  
    legend:{
        cursor:"pointer",
        verticalAlign: "top",
        horizontalAlign: "left",
        dockInsidePlotArea: false,
        itemclick: toogleDataSeries
    },
    data: [{
        type: "line",
        showInLegend: true,
        name: "Total Visit",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        color: "#F08080",
        dataPoints: [
            { x: new Date(2017, 0, 5), y: 100 },
            { x: new Date(2017, 0, 7), y: 300 },
            { x: new Date(2017, 0, 9), y: 250 },
            { x: new Date(2017, 0, 11), y: 600 },
            { x: new Date(2017, 0, 13), y: 400 },
            { x: new Date(2017, 0, 15), y: 350 },
            { x: new Date(2017, 0, 17), y: 150 },
            { x: new Date(2017, 0, 19), y: 300 },
            { x: new Date(2017, 0, 21), y: 400 },
            { x: new Date(2017, 0, 23), y: 500}
        ]
    },
    {
        type: "line",
        showInLegend: true,
        name: "Unique Visit",
        lineDashType: "dash",
        dataPoints: [
            { x: new Date(2017, 0, 5), y: 220 },
            { x: new Date(2017, 0, 7), y: 180 },
            { x: new Date(2017, 0, 9), y: 300 },
            { x: new Date(2017, 0, 11), y: 200 },
            { x: new Date(2017, 0, 13), y: 150 },
            { x: new Date(2017, 0, 15), y: 600 },
            { x: new Date(2017, 0, 17), y: 450 },
            { x: new Date(2017, 0, 19), y: 200 },
            { x: new Date(2017, 0, 21), y: 323 },
            { x: new Date(2017, 0, 23), y: 600}
        ]
    }]
});
chartOne.render();

function toogleDataSeries(e){
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else{
        e.dataSeries.visible = true;
    }
    chartOne.render();
}
}

///Chart
if($('#graph-2').length){
var chartTwo = new CanvasJS.Chart("graph-2", {
    animationEnabled: true,
    theme: "light2",
    axisX:{
        valueFormatString: "DD MMM",
        crosshair: {
            enabled: true,
            snapToDataPoint: true
        }
    },
    axisY: {
        includeZero: true,
        crosshair: {
            enabled: true
        }
    },
    toolTip:{
        shared:true
    },  
    legend:{
        cursor:"pointer",
        verticalAlign: "top",
        horizontalAlign: "left",
        dockInsidePlotArea: false,
        itemclick: toogleDataSeries
    },
    data: [{
        type: "line",
        showInLegend: true,
        name: "Total Visit",
        markerType: "square",
        xValueFormatString: "DD MMM, YYYY",
        color: "#F08080",
        dataPoints: [
            { x: new Date(2017, 0, 5), y: 100 },
            { x: new Date(2017, 0, 7), y: 300 },
            { x: new Date(2017, 0, 9), y: 250 },
            { x: new Date(2017, 0, 11), y: 600 },
            { x: new Date(2017, 0, 13), y: 400 },
            { x: new Date(2017, 0, 15), y: 350 }
        ]
    },
    {
        type: "line",
        showInLegend: true,
        name: "Unique Visit",
        lineDashType: "dash",
        dataPoints: [
            { x: new Date(2017, 0, 5), y: 220 },
            { x: new Date(2017, 0, 7), y: 180 },
            { x: new Date(2017, 0, 9), y: 300 },
            { x: new Date(2017, 0, 11), y: 200 },
            { x: new Date(2017, 0, 13), y: 150 },
            { x: new Date(2017, 0, 15), y: 600 }
        ]
    }]
});
chartTwo.render();

function toogleDataSerieschartTwo(e){
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else{
        e.dataSeries.visible = true;
    }
    chartTwo.render();
}
}

///Chart
if($('#graph-3').length){    
var chartDonut = new CanvasJS.Chart("graph-3",{
  legend:{
    verticalAlign: "bottom",
    horizontalAlign: "center"
  },
  data: [{
    //startAngle: 45,
   indexLabelFontSize: 14,
   indexLabelFontFamily: "Arial",
   indexLabelFontColor: "#101010",
   indexLabelLineColor: "#101010",
   indexLabelPlacement: "outside",
   type: "doughnut",
   showInLegend: true,
   dataPoints: [
   {  y: 50, legendText:"System 1GB", indexLabel: "+10%" },
   {  y: 24, legendText:"Used 4GB", indexLabel: "-7,5%" },
   {  y: 26, legendText:"Free 1GB", indexLabel: "+0,4%" }
   ]
 }]
});

chartDonut.render();
}

///Chart
if($('#graph-4').length){
var chartThree = new CanvasJS.Chart("graph-4", {
    animationEnabled: true,
    title: {
        
    },
    axisX: {
        valueFormatString: "DDD",
        minimum: new Date(2017, 1, 5, 23),
        maximum: new Date(2017, 1, 12, 1)
    },
    axisY: {
        
    },
    legend: {
        verticalAlign: "top",
        horizontalAlign: "left",
        dockInsidePlotArea: false
    },
    toolTip: {
        shared: true
    },
    data: [{
        name: "Buys",
        showInLegend: true,
        legendMarkerType: "square",
        type: "area",
        color: "rgba(255,0,0,0.3)",
        markerSize: 0,
        dataPoints: [
            { x: new Date(2017, 1, 6), y: 80 },
            { x: new Date(2017, 1, 7), y: 50 },
            { x: new Date(2017, 1, 8), y: 250 },
            { x: new Date(2017, 1, 9), y: 120 },
            { x: new Date(2017, 1, 10), y: 350 },
            { x: new Date(2017, 1, 11), y: 250 },
            { x: new Date(2017, 1, 12), y: 300 },
            { x: new Date(2017, 1, 11), y: 250 },
            { x: new Date(2017, 1, 12), y: 300 }
        ]
    },
    {
        name: "Sells",
        showInLegend: true,
        legendMarkerType: "square",
        type: "area",
        color: "rgba(0,75,141,0.7)",
        markerSize: 0,
        dataPoints: [
            { x: new Date(2017, 1, 6), y: 80 },
            { x: new Date(2017, 1, 7), y: 100 },
            { x: new Date(2017, 1, 8), y: 150 },
            { x: new Date(2017, 1, 9), y: 80 },
            { x: new Date(2017, 1, 10), y: 150},
            { x: new Date(2017, 1, 11), y: 250 },
            { x: new Date(2017, 1, 12), y: 200 },
            { x: new Date(2017, 1, 11), y: 250 },
            { x: new Date(2017, 1, 12), y: 200 }
        ]
    }]
});
chartThree.render();
}

///Chart
if($('#graph-5').length){
var dataPoints = [];

var chartFour = new CanvasJS.Chart("graph-5", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: false,
    subtitles: [{
        text: ""
    }],
    axisX: {
        interval: 5,
        valueFormatString: "MMM"
    },
    axisY: {
        prefix: ""
    },
    toolTip: {
        content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
    },
    data: [{
        type: "candlestick",
        yValueFormatString: "$##0.00",
        dataPoints: dataPoints
    }]
});

$.get("js/stock-price.csv", getDataPointsFromCSV);

function getDataPointsFromCSV(csv) {
    var csvLines = points = [];
    csvLines = csv.split(/[\r?\n|\r|\n]+/);
    for (var i = 0; i < csvLines.length; i++) {
        if (csvLines[i].length > 0) {
            points = csvLines[i].split(",");
            dataPoints.push({
                x: new Date(
                    parseInt(points[0].split("-")[0]),
                    parseInt(points[0].split("-")[1]),
                    parseInt(points[0].split("-")[2])
                ),
                y: [
                    parseFloat(points[1]),
                    parseFloat(points[2]),
                    parseFloat(points[3]),
                    parseFloat(points[4])
                ]
            });
        }
    }
    chartFour.render();
}
}

///Chart
if($('#graph-13').length){
var dataPoints1 = [];

var chartFourAlt1 = new CanvasJS.Chart("graph-13", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: false,
    subtitles: [{
        text: ""
    }],
    axisX: {
        interval: 5,
        valueFormatString: "MMM"
    },
    axisY: {
        prefix: ""
    },
    toolTip: {
        content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
    },
    data: [{
        type: "candlestick",
        yValueFormatString: "$##0.00",
        dataPoints: dataPoints1
    }]
});

$.get("js/stock-price.csv", getDataPointsFromCSVAlt1);

function getDataPointsFromCSVAlt1(csv) {
    var csvLines = points = [];
    csvLines = csv.split(/[\r?\n|\r|\n]+/);
    for (var i = 0; i < csvLines.length; i++) {
        if (csvLines[i].length > 0) {
            points = csvLines[i].split(",");
            dataPoints1.push({
                x: new Date(
                    parseInt(points[0].split("-")[0]),
                    parseInt(points[0].split("-")[1]),
                    parseInt(points[0].split("-")[2])
                ),
                y: [
                    parseFloat(points[1]),
                    parseFloat(points[2]),
                    parseFloat(points[3]),
                    parseFloat(points[4])
                ]
            });
        }
    }
    chartFourAlt1.render();
}
}

///Chart
if($('#graph-14').length){
var dataPoints2 = [];

var chartFourAlt2 = new CanvasJS.Chart("graph-14", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: false,
    subtitles: [{
        text: ""
    }],
    axisX: {
        interval: 5,
        valueFormatString: "MMM"
    },
    axisY: {
        prefix: ""
    },
    toolTip: {
        content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
    },
    data: [{
        type: "candlestick",
        yValueFormatString: "$##0.00",
        dataPoints: dataPoints2
    }]
});

$.get("js/stock-price.csv", getDataPointsFromCSVAlt2);

function getDataPointsFromCSVAlt2(csv) {
    var csvLines = points = [];
    csvLines = csv.split(/[\r?\n|\r|\n]+/);
    for (var i = 0; i < csvLines.length; i++) {
        if (csvLines[i].length > 0) {
            points = csvLines[i].split(",");
            dataPoints2.push({
                x: new Date(
                    parseInt(points[0].split("-")[0]),
                    parseInt(points[0].split("-")[1]),
                    parseInt(points[0].split("-")[2])
                ),
                y: [
                    parseFloat(points[1]),
                    parseFloat(points[2]),
                    parseFloat(points[3]),
                    parseFloat(points[4])
                ]
            });
        }
    }
    chartFourAlt2.render();
}
}

///Chart
if($('#graph-15').length){
var dataPoints3 = [];

var chartFourAlt3 = new CanvasJS.Chart("graph-15", {
    animationEnabled: true,
    theme: "light1", // "light1", "light2", "dark1", "dark2"
    exportEnabled: false,
    subtitles: [{
        text: ""
    }],
    axisX: {
        interval: 5,
        valueFormatString: "MMM"
    },
    axisY: {
        prefix: ""
    },
    toolTip: {
        content: "Date: {x}<br /><strong>Price:</strong><br />Open: {y[0]}, Close: {y[3]}<br />High: {y[1]}, Low: {y[2]}"
    },
    data: [{
        type: "candlestick",
        yValueFormatString: "$##0.00",
        dataPoints: dataPoints3
    }]
});

$.get("js/stock-price.csv", getDataPointsFromCSVAlt3);

function getDataPointsFromCSVAlt3(csv) {
    var csvLines = points = [];
    csvLines = csv.split(/[\r?\n|\r|\n]+/);
    for (var i = 0; i < csvLines.length; i++) {
        if (csvLines[i].length > 0) {
            points = csvLines[i].split(",");
            dataPoints3.push({
                x: new Date(
                    parseInt(points[0].split("-")[0]),
                    parseInt(points[0].split("-")[1]),
                    parseInt(points[0].split("-")[2])
                ),
                y: [
                    parseFloat(points[1]),
                    parseFloat(points[2]),
                    parseFloat(points[3]),
                    parseFloat(points[4])
                ]
            });
        }
    }
    chartFourAlt3.render();
}
}

///Chart
if($('#graph-6').length){
var chartFive = new CanvasJS.Chart("graph-6",
{
    animationEnabled: true,
  axisX:{
    gridThickness: 0.1,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "0%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "2%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
    data: [{
        type: "spline",
        color: "rgb(87 117 252)",
        lineThickness: 3.5,
        lineColor: '#5775fc',
        markerSize: 0,
        dataPoints: [
            { x: 0, y: 40 },
            { x: 10, y: 50 },
            { x: 20, y: 35 },
            { x: 30, y: 55 },
            { x: 40, y: 45 },
            { x: 50, y: 70 },
            { x: 60, y: 55 }
        ]
    }                   
    ]
});
chartFive.render();
}

///Chart
if($('#graph-7').length){
var chartSix = new CanvasJS.Chart("graph-7",
{
    animationEnabled: true,
  axisX:{
    gridThickness: 0.1,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "0%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "2%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
    data: [{
        type: "spline",
        color: "#e93030",
        lineThickness: 3.5,
        lineColor: 'rgb(255 179 184)',
        markerSize: 0,
        dataPoints: [
            { x: 0, y: 60 },
            { x: 10, y: 70 },
            { x: 20, y: 55 },
            { x: 30, y: 60 },
            { x: 40, y: 40 },
            { x: 50, y: 60 },
            { x: 60, y: 45 }
        ]
    }                   
    ]
});
chartSix.render();
}

///Chart
if($('#graph-8').length){
var chartSeven = new CanvasJS.Chart("graph-8",
{
    animationEnabled: true,
  axisX:{
    gridThickness: 0.1,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "0%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "2%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
    data: [{
        type: "spline",
        color: "rgb(87 117 252)",
        lineThickness: 3.5,
        lineColor: '#5775fc',
        markerSize: 0,
        dataPoints: [
            { x: 0, y: 40 },
            { x: 10, y: 50 },
            { x: 20, y: 35 },
            { x: 30, y: 55 },
            { x: 40, y: 45 },
            { x: 50, y: 70 },
            { x: 60, y: 55 }
        ]
    }                   
    ]
});
chartSeven.render();
}

///Chart
if($('#graph-9').length){
var chartEight = new CanvasJS.Chart("graph-9",
{
    animationEnabled: true,
  axisX:{
    gridThickness: 0.1,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "0%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "2%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
    data: [{
        type: "spline",
        color: "#e93030",
        lineThickness: 3.5,
        lineColor: 'rgb(255 179 184)',
        markerSize: 0,
        dataPoints: [
            { x: 0, y: 60 },
            { x: 10, y: 70 },
            { x: 20, y: 55 },
            { x: 30, y: 60 },
            { x: 40, y: 40 },
            { x: 50, y: 60 },
            { x: 60, y: 45 }
        ]
    }                   
    ]
});
chartEight.render();
}

///Chart
if($('#graph-10').length){
var chartNine = new CanvasJS.Chart("graph-10",
{
    animationEnabled: true,
  axisX:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "0%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "2%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
    data: [{
        type: "spline",
        color: "#00a389",
        lineThickness: 4,
        lineColor: '#00a389',
        markerSize: 0,
        dataPoints: [
            { x: 0, y: 40 },
            { x: 10, y: 50 },
            { x: 20, y: 35 },
            { x: 30, y: 55 },
            { x: 40, y: 45 },
            { x: 50, y: 70 },
            { x: 60, y: 55 }
        ]
    }                   
    ]
});
chartNine.render();
}

///Chart
if($('#graph-11').length){
var chartTen = new CanvasJS.Chart("graph-11",
{
    animationEnabled: true,
  axisX:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "0%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "2%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
    data: [{
        type: "spline",
        color: "#e93131",
        lineThickness: 4,
        lineColor: '#e93131',
        markerSize: 0,
        dataPoints: [
            { x: 0, y: 60 },
            { x: 10, y: 70 },
            { x: 20, y: 55 },
            { x: 30, y: 60 },
            { x: 40, y: 40 },
            { x: 50, y: 60 },
            { x: 60, y: 45 }
        ]
    }                   
    ]
});
chartTen.render();
}

///Chart
if($('#graph-12').length){
var chartEleven = new CanvasJS.Chart("graph-12",
{
    animationEnabled: true,
  axisX:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "0%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    margin: 0,
    scaleBreaks: {
        customBreaks: [{
            spacing: "2%"
        }]
    },
    labelFormatter: function(){
      return " ";
    }
  },
    data: [{
        type: "spline",
        color: "rgb(87 117 252)",
        lineThickness: 3.5,
        lineColor: '#5775fc',
        markerSize: 0,
        dataPoints: [
            { x: 0, y: 40 },
            { x: 10, y: 50 },
            { x: 20, y: 35 },
            { x: 30, y: 55 },
            { x: 40, y: 45 },
            { x: 50, y: 70 },
            { x: 60, y: 55 }
        ]
    }                   
    ]
});
chartEleven.render();
}

}
