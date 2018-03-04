<?php
/**
 * Created by PhpStorm.
 * User: jamestaber
 * Date: 3/4/18
 * Time: 9:02 AM
 */

namespace App\Controller;


use Symfony\Component\HttpFoundation\Response;

class ArticleController{

    public function homepage(){

        return new Response('TEST: Homepage');
    }

}
