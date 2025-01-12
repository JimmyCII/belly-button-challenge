# Belly Button Biodiversity Dashboard

## Background

This project is an interactive dashboard designed to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset, found at the [link provided in the challenge](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json), reveals that a small number of microbial species (also called operational taxonomic units, or OTUs) are present in the majority of people, while the rest are relatively rare.

The dashboard allows users to select a test subject ID from a dropdown menu. Upon selection, the dashboard dynamically updates to display the subject's demographic information, a horizontal bar chart showing the top 10 OTUs, and a bubble chart displaying all OTUs for that individual.

## Project Features

*   **Interactive Dropdown:** Allows users to select a test subject ID from a list.
*   **Demographic Information:** Displays demographic data for the selected individual, such as ethnicity, gender, age, and location.
*   **Horizontal Bar Chart:** Shows the top 10 OTUs found in the selected individual, using `sample_values` for bar lengths, `otu_ids` for labels, and `otu_labels` for hover text.
*   **Bubble Chart:** Displays all OTUs for the selected individual, using `otu_ids` for x-axis, `sample_values` for y-axis and marker sizes, `otu_ids` for marker colors, and `otu_labels` for hover text.
*   **Responsive Layout:** The dashboard is designed to be responsive, scaling charts correctly to different screen sizes.
*   **Clear Visual Style:** Uses shades of purple to create a visually appealing design, while maintaining legibility of the text.

## Technologies Used

*   **HTML:** Used to structure the dashboard.
*   **CSS:** Used for styling and layout. Bootstrap CSS library is used for creating responsive layouts. Custom CSS is also used for further customisation.
*   **JavaScript:** Used to implement interactivity and data handling.
*   **D3.js:** Used for fetching and parsing data from the `samples.json` file.
*   **Plotly.js:** Used for creating the interactive bar and bubble charts.
*   **GitHub Pages:** Used to deploy the application.

## Data Source

The data for this project was retrieved from this url `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`. The url is in a JSON format.

## Acknowledgment of AI Assistance

The code for this project was developed with the assistance of a Google AI. The AI helped with:

Specific areas where AI was particularly helpful:
*   Refining the code for the `createBarChart` and `createBubbleChart` functions, and ensuring they correctly utilize Plotly and Javascript.
*   Fixing issues with the formatting and layout of the charts and elements in the dashboard.
*   Providing the structure and necessary code for the `init()` and `optionChanged()` functions.

The code provided by the AI was reviewed, tested, modified, and incorporated into the final application.

## Deployment

The deployed application is available at:  `https://<your-username>.github.io/<your-repository-name>`.

## Usage
To use the application, simply navigate to the URL listed above, and:
1. Select a Test Subject ID Number from the dropdown menu.
2. View the updated Demographic Information, Bar Chart and Bubble Chart.
3. Explore other sample IDs using the dropdown menu.

## Getting Started
To run this application on your local machine:
1. Ensure you have python, or similar software to run local webservers.
2. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repository-name>.git
