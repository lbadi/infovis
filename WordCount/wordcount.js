
var data = ['a' , 'b'];
$( document ).ready(function() {
    console.log( "ready!" );
    //var button = $('#search');
    //$('#search').on('click',(search()));
});

function search(){
    $.get(
        'http://www.infovis-wiki.net/index.php?title=Main_Page',
        {paramOne : 1, paramX : 'abc'},
        function(data) {
            alert('page content: ' + data);
        }
    );
    //httpGetAsync('http://www.google.com', function(response){
    //    var dom = parseToDom(response);
    //    var title = dom.find("title");
    //    alert(title);
    //});

    //if(req.status == 200){
    //    d3.select("body")
    //        .selectAll("p")
    //        .data(a)
    //        .enter()
    //        .append("p")
    //        .text(function(d, i) {return d[1];});
    //
    //    alert(req.responseText);
    //}else{
    //    d3.select("body")
    //        .selectAll("p")
    //        .data(a)
    //        .enter()
    //        .append("p")
    //        .text(function(d, i) {return d[1];});
    //}
}

function httpGetAsync(theUrl, callback)
{
    //var xmlHttp = new XMLHttpRequest();
    //xmlHttp.onreadystatechange = function() {
    //    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    //        callback(xmlHttp.responseText);
    //}
    //xmlHttp.open("GET", theUrl, true); // true for asynchronous
    //xmlHttp.send(null);

}

function parseToDom(data){
    var xmlDoc = $.parseXML(data);
    var dom = $ (xmlDoc);
    return dom;
}