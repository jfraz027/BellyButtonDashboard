# BellyButtonDashboard

The goal of this project was to build an interactive dashboard exploring the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

image.png

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
![image](https://user-images.githubusercontent.com/99145651/175777189-1b65ae6e-01a7-4dda-99b7-d7f76e204f93.png)

## Instructions

Complete the following steps:

1. Use the D3 library to read in `samples.json` from the URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * Use `sample_values` as the values for the bar chart.

  * Use `otu_ids` as the labels for the bar chart.

  * Use `otu_labels` as the hovertext for the chart.

  ![image](https://user-images.githubusercontent.com/99145651/175989688-d3f7c9e2-712a-4ccf-8907-48dc7f8d6730.png)


3. Create a bubble chart that displays each sample.

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `otu_ids` for the marker colors.

  * Use `otu_labels` for the text values.

![image](https://user-images.githubusercontent.com/99145651/175989819-82423b58-8890-410e-bf49-aae5b34de04c.png)


4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://user-images.githubusercontent.com/99145651/175990094-29674c8c-5765-4a78-ba75-45d9f66402a7.png)


6. Update all the plots when a new sample is selected. 
   Create any layout for the dashboard. 

![hw](Images/hw02.png)


7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

## Advanced Challenge Assignment (Optional)

The following task is advanced and therefore optional.

* Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

* You will need to modify the example gauge code to account for values ranging from 0 through 9.

* Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)


## Hints

* Use `console.log` inside of your JavaScript code to see what your data looks like at each step.

* Refer to the [Plotly.js documentation](https://plot.ly/javascript/) when building the plots.
