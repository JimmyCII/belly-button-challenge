// Build the metadata panel
function buildMetadata(sample) {
  console.log("buildMetadata: Starting with sample ID:", sample);
d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("buildMetadata: JSON data loaded:", data);

    // get the metadata field
    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const filteredMetadata = metadata.find(meta => meta.id === parseInt(sample));

    // Use d3 to select the panel with id of `#sample-metadata`
    const metadataPanel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    metadataPanel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(filteredMetadata).forEach(([key, value]) => {
      // Capitalize all letters of the key
      const capitalizedKey = key.toUpperCase();

      metadataPanel.append("p").text(`${capitalizedKey}: ${value}`);
    });
  });
}


function buildCharts(sample) {
  console.log("buildCharts: Starting with sample ID:", sample);
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    console.log("buildCharts: JSON data loaded:", data);
    // Get the samples field
    const samples = data.samples;
    console.log("buildCharts: Samples array:", samples);

    // Filter the samples for the object with the desired sample number
    const filteredSample = samples.find(s => s.id === sample);
    console.log("buildCharts: Filtered Sample:", filteredSample);

    // Get the otu_ids, otu_labels, and sample_values
    const otu_ids = filteredSample.otu_ids;
    console.log("buildCharts: otu_ids:", otu_ids);
    const otu_labels = filteredSample.otu_labels;
    console.log("buildCharts: otu_labels:", otu_labels);
    const sample_values = filteredSample.sample_values;
    console.log("buildCharts: sample_values:", sample_values);
    
    // Build a Bubble Chart
     const bubbleTrace = {
          x: otu_ids,
          y: sample_values,
          mode: "markers",
          marker: {
              size: sample_values,
              color: otu_ids,
              colorscale: 'Viridis'
          },
           text: otu_labels
     };
      console.log("buildCharts: Bubble Chart trace created:", bubbleTrace);

     const bubbleLayout = {
        title: `Bacteria Culters Per Sample`,
        xaxis: {title: "OTU ID"},
        yaxis: {title: "Number of Bacteria"},
        responsive: true,
          height: 400
     };
      console.log("buildCharts: Bubble Chart layout created:", bubbleLayout);

    // Render the Bubble Chart
    Plotly.newPlot("bubble", [bubbleTrace], bubbleLayout);
    console.log("buildCharts: Bubble Chart rendered.");

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    const top10Ids = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse();
    console.log("buildCharts: top10Ids:", top10Ids);

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const barTrace = {
      x: sample_values.slice(0, 10).reverse(),
      y: top10Ids,
      text: otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    };
      console.log("buildCharts: Bar Chart trace created:", barTrace);
    const barLayout = {
       title: 'Top 10 Bacteria Cultures Found',
        margin: {l: 100, r: 0, t: 50, b: 50},
        height: 400,
          responsive: true
      };
      console.log("buildCharts: Bar Chart layout created:", barLayout);

    // Render the Bar Chart
    Plotly.newPlot("bar", [barTrace], barLayout);
    console.log("buildCharts: Bar Chart rendered.");

  });
}

// Function to run on page load
function init() {
  console.log("init: Initializing dashboard");
d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
      console.log("init: JSON data loaded:", data);
    // Get the names field
    const names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    const dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(name => {
      dropdown.append("option").text(name).property("value", name);
    });

    // Get the first sample from the list
    const firstSample = names[0];

    // Build charts and metadata panel with the first sample
      buildCharts(firstSample);
      buildMetadata(firstSample);
  });
}


// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();