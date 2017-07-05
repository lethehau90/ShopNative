import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UrlConstants } from '../../core/common/url.constants';
import { UtilityService } from './utility.service';

@Injectable()
export class TestService {
    testMessage(message : string) {
        console.log("log test service  "+message)
        return message;
    }
}