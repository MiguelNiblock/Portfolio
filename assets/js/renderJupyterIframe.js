function styleJupyterIframe(){

    const obj = $.get('custom.css',
    function(data){

        const element = '<!--Added from JS-->'+
                        '<style type="text/css">'+
                        data+
                        '</style>'

        $('iframe.jupyter').contents().find('head').append(
            element
        );
    },
    'text');  
    
}

$(styleJupyterIframe);