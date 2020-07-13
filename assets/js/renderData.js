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
//////////////////////////////////////////

function generateCareerSectionString(dataObject){

    console.log('generating career section element')

    const subsectionElements = Object.entries(dataObject).map((subsection,index)=>{
        const subsectionHeader = `
        <header class="major">
            <h3>${subsection[0]}</h3>
        </header>
        `
        const roles = subsection[1].map((role,index)=>{
        return `
        <li>
        <div>
            <div class="company-logo">
                <img src="${role["logourl"]}" loading="lazy" alt="logo">
            </div>
            <div class="summary-info">
                <h4 class="role-title">${role["title"]}</h4>
                <a class="role-company-name" href="#">${role["company_name"]}</a>
                <span class="contract-type">${role["contract"]}</span>
                
                <div class="display-flex dates-duration">
                    <span class="role-dates">${role["dates"]}</span>
                </div>
            </div>
            <div class="role-description">
                <p class="role-description-p">
                    ${role["description"]}
                </p>
            </div>
        </div>
        </li>
        `
        });

        const joinedRoles = roles.join("");
        // console.log(output);
        const output = 
            subsectionHeader +
            "<ul>" + 
            joinedRoles +
            "</ul>"
        return output
    });

    const joinedSubsections = subsectionElements.join("")
    const sectionElement = `<header class="major">
                                <h2>Career</h2>
                            </header>
                            ` + joinedSubsections
    return sectionElement
};

function renderCareer(){
    console.log('renderCareer ran')
    const careerSectionString = generateCareerSectionString(CAREER);
    console.log(careerSectionString);
    $('#career .spotlight .content').html(careerSectionString);
}

///////////////////////////////////////////

function renderData(){
    renderPortfolio();
    renderCareer();
}

$(renderData);