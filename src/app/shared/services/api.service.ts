import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Submission, SubmissionAdapter} from "../models/submission";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Category, CategoryAdapter} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private adapter: SubmissionAdapter,
    private cAdapter: CategoryAdapter) {
  }

  getSubmissions(params: HttpParams): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/submissions/`, {params})
      .pipe(
        map(response => {
          response.results = response.results.map((result: Submission) => this.adapter.adapt(result));
          return response;
        }),
      );
  }

  getSubmission(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/submissions/${id}/`)
      .pipe(
        map(response => this.adapter.adapt(response)),
      );
  }

  sendSubmission(submission: Submission): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/submissions/`, submission)
      .pipe(
        map(response => this.adapter.adapt(response)),
      );
  }

  refreshScreenshot(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/submissions/${id}/refresh_screenshot/`);
  }

  upVote(id: number): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/submissions/${id}/up_vote/`, {});
  }

  downVote(id: number): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/submissions/${id}/down_vote/`, {});
  }

  getCategories(params: HttpParams): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/categories/`, {params})
      .pipe(
        map(response => {
          response.results = response.results.map((result: Category) => this.cAdapter.adapt(result));
          return response;
        }),
      );
  }
}
