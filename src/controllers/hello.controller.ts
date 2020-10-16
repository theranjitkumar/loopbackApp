import {inject} from '@loopback/core';
import {get, Request, RestBindings} from '@loopback/rest';


export class HelloController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/hello')
  ping(): object {
    return {
      greeting: 'Hello from LoopBack',
    };
  }
}
