<?php

namespace App\Controller;

use App\Form\UserType;
use App\Entity\Login;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class RegController extends Controller
{
    /**
     * @Route("/register", name="register")
     */
    public function registerAction(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        //build form
        $login = new Login();
        $form = $this->createForm(UserType::class, $login);

        //handle submit on POST
        $form ->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){

            //encode password
            $password = $passwordEncoder->encodePassword($login, $login->getPlainPassword());
            $login->setPassword($password);

            //save the new user
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($login);
            $entityManager->flush();

            //direct them to success message
            return $this->render('regdone.html.twig');
        }

        return $this->render('registration.html.twig', array('form'=>$form->createView()));

    }
}