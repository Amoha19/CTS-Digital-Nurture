import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authReq = req.clone({

    setHeaders: {

      Authorization: 'Bearer CTS-Digital-Nurture'

    }

  });

  console.log("Authorization Header Added");

  return next(authReq);

};