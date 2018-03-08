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
use Symfony\Component\Routing\Annotation\Route;


class ArticleController extends Controller{

    /**
     * @Route("/", name="index")
     */
    public function homepage(){

        //return new Response('TEST: Homepage');


        return $this->render('home.html.twig');
    }

    /**
     * @Route("/second", name="second")
     */
    public function nextpage(){

        //return new Response('TEST: second page!!!');
        return $this->render('second.html.twig');
    }

    /**
     * @Route("/number", name="lucky_number")
     */
    public function number(){
        $number = mt_rand(0,100);

        return $this->render('lucky/number.html.twig', array('number' => $number, ));

        //return new Response('<html><body>Lucky number: '.$number.'</body></html>');
    }

}
