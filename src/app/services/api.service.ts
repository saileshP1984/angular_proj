import { Injectable }       from '@angular/core';
import { Http }             from '@angular/http';
import { RequestOptions }   from '@angular/http';
import { Headers }          from '@angular/http';
import { URLSearchParams }  from '@angular/http';
import { environment }      from '../../environments/environment';
import                           'rxjs/add/operator/map';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class ApiService {

    url: string;

    constructor(public http: Http) {

        // this.url = config.API_BASEPATH;
        // this.url = '';
        this.url = environment.DOMAIN.BASE_URL;
    };
   
    headerGet(endpoint: string, params ? : any) {
        
        let headers = new Headers();

        headers.append('Authorization', params.Authorization);

        let options = new RequestOptions({ headers: headers });

        // Support easy query params for GET requests
        if (params) {
            let p = new URLSearchParams();
            for (let k in params) {

                if(k && k == 'Authorization')
                    continue;

                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }

        return this.http.get(this.url + endpoint, options);
    }

    get(endpoint: string, params ? : any, options ? : RequestOptions) {
        if (!options) {
            options = new RequestOptions();
        }

        let headers = new Headers();
        headers.append('Authorization', '');

        // Support easy query params for GET requests
        if (params) {
            let p = new URLSearchParams();
            for (let k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }

        return this.http.get(this.url + endpoint, options);
    }

    post(endpoint: string, body: any, options ? : RequestOptions, params ? : any) {

        // Support easy query params for GET requests
        if (params) {
            let p = new URLSearchParams();
            for (let k in params) {
                p.set(k, params[k]);
            }
            // Set the search field if we have params and don't already have
            // a search field set in options.
            options.search = !options.search && p || options.search;
        }

        return this.http.post(this.url + endpoint, body, options);
    }

    put(endpoint: string, body: any, options ? : RequestOptions) {
        return this.http.put(this.url + endpoint, body, options);
    }

    delete(endpoint: string, options ? : RequestOptions) {
        return this.http.delete(this.url + endpoint, options);
    }

    patch(endpoint: string, body: any, options ? : RequestOptions) {
        return this.http.put(this.url + endpoint, body, options);
    }
}
