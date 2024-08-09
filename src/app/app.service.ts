import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class DataService {
    constructor(private http: HttpClient) {}

    getDataService() {
        const url = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders/?$skiptoken=10447";
        return this.http.get(url);
    }
}