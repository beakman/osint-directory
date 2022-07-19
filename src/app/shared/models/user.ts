import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class User {
  constructor(
    public id: number,
    public username: string,
    public email: string
  ) {
  }
}
