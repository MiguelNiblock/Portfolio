const PORTFOLIO = {
	"Client-Side Web Development" : [
        {title: "COVID19 Preparedness Quiz", 
        descr: "Single-page client-side app built on Javascript, HTML and CSS that implements a multiple-choice quiz meant to test your COVID preparedness, and give you answers to important issues on the subject.",
        thumbnail: "https://raw.githubusercontent.com/MiguelNiblock/COVID19_quiz/master/covid19quiz_screenshot.png",
        codeurl: "projects/?id=covid19quiz"},

        {title: "Professional Portfolio Site", 
        descr: "An appealing site which auto-generates its HTML content with JQuery selectors from a JS object. Refers to the current site. ",
        thumbnail: "images/portfoliosite_screenshot.png",
        codeurl: "projects/?id=portfoliosite"},
    ],
    "HTTP API Development" : [
        {title: "Backend Microservices for Analytics Modules", 
        descr: "A FlaskAPI HTTP service that provides endpoints for various Python modules used by Gaming Analytics' backend operations.",
        thumbnail: "images/covarianceranks_screenshot.png",
        codeurl: "projects/?id=flaskapi"},

        {title: "Blog API- Node.JS", 
        descr: "CRUD API for blogging platform. Built from scratch with `npm` and Express. Handles GET and POST requests to `/blog-posts`. DELETE and PUT requests go to `/blog-posts/:id`. ",
        thumbnail: "images/blogapi_screenshot.png",
        codeurl: "projects/?id=node-blog-api"},

        {title: "To-Do app- Ruby on Rails", 
        descr: "MVC (Model View Controller) app deployed on Heroku, that uses a postgreSQL database for storing todos. To-dos are persistent, so you may visit the live page and add/edit/delete some if you wish!.",
        thumbnail: "images/todoruby_screenshot.png",
        codeurl: "projects/?id=ruby-todo-app"},
    ],
	"Data Science" : [
		{title: "Day Series Ensemble- Python Forecasting Module", 
        descr: "DSEnsemble can take day-series data and make forecasts that out-performed Facebook's Prophet algorithm in our tests at Gaming Analytics, Inc. It implements an ensemble of intelligently-randomized Holt Winter models, merges their results with Exponentially-Weighted-Moving-Averages, and passes them to Prophet as an additional_regressor.",
        thumbnail: "images/dsensemble_screenshot.png",
        codeurl: "projects/?id=dsensemble"},

        {title: "Luminol DS Detector- Anomaly Detection Module", 
        descr: "(Luminol Day-Series Detector) This Python library implements general-purpose algorithms for anomaly detection from the open source Luminol project, and provides an API better suitable for seasonal day-series data, as well direct compatibility with Pandas' dataframes.",
        thumbnail: "images/luminoldsdetector_screenshot.png",
        codeurl: "projects/?id=luminoldsdetector"},

        {title: "Deep NLP- Predicting Ad Demand", 
        descr: "Machine learning model with advanced NLP techniques to predict the Deal Probability of online classified ads.",
        thumbnail: "https://raw.githubusercontent.com/MiguelNiblock/Deep-NLP_Predicting-Ad-Demand/master/reports/Presentation/slides_png/img10.png",
        codeurl: "projects/?id=nlp-addemand"},

        {title: "Supervised Learning- Credit Card Fraud", 
        descr: "Machine learning model that classifies fraudulent transactions in a dataset with class imbalance.",
        thumbnail: "images/creditfraud_screenshot.png",
        codeurl: "projects/?id=supervised-creditfraud"},

        {title: "Natural Language Processing- Predict the Author", 
        descr: "This procedure compares various techniques used in NLP such as Latent Semantic Analysis, Bag of Words and TFIDF; to predict the author for a given article.",
        thumbnail: "images/predictauthor_screenshot.png",
        codeurl: "projects/?id=nlp-predictauthor"},
    ],
    "Data Analysis": [
        {title: "COVID19 Impact on Casino Play", 
        descr: "By visualizing the changes in the volume of adjacent concurrent plays before-and-after COVID19, we can understand the impact of social distancing on business operations. More than just an analysis, this project implements proprietary techniques to process raw casino data to identify adjacent play.",
        thumbnail: "images/covidanalysis_screenshot.png",
        codeurl: "projects/?id=covid19analysis"},

        {title: "Research Proposal- Mental Health in Tech", 
        descr: "Laying out an experimentation plan to find out if certain working conditions can reduce the loss in productivity caused by mental health issues.",
        thumbnail: "images/mentalhealthtech_screenshot.png",
        codeurl: "projects/?id=mental-health-tech"},

        {title: "Analytic Report- Youtube Trending Videos", 
        descr: "Exploration of Youtube data, accompanied by several analytical questions answered.",
        thumbnail: "images/youtubereport_screenshot.png",
        codeurl: "projects/?id=youtube-trending-vids"},
    ],
    "General": [
        {title: "Auto .Gitignore", 
        descr: 'Simple module written in pure Python that automotically generates ".gitignore" files based on a recursive folder search for a predefined marker filename. For example: "include.txt" Helpful if you have a large project and hate writing overly complex ".gitignore" files.',
        thumbnail: "images/autogitignore_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/AutoGitignore"},
    ],
    "HTML/ CSS" : [
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
        codeurl: "https://github.com/MiguelNiblock/WebDev/tree/master/CSS-Layouts/Project-Space-Cat-Dog/attempt"}	
    ],
};

const CAREER = {
    "Experience" : [
        {title: "Graduate Student- MS Computer Science/ Software Engineering",
        company_name: "Colorado Technical University",
        contract: "Full-Time",
        dates: "Mar 2020 - Present",
        description: `
            • 4.0 GPA<br>
            • <u>Classes completed:</u> Operating Systems Design, Computer Networks, Algorithm Analysis.<br>
            `,
        logourl: "images/ctu_logo.png"},

        {title: "Data Scientist Consultant",
        company_name: "Gaming Analytics AI",
        contract: "Part Time",
        dates: "Mar 2020 - May 2020",
        description: `
            • Designed and implemented an algorithm to identify the impact of COVID19 social distancing measures on casino play.<br>
            • Developed a procedure to generate analytics reports to casino customers based on the results of this algorithm.<br>
            • Reports include data visualizations for business analysis.<br>
            `,
        logourl: "images/ga_logo.jpeg"},

        {title: "Data Scientist Intern",
        company_name: "Gaming Analytics AI",
        contract: "Full-Time",
        dates: "Aug 2019 - Mar 2020",
        description: `
            • Developed a Forecasting Ensemble module. Significantly improved forecasting accuracy VS previous model in production.<br>
            &emsp; ◦ The ensemble utilizes Holt Winters & Prophet algorithms.<br>
            • Developed an Anomaly detection module for casino analytics platform.<br>
            • Developed a backend API for various machine learning modules.<br>
            • Developed modules for root cause analysis of anomalies in casino metrics.<br>
            &emsp; ◦ Automatically determines the source of anomalies found in time-series data from casino machine logs, by using multivariate covariance analysis techniques.<br>
            `,
        logourl: "images/ga_logo.jpeg"},

        {title: "Fellow Data Scientist",
        company_name: "Thinkful",
        contract: "Full-Time",
        dates: "Dec 2018 - May 2019",
        description: `
        • Developed Machine Learning models under the mentorship of an industry professional.<br>
        • Produced Jupyter Notebooks of high quality Python code.<br>
        • Presented projects to a live audience in a product-focused manner, effectively conveying highly-technical information in plain language.<br>
        • Worked with PostgreSQL databases in Linux and advanced SQL queries.<br>
        • Data manipulation and cleaning of large, noisy datasets in preparation for machine learning modeling.<br>
            `,
        logourl: "images/thinkful_logo.png"},

        {title: "Accounting Data Analyst",
        company_name: "Viacom",
        contract: "Full-Time",
        dates: "Dec 2017 - June 2018",
        description: `
        • Developed and deployed a Digital Time Card automated system for payroll processing in Microsoft Excel; this decreased turnaround times in half, by streamlining an otherwise repetitive process and eliminating many commonly-occurring human errors.<br>
        • Integrated the reporting of daily labor costs (“Hot Sheets”) into above-mentioned system, thereby reducing the processing time of Hot Sheets in half and achieving automatic data consistency across reports.<br>
        • Maintained the budgeting system for construction department by routinely updating labor union rates, and thus preventing costly payroll errors when scaling labor sources..<br>
            `,
        logourl: "images/viacom_logo.png"},

        {title: "Production Assistant",
        company_name: "The Weinstein Company",
        contract: "Full-Time",
        dates: "Aug 2017 - Dec 2017",
        description: `
        • Digitization and Management of departmental records: Check Requests, Petty Cash/PCard Envelopes, Purchase Orders, Asset List. <br>
        • Vendor sourcing and relations.<br>
        • Managing equipment rentals. <br>
            `,
        logourl: "images/weinstein_logo.png"},
    ],

    "Education" : [
        {title: "Master's Degree in Computer Science- Concentration: Software Engineering (In Progress)",
        company_name: "Colorado Tech University",
        contract: "Full-Time",
        dates: "Mar 2020 - Present",
        description: `
        • 4.0 GPA<br>
        • <u>Classes completed:</u> Operating Systems Design, Computer Networks, Algorithm Analysis.<br>
            `,
        logourl: "images/ctu_logo.png"},

        {title: "Bachelor Degree in Electronic Media Management",
        company_name: "California State University Northridge",
        contract: "Full-Time",
        dates: "Aug 2012 - May 2017",
        description: `
            • Studies in audience analysis, media regulations, marketing, and business law. <br>
            • Various computer science undergrad courses.
            `,
        logourl: "images/csun_logo.png"},
    ]
}