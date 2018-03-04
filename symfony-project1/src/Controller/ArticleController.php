<?php
/**
 * Created by PhpStorm.
 * User: jamestaber
 * Date: 3/4/18
 * Time: 9:02 AM
 */

namespace App\Controller;


//use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class ArticleController extends Controller{

    public function homepage(){

        //return new Response('TEST: Homepage');

        return $this->render('home.html.twig');
    }

    public function nextpage(){

        //return new Response('TEST: second page!!!');
        return $this->render('second.html.twig');
    }

    public function number(){
        $number = mt_rand(0,100);

        return $this->render('lucky/number.html.twig', array('number' => $number, ));

        //return new Response('<html><body>Lucky number: '.$number.'</body></html>');
    }

}
