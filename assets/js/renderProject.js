function renderProject(){
    //url must be /projects/index.html?id=:id
    //where :id must match a key in PROJECTS(Projects.js)
    const projectId = window.location.search.substring(1).split('=')[1];
    
    console.log("projectId: "+ projectId);

    // $.get('../assets/js/Projects.js',function(data){

    //     project = PROJECTS[projectId];
    //     console.log(project);
    //     $('h1').text(project["h1Title"]);
    //     $('header.project p').text(project["headerP"])
    // },
    // 'script')

    $.ajaxSetup({
        async: false
      });

    $.get(`${projectId}.md`,function(data){
        // data is the raw markdown text
        // console.log(data);

        // separate md into content and head
        contentRe = /#\s/g;
        var posContent = data.search(contentRe);
        // console.log(posContent);
        var content = data.slice(posContent);
        // console.log(content);
        var head = data.split(contentRe)[0];
        // console.log(head);

        // the head from md goes in the DOM head
        $('head').append(head);

        // convert the md content into html
        converter = new showdown.Converter();
        let html = converter.makeHtml(content);

        // get the h1 tag from the html
        const h1Re = /<h1[\s\S]*<\/h1>/g
        const h1Tag = html.match(h1Re)[0];
        // console.log(h1Tag)
        
        // get the <p> after the h1
        const h1pRe = /<\/h1>\s*<p>.*<\/p>/g
        const h1p = html.match(h1pRe)[0];
        // console.log(h1p)
        const pRe = /<p>.*<\/p>/g
        const headerP = h1p.match(pRe);

        // add h1 and p into the header innerHTML
        $('header').html(h1Tag+headerP);

        // remove the h1Tag and headerP from html string. so we're left with only the main content
        html = html.replace(h1Tag,"").replace(headerP,"").trim();
        console.log("html type: "+typeof(html));
        console.log("html: \n"+html);

        // remove <p>'s surrounding <span>'s
        const parspanRe = /<p><span.*<\/span><\/p>/g;
        const removePar = function(string){return string.replace('<p>','').replace('</p>','')};

        try {html = html.replace(parspanRe,removePar)} 
        catch (e) {
            console.log('error replacing parSpans. '+e);
    };

        // remove <p>'s inside <blockquotes>
        const quoteparRe = /<blockquote>[\s]*<p>.*<\/p>[\s]*<\/blockquote>/g;
        try {html = html.replace(quoteparRe,removePar)}
        catch (e) {
            console.log('error replacing quotePars. '+e);
        }

        // console.log(html);
        $('section#content').html(html);
    },'text');
    
};

$(renderProject());