function generatePortfolioString(dataObject){
    console.log('generating porfolio section element')
    const topicElements = Object.entries(dataObject).map((topic,index)=>{
        const topicHeader = `
        <header class="major">
            <h3>${topic[0]}</h3>
        </header>
        `
        const projects = topic[1].map((project,index)=>{
        return `
        <li>
            <span class="image">
                <div><a href="${project["codeurl"]}">Learn More</a></div>
                <img src="${project["thumbnail"]}">
            </span>
            <h4>${project["title"]}</h4>
            <p>${project["descr"]}</p>
        </li>
        `
        });

        const joinedProjects = projects.join("");
        // console.log(output);
        const output = 
            topicHeader +
            "<ul class='features'>" + 
            joinedProjects +
            "</ul>"
        return output
    });

    // console.log(topicElements);
    joinedElements = topicElements.join("");
    sectionElement = `
        <header class="major">
            <h2>Portfolio</h2>
        </header>`+joinedElements
    return sectionElement
};

function renderPortfolio(){
    console.log('renderPortfolio ran');
    const portfolioItemsString = generatePortfolioString(PORTFOLIO);
    console.log(portfolioItemsString);
    $('#portfolio').html(portfolioItemsString);
};

$(renderPortfolio);