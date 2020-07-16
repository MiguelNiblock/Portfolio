function renderProject(){
    //url must be /projects/index.html?id=:id
    //where :id must match a key in PROJECTS(Projects.js)
    const projectId = window.location.search.substring(1).split('=')[1];
    
    console.log("projectId: "+ projectId);

    $.get('../assets/js/Projects.js',function(data){

        project = PROJECTS[projectId];
        console.log(project);
        $('h1').text(project["h1Title"]);
        $('header.project p').text(project["headerP"])
    },
    'script')
};

$(renderProject());