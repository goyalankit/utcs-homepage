 <?php 
	$url = 'http://resume.ankitgoyal.me/command/' . $_GET["command"] . '?command='. $_GET["command"]. '';
	$response = file_get_contents($url);
	echo $response;
 ?> 

