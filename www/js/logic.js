var link = location.protocol + "//" +location.host

$( document ).ready(function() {
$.ajax({

    url: (link + '/asset'),
    type: 'get',
    datatype:'json',
    contentType: 'application/json',
    error: function(var1){
       },
    success:function(var1)
        {
var var1 = JSON.parse(var1);
        //  console.log(var1);
          for (var i=0;i<var1.length;++i){

            $('#myTable tbody').append(
              "<tr><td align = \"center\">" + var1[i].Id + "</td>" +
        			"<td align = \"center\">" + var1[i].Name + "</td>" +
        			"<td align = \"center\">" + var1[i].Description + "</td>" +
        			"<td align = \"center\"><a href=\"" + var1[i].ReferenceLink +"\">" + var1[i].ReferenceLink + "</a></td>" +
              "<td align = \"center\">" + var1[i].ApproximateCost + "</td>" +
              "<td align = \"center\"><img src=\"/" + var1[i].Images + "\" alt=\"\"  height=100 width=100></img>"+ "</td>" +


        			"</tr>"
            );}
        }
   });
});
