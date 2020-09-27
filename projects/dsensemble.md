    <title>DSEnsemble | Forecasting Algorithm</title>
    <meta name="description" property="og:description" content="DSEnsemble is a forecasting algorithm for day series data with seasonality.">
    <meta name="image" property="og:image" content="../images/dsensemble_screenshot.png">
    <meta name="author" content="Miguel Niblock">
    <meta name="title" property="og:title" content="DSEnsemble">

# DSEnsemble

Ensemble algorithm for forecasting day series data with seasonality.

<span class="image main"><img src="../images/dsensemble_screenshot.png" alt="" /></span>

> <u>Note:</u> This project's source code is proprietary. The current page is a high-level description for informational purposes. A sample of the source code can be requested to Gaming Analytics, Inc. Please contact me for details.

## Context

During my time as an intern at Gaming Analytics, one of the obstacles faced by the team was the sometimes unimpressive accuracy of the forecasting model in production. Apparently it had been developed by a previous employee whose approach was one-of-a-kind and cryptic, and thus too time-consuming trying to patch. So my task was to develop a forecasting module from scratch, that could improve accuracy and be more maintainable.

After much experimentation and input from colleagues and superiors, I arrived at a novel, yet relatable approach that combined two great algorithms: Holt Winters, and Facebook's Prophet. Here's how I got there...

## Requirements

The primary challenge in developing this forecasting model was the small datasets available for some of the customers. A requirement was that the model must be applied to the data of all the customers, some of which only have 1-2 years of data saved. 1-2 years sounds like a lot of data, but it's not for the purposes of predicting daily estimates. That's because each year contains a full range of seasonal variations that must be analyzed by the algorithm in order to predict a whole 365 days into the future. Otherwise we only have the weekly seasonal variations, which say that weekends have more revenue than weekdays.

Another requirement is that the model must have good accuracy when predicting a whole year into the future. That's because it would be used for estimating next year's revenue. Therefore it was imperative to capture the yearly seasonal variation. To put things into perspective, weather forecasts usually predict no more than 10 days in advance. And most of the readily-available open source software for forecasting aren't meant to encompass seasonal components. 

### Conclusion

After experimenting with various approaches and algorithms, I found the idea of an ensemble algorithm the most appropriate for this use case. Some algorithms are better than others at handling seasonality, while some are better with small samples. This required a completely customized module written, which integrated the various algorithms into a unified API that is simple to use in Python. For details on the actual solution, please be welcome to ask me privately.

The accuracy scores obtained with this procedure were bombastic. The procedure outperformed vanilla-Prophet by far, and also the previous model in production. One downside was the potentially long runtime, which was primarily caused by the binary search for the adequate continuous parameters. Fortunately, modifications can be implemented in this area without interfering with the overall algorithm. 

<span class="image main"><img src="../images/dsensemble_output.png" alt="" /></span>