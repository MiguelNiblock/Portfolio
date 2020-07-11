const PORTFOLIO = {
	"Web App Development" : [
        {title: "COVID19 Preparedness Quiz", 
        descr: "Single-page client-side app built on Javascript, HTML and CSS that implements a multiple-choice quiz meant to test your COVID preparedness, and give you answers to important issues on the subject.",
        thumbnail: "https://raw.githubusercontent.com/MiguelNiblock/COVID19_quiz/master/covid19quiz_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/COVID19_quiz"},

        {title: "Professional Portfolio Site", 
        descr: "An appealing site which auto-generates its HTML content with JQuery selectors from a JS object. Refers to the current site. ",
        thumbnail: "images/portfoliosite_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/miguelniblock.github.io"},
    ],
    "API Development" : [
        {title: "Analytics Modules as Backend Microservices", 
        descr: "A FlaskAPI microservice that provides endpoints for various Python modules used by Gaming Analytics' backend operations.",
        thumbnail: "images/covarianceranks_screenshot.png",
        codeurl: "#"},

        {title: "Blog API- Node.JS", 
        descr: "CRUD API for blogging platform. Built from scratch with `npm` and Express. Handles GET and POST requests to `/blog-posts`. DELETE and PUT requests go to `/blog-posts/:id`. ",
        thumbnail: "images/blogapi_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/ServerDev/tree/master/CRUD/blog_app"},

        {title: "To-Do app- Ruby on Rails", 
        descr: "MVC (Model View Controller) app deployed on Heroku, that uses a postgreSQL database for storing todos. To-dos are persistent, so you may visit the live page and add/edit/delete some if you wish!.",
        thumbnail: "images/todoruby_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/ruby_todo_app"},
    ],
    "Web Design" : [
        {title: "Greg's List- Results Page", 
        descr: "Templateless HTML/CSS design which resembles the CraigsList look. Inclues a header with navbar, search area, pagination buttons/section, and results shown as rows.",
        thumbnail: "images/gregslist_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/WebDev/tree/master/CSS-Layouts/Project-GregsList"},

        {title: "Simple Sign-Up Page", 
        descr: "A basic sign-up page for a fictitious company, using only HTML/CSS, with no templates.",
        thumbnail: "images/signuppage_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/WebDev/tree/master/HTML-Forms/Project-SignUp-Page"},

        {title: "Space Cat-Dog Layout", 
        descr: "As you zoom in and out, this layout will maintain the placement of a funny cat and a dog at opposite corners of a content area.",
        thumbnail: "images/spacecatdog_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/WebDev/tree/master/CSS-Layouts/Project-Space-Cat-Dog"}	
    ],
	"Data Science" : [
		{title: "DaySeriesEnsemble- Python Forecasting Module", 
        descr: "DSEnsemble can take day-series data and make forecasts that out-performed Facebook's Prophet algorithm in our tests at Gaming Analytics, Inc. It implements an ensemble of intelligently-randomized Holt Winter models, merges their results with Exponentially-Weighted-Moving-Averages, and passes them to Prophet as an additional_regressor.",
        thumbnail: "images/dsensemble_screenshot.png",
        codeurl: "#"},

        {title: "LuminolTSDetector- Anomaly Detection Module", 
        descr: "(Luminol Time Series Detector) This Python library implements general-purpose algorithms for anomaly detection from the open source Luminol project, and provides an API better suitable for seasonal day-series data, as well direct compatibility with Pandas' dataframes.",
        thumbnail: "images/luminoltsdetector_screenshot.png",
        codeurl: "#"},
    ],
    "Data Analysis": [
        {title: "COVID19 Impact on Casino Play", 
        descr: "By visualizing the changes in the volume of adjacent concurrent plays before-and-after COVID19, we can understand the impact of social distancing on business operations. More than just an analysis, this project implements proprietary techniques to process raw casino data to identify adjacent play.",
        thumbnail: "images/covidanalysis_screenshot.png",
        codeurl: "#"},
    ]
};