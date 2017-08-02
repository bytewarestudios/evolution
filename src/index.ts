import { Observable } from 'rxjs';
import { Url } from './libs/url';
import axios from 'axios';


 class Main{

   constructor() {
   }

   static run(): void {


     // test

     // let Carousel = document.querySelector('#data-carousel div');
     // Carousel.color = "#FFFF00";



     // test


     // example of using class from the libs folder
     const url = new Url();

     const googleSearchQueryParams = url.queryParamsToObject('https://www.google.com/search?q=typescript+configurations&oq=typescript+configurations&aqs=chrome..69i57.6206j1j8&sourceid=chrome&ie=UTF-8');


     const welcomeTitle = `Welcome to Evolution`;

     document.querySelector('#welcome-title').innerHTML = welcomeTitle;

     // Simple example of an Observable
     const simpleRxjsExample$: Observable<number> = Observable.from([1, 2, 3, 4])
       .map(number => number + 1)
       .take(1);

       simpleRxjsExample$
       .subscribe(result => {
         document.querySelector('#simple-rxjs-example').innerHTML = `
         // Simple example of an Observable
         const simpleRxjsExample$ = Observable.from([1, 2, 3, 4])
         .map(number => number + 1)
         .take(1);
              
         Value of the observable is : ${result}

         Result returned from the Url.queryParamsToObject() method:
         ${googleSearchQueryParams}`;
       });

     //axios xhr get request
     axios.get('/llane.java.api/getArticles')
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });

   }

 }

 Main.run();
