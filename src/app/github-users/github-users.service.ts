import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class GithubUserService {

    constructor(private readonly http: HttpClient) {

    }

    getUsers(searchTeam: any): any {
        return this.http.get(`https://api.github.com/search/users?q=${searchTeam}`)
    }
}
