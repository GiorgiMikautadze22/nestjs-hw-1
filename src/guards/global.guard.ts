import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    // if (request.headers['user-agent'] !== 'PostmanRuntime/7.36.3') {
    //   return false;
    // }
    // console.log(request.headers);

    return true;
  }
}
