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
    //buildcharts(firstsample);
    builddemotable(firstsample);
  });
  
}
init();

// Function to change options
function optionChanged(newsample) {
    //buildcharts(newsample);
    builddemotable(newsample);
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







    // buildGuage(result.wfreq)
  });
}

// Function to build Charts
// function buildcharts(sample){
//      d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
// ).then((data)=> {
//     let samples= data.samples;
//     let resultsarray= samples.filter(sampleobject => 
//     sampleobject.id == sample);
//     let result= resultsarray[0]

//     let ids = result.otu_ids;
//     let labels = result.otu_labels;
//     let values = result.sample_values;

//     var LayoutBubble = {
//         margin: { t: 0 },
//         xaxis: { title: "OTU ID" },
//         hovermode: "closest",
//         };
    
//         var DataBubble = [ 
//         {
//           x: ids,
//           y: values,
//           text: labels,
//           mode: "markers",
//           marker: {
//             color: ids,
//             size: values,
//             }
//         }
//       ];
    
//       Plotly.newPlot("bubble", DataBubble, LayoutBubble);

//  });
//  };
