jQuery(document).ready(function($) {
  $('#terminal').terminal(function(command, term){
    $.ajax({
      type: "GET",
      url: "router.php/" + command,
      data: { command: command },
      asynch: true
    })
    .done(function( msg ) {
      term.echo(JSON.parse(msg).result)
    })
    .fail(function() {
      term.echo("unknown command");
    });
  }, {prompt: '> ', name: 'test', greetings: "Welcome to my resume!\ntype [[;white;]help], to list supported commands"});

   $.ajax({
      type: "GET",
      url: "router.php/help",
      data: { command: "help" },
      asynch: true
    }).done(function(msg) {
	// do nothing.
	// this call is wake ther server up.
	// it's a heroku thing.
  });

});
