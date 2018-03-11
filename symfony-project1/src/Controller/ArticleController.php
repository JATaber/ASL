<?php
/**
 * Created by PhpStorm.
 * User: jamestaber
 * Date: 3/4/18
 * Time: 9:02 AM
 */

namespace App\Controller;


//use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\NotNull;
use Symfony\Component\Validator\Constraints\Email as EmailConstraint;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Validator\Constraints\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;


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
     * @Route("/registerForm", name="registerForm")
     */
    public function registerForm(Request $request){

        $form = $this->createFormBuilder(null)->setAction($this->generateUrl('registerForm'))
            ->add('name', Texttype::class, array('required'=>true, "constraints"=> [
                new NotBlank(array('message'=>'Can not be blank'))]))
            ->add('email', TextType::class, array('required'=>true, 'constraints'=>[
            new EmailConstraint(array('message'=>'This is not a correct way of typing email')),
            new NotBlank(array('message'=>'Con not be blank'))]))
            ->add('myfile', FileType::class, array('constraints'=>[
                new File(array(
                        'maxSize'=>'2M',
                        'mimeTypes'=>[
                            'application/pdf',
                            'application/x-pdf'],
                        'mimeTypesMessage'=> 'Please upload a valid PDF'
                    ))
            ]))
            ->add('save', SubmitType::class)
            ->getForm();

        $form->handleRequest($request);

        if($request->isMethod('POST')){

            if($form->isValid()){

                return $this->render('regdone.html.twig', array('title'=>'Register'));
            }
        }

        return $this->render('registerForm.html.twig', array('form'=>$form->createView()));

    }

}
