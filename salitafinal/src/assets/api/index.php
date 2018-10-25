<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS");
 header("Access-Control-Allow-Headers: Content-Type");
 header("Allow: GET,POST,PUT,OPTIONS");


use \Firebase\JWT\JWT as jwt; 

require_once './vendor/autoload.php';
//require '../composer/vendor/autoload.php';

/*require '../composer/vendor/autoload.php';
require_once './Entidades/bd/AccesoDatos.php';
require_once './Entidades/bicicletaApi.php';
require_once './Entidades/usuarioApi.php';
require_once './Entidades/ventaApi.php';
require_once './Entidades/AutentificadorJWT.php';
require_once './Entidades/MWparaCORS.php';
require_once './Entidades/MWparaAutentificar.php';*/

require_once './Anteojos.php';
require_once './Usuario.php';
require_once './mw.php';

$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;


$app = new \Slim\App(["settings" => $config]);




$app->group('/puntajeUno',function()
{
    $this->post('[/]', function (Request $request, Response $response) { 
  
  
    ///echo Anteojos::Agregar($request,$response);
    echo Anteojos::puntajeUno($request,$response);
    //$response->getBody()->write("Empleado Agregado");
    return $response;



  });
  
   $this->get('[/]', function (Request $request, Response $response) { 
  
  
    ///echo Anteojos::Agregar($request,$response);
    echo Anteojos::Listado($request,$response);
    //$response->getBody()->write("Empleado Agregado");
    return $response;



  });
    
    
    

});

$app->group('/puntajeDos',function()
{
    $this->post('[/]', function (Request $request, Response $response) { 
  
  
    ///echo Anteojos::Agregar($request,$response);
    echo Anteojos::puntajeDos($request,$response);
    //$response->getBody()->write("Empleado Agregado");
    return $response;



  });
  
  
    
    
    

});

$app->group('/puntajeCuatro',function()
{
    $this->post('[/]', function (Request $request, Response $response) { 
  
  
    ///echo Anteojos::Agregar($request,$response);
    echo Anteojos::puntajeCuatro($request,$response);
    //$response->getBody()->write("Empleado Agregado");
    return $response;



  });
  
  
    
    
    

});

$app->group('/puntajeTres',function()
{
    $this->post('[/]', function (Request $request, Response $response) { 
  
  
    ///echo Anteojos::Agregar($request,$response);
    echo Anteojos::puntajeTres($request,$response);
    //$response->getBody()->write("Empleado Agregado");
    return $response;



  });
  
  
    
    
    

});



$app->group('/registrar',function()
{
    $this->post('[/]', function (Request $request, Response $response) { 
  
  
    ///echo Anteojos::Agregar($request,$response);
    echo Anteojos::Registrar($request,$response);
    //$response->getBody()->write("Empleado Agregado");
    return $response;



  });
    
    
    

});

$app->group('/login',function()
{
    $this->post('[/]', function (Request $request, Response $response) { 
  
  
    ///echo Anteojos::Agregar($request,$response);
    echo Anteojos::Login($request,$response);
    //$response->getBody()->write("Empleado Agregado");
    return $response;



  });
    
    
    

});



$app->get('[/]', function (Request $request, Response $response) { 
  
   
   
   
    $response->getBody()->write("Listado de usuarios");
    return $response;



});




  




            

            

            




$app->group('/listados',function(){

  $this->get('[/]', function (Request $request, Response $response) { 
     /* $token = $request->getParsedBody()['token'];
      $encargado=Anteojo::EsEncargado($token);
    
      $arrayDeMedias= Anteojo::TraerTodosAnteojos($request,$response);
      if($encargado){
          //todos los datos menos el ID del listado
        
        $cant= count($arrayDeMedias);
         for($i=0;$i<$cant;$i++){
          $response->getBody()->write(  $arrayDeMedias[$i]->color." ".$arrayDeMedias[$i]->marca ." ".$arrayDeMedias[$i]->aumento." ".$arrayDeMedias[$i]->precio."<br>");
         }*/

         /*$arrayDeMedias= Media::Listado($request,$response);
         $cant= count($arrayDeMedias);
         for($i=0;$i<$cant;$i++)
         {
          $response->getBody()->write(  $arrayDeMedias[$i]->color." ".$arrayDeMedias[$i]->marca ." ".$arrayDeMedias[$i]->precio." ".$arrayDeMedias[$i]->talle."<br>");
         }*/


         //$token = $request->getParsedBody()['token'];
         $token= $request->getHeader('token');
         //$id= $request->getHeader('id');

         $encargado=Anteojos::EsEncargado($token);
         $propietario=Anteojos::EsPropietario($token);

         if($encargado)
         {
            echo mw::ListadoEncargado($request,$response);
            echo Anteojos::ListadoVentas($request,$response);
           //$this->get('/', \Media::class . ':Listado');
           //echo Media::Listado($request,$response);

          /* $arrayDeMedias= Media::Listado($request,$response);
            $cant= count($arrayDeMedias);
            $arrayColores=array();
            for($i=0;$i<$cant;$i++)
            {
                $response->getBody()->write( $arrayDeMedias[$i]->color." ".$arrayDeMedias[$i]->marca ." ".$arrayDeMedias[$i]->precio." ".$arrayDeMedias[$i]->talle."<br>");
                array_push($arrayColores,$arrayDeMedias[$i]->color);
            }*/





         }
         else if($propietario)
         {
           echo mw::ListadoPropietario($request,$response);
         }
         else
         {
                echo "Tiene que ser propietario o encargado";
         }
         


         
         //echo "<br>";

         

     
       
      
    });

 
  });



$app->run();