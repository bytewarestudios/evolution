import { Observable } from 'rxjs';
import {serviceKeys } from './config/service-keys';
import { HttpService } from './libs/services/http.service';
import axios from 'axios';
import { LibraryContainer } from './ioc/libs-container/inversify.config';
import { TYPES } from './ioc/libs-container/interfaces/types';
import { IUrl } from './ioc/libs-container/interfaces/url.interface';

const url = LibraryContainer.get<IUrl>(TYPES.URL);

 export class Main{

   private httpService: HttpService;

   constructor() {
     this.requestSamples();
   }

   public run(): void {
     const welcomeTitle = `Welcome to the Evolution of Learning New Things`;
     console.log('*******test********');
     console.log('query params: ', url.queryParamsToObject(window.location.search));

   }

   public requestSamples(): void {
     this.httpService = new HttpService();


     // Get Samples

     // 200 success
     this.httpService
      .get(serviceKeys['getArticles'].url)
      .then(data => console.log('200 ok, successful get request:', data))
      .catch(error => {
        console.error(error)
      });

     // Post Samples

     // 201 created
     this.httpService
     .post(
       serviceKeys['postArticle'].url,
       {
         title: 'foo',
         body: 'bar',
         userId: 1
       }
     )
     .then(data => {
       console.log('201 created, successful post request: ', data);
     })
     .catch(error => {
       console.error(error)
     });

   }
 }

 const main = new Main().run();
