    <title>FlaskAPI Backend Microservices for Analytics Modules</title>
    <meta name="description" property="og:description" content="A FlaskAPI microservice that provides endpoints for various Python modules used by Gaming Analytics' backend operations.">
    <meta name="image" property="og:image" content="../images/flaskapi_screenshot.png">
    <meta name="author" content="Miguel Niblock">
    <meta name="title" property="og:title" content="FlaskAPI Backend Microservices for Analytics Modules">

# Backend Microservices for Analytics Modules

A FlaskAPI HTTP service that provides endpoints for various Python modules used by Gaming Analytics' backend operations.

<span class="image main"><img src="https://s3.amazonaws.com/com.twilio.prod.twilio-docs/original_images/flask-oauth.png" alt="banner" /></span>

> <u>Note:</u> This project's source code is proprietary. The current page is a high-level description for informational purposes. A sample of the source code can be requested to Gaming Analytics, Inc. Please contact me for details.

## Context

At Gaming Analytics, we're always looking for better ways to provide valuable data insights to our casino customers. This project started with the attempt to answer the question <i>How to statistically explain which factors/ metrics contributed to a day's change in revenue? </i> As often is the case with good questions, solving this problem led to various sub-problems, each of which needed its own independently-running procedure to solve. Since I was going to be developing several of these backend tools in the months to come, I looked for ways to provide the team with a clean and straightforward programming interface (API) that could serve GET requests with functionalities expected of various sub-modules. Each submodule would be accessible at a dedicated endpoint with the module name. The request body would include the data to be processed, and the response would include the processed data. Python was the team's primary language in the backend, so Flask quickly became the obvious choice. While a Docker container would've been a possible choice for the task, the simplicity of the FlaskAPI solution was luring; not to say it was the path of least resistance. My teammates agreed.
## Working Example

Three related submodules were served by the Flask API in total. Although this article is mostly about the Flask API, I will briefly discuss the functionality of these modules and provide an example of an API call; All while maintaining confidentiality and avoid revealing any trade secrets ;). The following is a static render of a Jupyter Notebook where I send a get request to my local Flask server, and show the response as a Pandas' DataFrame.

<iframe class="jupyter" src="Request_SingleRankMetrics.html" width="100%" height="400" style="border:1px solid black;">
            </iframe>

### Breakdown

In this demo, we are sending a GET request to endpoint `http://localhost:5000/singlerankmetrics`. And along with it, we are sending a data object in JSON-form which contains the parameters of our request. These parameters are basically what we are asking the module to answer for us. In the very last cell we see the module's output which got sent as a response. For this particular module, (SingleRankMetrics) the output is a table that sorts the variables by their degree of contribution to the change in "coinIn", giving us a root cause explanation analysis. 

You might be wondering, how can this module determine which metrics contributed to the change in revenue? The variables in the top, (such as "averageBetUncarded" and "coinInUncarded") are said to be the greatest contributors to the change in "coinIn" because their change in value had the greatest difference in its normalized covariance, with respect to the change of value for "coinIn". That was the mathematical principle of my solution to this problem. If you look at the "norm" values in the output table (last cell), the top contributing metrics are those with the greatest positive difference in their "norm", which is the normalized expression of the value. Normalization allows us to compare metrics in different scales.

### About the API

One of the crucial things about building an API is to make it usable. (Aside from ensuring it works!) In order to do that, parameters and values are named in ways that best represent their role and function. Here is a detailed description of my API interface for these modules:

> You may wanna look at input cell #9 from the notebook, as these are the parameters sent with the request.

- `path`: is the input data for the module, expressed as a URL to a file which contains a Pandas Dataframe. The specific data format depends on the module in question. But for the three modules, it was usually a small Dataframe that includes only the minimum data necessary for the module to operate. The output of cell #3 shows a preview of the data to be handed to the module, in this case, the object 'assetdata'.
- `metric_col`: Refers to the metric whose change we want to explain. Revenue, expressed as 'coinIn' is the most commonly used value, since the other metrics are thought to be contributors to revenue, and we are assuming a causal relationship. But it's technically possible to frame the question in reverse as well.
- `date_target`: Refers to the date whose change we want to explain. In the demo, it's July 17, 2019. We are using data aggregated at the daily level. The modules that handle this request generally identify the 'day-of-week' of the input and compare the value in the <code>date_target</code> with the value in the previous date of same 'day-of-week'. You only compare a Friday to a Friday, and so on.
- Finally, `metric_col` and `date_col` just refer to the column name in the Dataframe which contain the request data. This is necessary to correctly parse the input data. `metric_col` in this case is set to column-name "coinIn", and `date_col` = "day".
- `method`: This parameter has nothing to do with HTTP request methods. We always send a GET request via HTTP to reach these modules via FlaskAPI. But in this case, "method" is a parameter of the API. What does it do? In these modules, we wanted to find out which metrics/dimensions contributed most to a given change in either positive or negative impact to revenue. So when we pass the value `bestranks` to this parameter, we are saying that the results should be sorted from greatest to least contribution to revenue. The modules used covariances to make this determination. If the change in `metric_col` was positive, then the metrics/dimensions with positive covariance are the 'best', and vice-versa.