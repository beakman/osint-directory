import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

// "id": 1,
// "name": "Phone research",
// "slug": "phone-research",
// "description": ""

export class Category {
  constructor(
    public id: number,
    public name: string,
    public slug: string,
    public description: string,
  ) {
  }
}

@Injectable({
    providedIn: 'root'
})
export class CategoryAdapter implements Adapter<Category> {

  adapt(item: any): Category {
    return new Category(
      item.id,
      item.name,
      item.slug,
      item.description,
    );
  }
}
