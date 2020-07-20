    <title>Portfolio site</title>
    <meta name="description" property="og:description" content="Professional site for showcasing my computer science projects, career trajectory, skills and contact information.">
    <meta name="image" property="og:image" content="../images/portfoliosite_screenshot.png">
    <meta name="author" content="Miguel Niblock">
    <meta name="title" property="og:title" content="Portfolio Site">
# Portfolio Site

Professional site for showcasing my computer science projects, career trajectory, skills and contact information.

<span class="image main"><img src="../images/portfoliosite_screenshot.png" alt="banner" /></span>



## Technical Details

- Site is an extensively modified spin of template Stellar from [HTML5 UP](https://html5up.net/), by [@ajlkn](https://twitter.com/ajlkn). See the original template [here](https://html5up.net/stellar).
- JQuery functions auto-generate HTML content from a Data.js object and update the DOM elements on page load.
    - This behavior is responsible for rendering the portfolio project cards and the career entries.
- Neat integration of Jupyter Notebooks static content, while avoiding expensive requests for bootstrap. You can see it in [this project](https://miguelniblock.github.io/projects/?id=covid19analysis). 
    - The Jupyter Notebook is loaded through an `<iframe>` with no styles. Then a JQuery function accesses the DOM and appends them to `iframe.jupyter > html > head`. This achieves styling multiple `<iframe>` elements with only a single request to Bootstrap and other dependencies, such as styles for code highlighting.
- More features to come...