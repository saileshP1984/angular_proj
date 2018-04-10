import { Component, OnInit }    from '@angular/core';
import { NgModel }              from '@angular/forms';
import { FormsModule }          from '@angular/forms';
import { Router }               from '@angular/router';
import { ActivatedRoute }       from '@angular/router';
import { ApiService }           from '../../services/api.service';
import { constants }            from '../../services/constants.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public login = {

        details: {

            // email: '',
            email: 'sailesh28',

            // password: ''
            password: '1234',

            rememberCheck: false
        }

    };

    constructor(

        private activatedRoute: ActivatedRoute,
        private api: ApiService,
        private router: Router
    ) {

    };

    ngOnInit() {


    };

    loginClicked () {

        let seq = this.api.post(

            constants.APIS.LOGIN,
            {
                username: this.login.details.email,
                password: this.login.details.password
            }
        );

        seq
            .map(res => res.json())
            .subscribe(res => {

                // write your success function

                alert('logged in');

                this.router.navigate(['/client-profile']);
            },
            err => {

                // write your error function

                console.log('ERROR aaya par fir bhi redirect kar raha huu!');

                this.router.navigate(['/client-profile']);
            });
    };

    rememberMeChange () {

        alert('toggled to ' + this.login.details.rememberCheck)
    };

}
