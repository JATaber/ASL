<?php
/**
 * Created by PhpStorm.
 * User: jamestaber
 * Date: 3/4/18
 * Time: 9:02 AM
 */

namespace App\Controller;


use Symfony\Component\HttpFoundation\Response;
//use Doctrine\DBAL\Types\TextType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Email as EmailConstraint;

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

    /**
     * @Route("/registration", name="registration")
     */
    public function registration(Request $request){

        $form = $this->createFormBuilder(null)
            ->setAction($this->generateUrl("registration"))
            ->add("name", TextType::class, array("required"=>true, "constraints"=>[
                new NotBlank(array("message"=>"Can not be blank"))
            ]))
            ->add("email", TextType::class, array("required"=>true, "constraints"=>[
                new EmailConstraint(array("message"=>"This is not a correct email")),
                new NotBlank(array("message"=>"Can not be blank"))
            ]))
            ->add("Register", SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if($request->isMethod('POST')){

            if($form->isValid()){

                return $this->render('regdone.html.twig', array('title'=>'Register'));
            }
        }

        return $this->render('registration.html.twig', array('title'=>'Register', "form"=>$form->createView()));
    }

    /**
     * @Route("/login", name="login")
     */
    public function login(Request $request){

        $form = $this->createFormBuilder(null)
            ->setAction($this->generateUrl("registration"))
            ->add("name", TextType::class, array("required"=>true, "constraints"=>[
                new NotBlank(array("message"=>"Can not be blank"))
            ]))
            ->add("email", TextType::class, array("required"=>true, "constraints"=>[
                new EmailConstraint(array("message"=>"This is not a correct email")),
                new NotBlank(array("message"=>"Can not be blank"))
            ]))
            ->add("Register", SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        return $this->render('login.html.twig', array('title'=>'Login', "form"=>$form->createView()));
    }

}
