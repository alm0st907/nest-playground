import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    //log the datetime and the method of the request as interpolated string
    console.log('Hello From the Custom Middleware Logger');
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.originalUrl}`);
    next();
  }
}
