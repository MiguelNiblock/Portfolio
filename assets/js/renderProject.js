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
        var html = converter.makeHtml(content);

        // get the h1 tag from the html
        var h1Re = /<h1[\s\S]*<\/h1>/g
        var h1Tag = html.match(h1Re)[0];
        // console.log(h1Tag)
        
        // get the <p> after the h1
        var h1pRe = /<\/h1>\s*<p>.*<\/p>/g
        var h1p = html.match(h1pRe)[0];
        // console.log(h1p)
        var pRe = /<p>.*<\/p>/g
        var headerP = h1p.match(pRe);

        // add h1 and p into the header innerHTML
        $('header').html(h1Tag+headerP);

        // remove the h1Tag and headerP from html string. so we're left with only the main content
        html = html.replace(h1Tag,"").replace(headerP,"")

        // remove <p>'s surrounding <span>'s
        var parspanRe = /<p><span.*<\/p>/g
        var removePar = function(string){return string.replace('<p>','').replace('</p>','')}
        try {html = html.replaceAll(parspanRe,removePar)} 
        catch (e) {console.log('error replacing parSpans')}

        // remove <p>'s inside <blockquotes>
        var quoteparRe = /<blockquote>[\s]*<p>.*<\/p>[\s]*<\/blockquote>/g
        try {html = html.replaceAll(quoteparRe,removePar)}
        catch (e) {console.log('error replacing quotePars')}

        console.log(html);
        $('section#content').html(html);
    },'text')
    
};

$(renderProject());