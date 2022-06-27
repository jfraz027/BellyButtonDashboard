# BellyButtonDashboard

The goal of this project was to build an interactive dashboard exploring the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.
![image](https://user-images.githubusercontent.com/99145651/175777189-1b65ae6e-01a7-4dda-99b7-d7f76e204f93.png)

## Instructions

Complete the following steps:

Use the D3 library to read in `samples.json`.

URL `https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json`.

1. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  * Use `sample_values` as the values for the bar chart.

  * Use `otu_ids` as the labels for the bar chart.

  * Use `otu_labels` as the hovertext for the chart.

  ![image](https://user-images.githubusercontent.com/99145651/175989688-d3f7c9e2-712a-4ccf-8907-48dc7f8d6730.png)


2. Create a bubble chart that displays each sample.

  * Use `otu_ids` for the x values.

  * Use `sample_values` for the y values.

  * Use `sample_values` for the marker size.

  * Use `otu_ids` for the marker colors.

  * Use `otu_labels` for the text values.

![image](https://user-images.githubusercontent.com/99145651/176024038-faadbd2d-ef2c-439c-8cff-144d9c97b3fa.png)


3. Display the sample metadata, i.e., an individual's demographic information.

4. Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://user-images.githubusercontent.com/99145651/175990094-29674c8c-5765-4a78-ba75-45d9f66402a7.png)


5. Update all the plots when a new sample is selected. 
   Create any layout for the dashboard. 

![image](https://user-images.githubusercontent.com/99145651/176024366-14fd66cb-56ff-48e4-8726-c59b8d06f7fb.png)



6. Deploy app to a free static page hosting service.

7. Additional Task

*   Adapt the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

*   Modify the gauge code to account for values ranging from 0 through 9.

*   Update the chart whenever a new sample is selected.

![Weekly Washing Frequency Gauge](Images/gauge.png)


# Hints

* Use `console.log` inside of your JavaScript code to see what your data looks like at each step.

* Refer to the [Plotly.js documentation](https://plot.ly/javascript/) when building the plots.
