function styleJupyterIframe(){

    $.get('../assets/css/jupyterStyles.css',
    function(data){
        console.log('styleJupyterIframe ran')

        const element = '<!--Added from JS-->'+
                        '<style type="text/css">'+
                        data+
                        '</style>'
        console.log(element)


        console.log($('iframe.jupyter').contents().find('head'))

        $('iframe.jupyter').contents().find('head').append(
            element
        );
    },
    'text');  
    
}

$(styleJupyterIframe);