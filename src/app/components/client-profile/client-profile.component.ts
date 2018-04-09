import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { constants } from '../../services/constants.service';

@Component({
    selector: 'app-client-profile',
    templateUrl: './client-profile.component.html',
    styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {

    public client = {

        details: {

            profileId: 'client1',

            list: []
        }
    };

    constructor(

        private api: ApiService

    ) {

    };

    ngOnInit() {

        let seq = this.api.post(

            constants.APIS.CLIENT_PROFILE,
            {
                profileId: this.client.details.profileId
            }
        );

        seq
            .map(res => res.json())
            .subscribe(res => {

                // write your success function

                this.client.details.list = [1, 2, 3, 4, 5];
            },
            err => {

                // write your error function

                this.client.details.list = [1, 2, 3, 4, 5];
            });


    };

}
