import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class User extends Entity {
  @property({
    "type": "string",
    "id": true,
    "generated": true
  })
  id: number;

  @property({
    type: 'string',
  })
  user_name?: string;

  @property({
    type: 'string',
  })
  user_email?: string;

  @property({
    type: 'string',
  })
  mobile_no?: string;

  @property({
    type: 'string',
  })
  password?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
