const PORTFOLIO = {
	"Client-Side Web Development" : [
        {title: "COVID19 Preparedness Quiz", 
        descr: "Single-page client-side app built on Javascript, HTML and CSS that implements a multiple-choice quiz meant to test your COVID preparedness, and give you answers to important issues on the subject.",
        thumbnail: "https://raw.githubusercontent.com/MiguelNiblock/COVID19_quiz/master/covid19quiz_screenshot.png",
        codeurl: "projects/?id=covid19quiz"},

        {title: "Professional Portfolio Site", 
        descr: "An appealing site which auto-generates its HTML content with JQuery selectors from a JS object. Refers to the current site. ",
        thumbnail: "images/portfoliosite_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/miguelniblock.github.io"},
    ],
    "HTTP API Development" : [
        {title: "Backend Microservices for Analytics Modules", 
        descr: "A FlaskAPI HTTP service that provides endpoints for various Python modules used by Gaming Analytics' backend operations.",
        thumbnail: "images/covarianceranks_screenshot.png",
        codeurl: "projects/?id=flaskapi"},

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
        codeurl: "https://github.com/MiguelNiblock/Deep-NLP_Predicting-Ad-Demand"},

        {title: "Supervised Learning- Credit Card Fraud", 
        descr: "Machine learning model that classifies fraudulent transactions in a dataset with class imbalance.",
        thumbnail: "images/creditfraud_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/Supervised-Learning_Credit-Card-Fraud"},

        {title: "Natural Language Processing- Predict the Author", 
        descr: "This procedure compares various common techniques used in NLP such as Latent Semantic Analysis, Bag of Words, TFIDF... to predict the author for a given article, based on statistical similarities found in text data.",
        thumbnail: "images/predictauthor_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/Natural-Language-Processing_Predict-the-Author"},
    ],
    "Data Analysis": [
        {title: "COVID19 Impact on Casino Play", 
        descr: "By visualizing the changes in the volume of adjacent concurrent plays before-and-after COVID19, we can understand the impact of social distancing on business operations. More than just an analysis, this project implements proprietary techniques to process raw casino data to identify adjacent play.",
        thumbnail: "images/covidanalysis_screenshot.png",
        codeurl: "projects/?id=covid19analysis"},

        {title: "Research Proposal- Mental Health in Tech", 
        descr: "Laying out an experimentation plan to find out if certain working conditions can reduce the loss in productivity caused by mental health issues.",
        thumbnail: "images/mentalhealthtech_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/Research-Proposal_Mental-Health-in-Tech"},

        {title: "Analytic Report- Youtube Trending Videos", 
        descr: "Exploration of Youtube data, accompanied by several analytical questions answered.",
        thumbnail: "images/youtubereport_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/Analytic-Report_Youtube-Trending-Videos/blob/master/IPYNB.Analytic-Report_Youtube-Trending-Videos.ipynb"},
    ],
    "General": [
        {title: "Auto .Gitignore", 
        descr: 'Simple module written in pure Python that automotically generates ".gitignore" files based on a recursive folder search for a predefined marker filename. For example: "include.txt" Helpful if you have a large project and hate writing overly complex ".gitignore" files.',
        thumbnail: "images/autogitignore_screenshot.png",
        codeurl: "https://github.com/MiguelNiblock/AutoGitignore"},
    ]
};

const CAREER = {
    "Experience" : [
        {title: "Graduate Student- MS Computer Science/ Software Engineering",
        company_name: "Colorado Technical University",
        contract: "Full-Time",
        dates: "Mar 2020 - Present",
        description: `
            • 4.0 GPA (first quarter)<br>
            • Operating Systems, Networks, Algorithms, Databases.
            `,
        logourl: "images/ctu_logo.png"},

        {title: "Data Scientist Intern",
        company_name: "Gaming Analytics, Inc",
        contract: "Full-Time",
        dates: "Aug 2019 - Mar 2020",
        description: `
            • Developed a Forecasting Ensemble module. Significantly improved forecasting accuracy VS previous model in production.<br>
            &emsp; ◦ The ensemble utilizes Holt Winters & Prophet algorithms.<br>
            • Developed an Anomaly detection module for casino analytics platform.<br>
            • Developed a backend API for various machine learning modules.<br>
            • Developed modules for multivariate covariance analysis of casino metrics:<br>
            &emsp; ◦ Automatically determines the root cause of anomalies found in time-series data from casino machine logs.<br>
            `,
        logourl: "images/ga_logo.jpeg"},

        {title: "Fellow Data Scientist",
        company_name: "Thinkful",
        contract: "Full-Time",
        dates: "Dec 2018 - May 2019",
        description: `
        • Developed Machine Learning models under the mentorship of an industry professional.<br>
        • Produced Jupyter Notebooks of high quality Python code.<br>
        • Presented project and outcomes to a live audience in a product-focused manner, effectively conveying highly-technical information in plain language.<br>
        • Wrote complex SQL queries, involving new 'Window' functions.<br>
        • Set up a PostreSQL database in Linux.<br>
        • Skillfully manipulated large and noisy datasets in preparation for modeling.<br>
            `,
        logourl: "images/thinkful_logo.png"},

        {title: "Accounting Data Analyst",
        company_name: "Viacom",
        contract: "Full-Time",
        dates: "Dec 2017 - June 2018",
        description: `
        • Designed and deployed a Digital Time Card automated system; this eliminated manual errors and decreased turnaround times by 300% in payroll processing.<br>
        • Integrated the reporting of daily labor costs (“Hot Sheets”) into above-mentioned system, reducing Hot Sheets processing time by 50% and achieving data consistency across reports.<br>
        • Maintained construction budgeting system by routinely updating labor rates for all necessary labor unions, successfully preventing errors when scaling labor sources.<br>
        • Played key role in managing the department’s relationship with key figures inside the company, succeeding in extending the team’s contract.<br>
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
        {title: "Master Degree in Computer Science- In Progress",
        company_name: "Colorado Tech University",
        contract: "Full-Time",
        dates: "Mar 2020 - Present",
        description: `
            • 4.0 GPA (First quarter)<br>
            • Operating Systems, Networks, Algorithms, Databases.
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