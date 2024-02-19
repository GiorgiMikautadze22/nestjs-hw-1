import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    if (request.headers['is-admin'] !== 'true') {
      console.log('failure');

      return false;
    }
    console.log('success');

    return true;
  }
}
@Injectable()
export class KeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    if (request.headers.key !== '123') {
      console.log('failure');

      return false;
    }
    console.log('success');

    return true;
  }
}
