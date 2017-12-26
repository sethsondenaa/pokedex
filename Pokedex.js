$().ready(function(){
    //Adds all Pokemon to page
    for(var i = 1; i < 152; i++) {
        $('#pokemon').append('<img id="'+i+'" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+i+'.png">')
    }

    //Adds selected Pokemon to Pokedex and displays information about the selected Pokemon
    $('body').on('click', 'img', function(){
        var id = $(this).attr('id');
        var html = "";
        $.get("https://pokeapi.co/api/v2/pokemon/"+id+"/", function(res){
            html += "<h1>"+res.name.charAt(0).toUpperCase()+res.name.slice(1)+"</h1><img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+id+".png' /><h2>Types</h2><ul>";
            for(var i = 0; i < res.types.length; i++) {
                html += "<li>"+res.types[i].type.name+"</li>";
            }
            html += "</ul><h2>Height</h2><p>"+res.height+"</p><h2>Weight</h2><p>"+res.weight+"</p>";
            $('#pokedex').html(html);
        }, "JSON");
    })
})
