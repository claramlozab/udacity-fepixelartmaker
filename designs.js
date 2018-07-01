// Select color input
// Select size input
$(document).ready(function(){
    // When size is submitted by the user, call makeGrid()
        $("#sizePicker").submit( function makeGrid(grid){
            $("table tr").remove();
            var rows=$("#inputHeight").val();
            var cols=$("#inputWeight").val();
                for (var i=0; i<rows; i++){
                    $("table").append("<tr></tr>");
                    for (var j=0; j<cols; j++){
                        $("tr:last").append("<td></td>");
                        $("td").attr("class","cell");
                    }
                }
        grid.preventDefault();
    
    
        
        $(".cell").click(function(event){
            var paint = $("colorPicker").val();
            if ($(this).attr("style")){
                $(this).removeAttr("style");
            }else{
                $(this).attr("style","background-color:"+paint);
            }
        });
        });
    });
    