// Init function to intinitialize web page with graphs, table, and dropdown displaying first sample '940'.

function init() {
  let selector = d3.select("#selDataset");
  // Fetch the JSON data and console log it
  d3.json(
    "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
  ).then((data) => {
    console.log(data);
    let sampleNames = data.names;
    sampleNames.forEach((sample) => {
      selector.append("option").text(sample).property("value", sample);
    });

    let firstsample = sampleNames[0];
    buildcharts(firstsample);
    builddemotable(firstsample);
    buildGauge(firstsample);
  });
  
}
init();

// Function to change options
function optionChanged(newsample) {
    buildcharts(newsample);
    builddemotable(newsample);
    buildGauge(newsample);
}

// Function to pull the Metadata into Demographic Table
function builddemotable(sample) {
  d3.json(
    "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
  ).then((data) => {
    let metadata = data.metadata;
    let metaarray = metadata.filter((sampleobj) => sampleobj.id == sample);
    let metaresult = metaarray[0];
    let panel = d3.select("#sample-metadata");

    panel.html("");
    Object.entries(metaresult).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  }
  )};






    // buildGuage(result.wfreq)

    
      

// Function to build Charts
 function buildcharts(sample){
     d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
 ).then((data)=> {
    let samples= data.samples;
    let samplesarray =samples.filter(sampleobj =>
    sampleobj.id == sample);
    let result =samplesarray[0]
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;

    let LayoutBubble = {
        margin: { t: 10 },
        xaxis: { title: "OTU ID" },
        hovermode: "closest",
        };
    
        let DataBubble = [ 
        {
          x: otu_ids,
          y: sample_values,
          text: otu_labels,
          mode: "markers",
          marker: {
            color: otu_ids,
            size: sample_values,
            }
        }
      ];
    
      Plotly.newPlot("bubble", DataBubble, LayoutBubble);
      
 let Bar_data =[
    {
      y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
      x: sample_values.slice(0,10).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      type:"bar",
      orientation:"h",

    }
  ];

  let BarLayout = {
    margin: { t: 10, l: 200 },
    };

  Plotly.newPlot("bar", Bar_data, BarLayout);
});

}
// let Gaugedata = [
//     {
//       type: "indicator",
//       mode: "gauge+number",
      
//         value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
//         title: { text: "Belly Button Washing Frequency", font: { size: 24 } },
//         // gauge: {
//         //axis: { range: [null, 500], tickwidth: 1, tickcolor: "darkblue" },
//         bar: { color: "darkblue" },
//         bgcolor: "white",
//         borderwidth: 2,
//         bordercolor: "gray",
//         steps: [
//           { range: [0, 250], color: "cyan" },
//           { range: [250, 400], color: "royalblue" }
//         ],
//         threshold: {
//           line: { color: "red", width: 4 },
//           thickness: 0.75,
//           value: 490
//         }
//       }
//     //}
//   ];
  
//   let Gaugelayout = {
//     width: 500,
//     height: 400,
//     xaxis: {zeroline:false, showticklabels:false,
//         showgrid: false, range: [-1, 1]},
//     yaxis: {zeroline:false, showticklabels:false,
//         showgrid: false, range: [-1, 1]},
// };
//     //margin: { t: 25, r: 25, l: 25, b: 25 },
//     //paper_bgcolor: "lavender",
//     //font: { color: "darkblue", };
  

//   Plotly.newPlot('gauge', Gaugedata, Gaugelayout,{responsive: true})
//   ;
function buildGauge(sample) {
    console.log("sample", sample);
  
    d3.json("samples.json").then(data =>{
  
      var objs = data.metadata;
      //console.log("objs", objs);
  
      var matchedSampleObj = objs.filter(sampleData => 
        sampleData["id"] === parseInt(sample));
      //console.log("buildGaugeChart matchedSampleObj", matchedSampleObj);
  
      buildGauge(matchedSampleObj[0]);
   });   
  }
  
  
  //======================================================//
  //=============== Build a GAUGE Chart ==================//
  //======================================================//
  function buildGauge(data) {
    console.log("buildGauge", data);
  
    if(data.wfreq === null){
      data.wfreq = 0;
  
    }
  
    let degree = parseInt(data.wfreq) * (180/10);
  
    // Trig to calc meter point
    let degrees = 180 - degree;
    let radius = .5;
    let radians = degrees * Math.PI / 180;
    let x = radius * Math.cos(radians);
    let y = radius * Math.sin(radians);
  
    let mainPath = 'M -.0 -0.025 L .0 0.025 L ',
        pathX = String(x),
        space = ' ',
        pathY = String(y),
        pathEnd = ' Z';
    let path = mainPath.concat(pathX, space, pathY, pathEnd);
    
    let trace = [{ type: 'scatter',
       x: [0], y:[0],
        marker: {size: 50, color:'2F6497'},
        showlegend: false,
        name: 'WASH FREQ',
        text: data.wfreq,
        hoverinfo: 'text+name'},
      { values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 9],
      rotation: 90,
      text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1',''],
      textinfo: 'text',
      textposition:'inside',
      textfont:{
        size : 16,
        },
      marker: {colors:[...arrColorsG]},
      labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '2-1', '0-1',''],
      hoverinfo: 'text',
      hole: .5,
      type: 'pie',
      showlegend: false
    }];
  
    let layout = {
      shapes:[{
          type: 'path',
          path: path,
          fillcolor: '#2F6497',
          line: {
            color: '#2F6497'
          }
        }],
  
      title: '<b>Belly Button Washing Frequency</b> <br> <b>Scrub Per Week</b>',
      height: 550,
      width: 550,
      xaxis: {zeroline:false, showticklabels:false,
                 showgrid: false, range: [-1, 1]},
      yaxis: {zeroline:false, showticklabels:false,
                 showgrid: false, range: [-1, 1]},
    };
  
    Plotly.newPlot('gauge', trace, layout, {responsive: true});
  
  }
  