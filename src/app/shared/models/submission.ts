import {Injectable} from '@angular/core';
import {Adapter} from './adapter';
import {Category} from "./category";
import {User} from "./user";

// "id": 5,
// "title": "Reddit - Dive into anything",
// "description": "",
// "url": "https://www.reddit.com/",
// "author": {
//     "id": "81ef8f5e-d132-4cf5-ba6c-6068ec783d4d",
//     "username": "n00dle",
//     "first_name": "",
//     "last_name": ""
// },
// "visits": 0,
// "score": {
//     "value__sum": null
// },
// "screenshot": "http://api.osint.directory/media/www.reddit.com.png",
// "votes": 0,
// "category": {
//     "name": "Random",
//     "slug": "random",
//     "description": ""
// },
// "created_at": "2022-07-18T00:52:19+0200",
// "updated_at": "2022-07-18T00:57:15+0200"

export class Submission {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public url: string,
    public author: User,
    public screenshot: string,
    public visits: number,
    public score: number,
    public category: Category,
    public created_at: Date,
    public updated_at: Date,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class SubmissionAdapter implements Adapter<Submission> {

  adapt(item: any): Submission {
    return new Submission(
      item.id,
      item.title,
      item.description,
      item.url,
      item.author,
      item.screenshot,
      item.visits,
      item.score.value__sum,
      item.category,
      item.created_at,
      item.updated_at,
    );
  }
}
