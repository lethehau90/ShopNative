import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector : 'user',
    templateUrl : 'modules/user/user.component.html',
    styleUrls : ['modules/user/user.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserComponent{
    text : string = "user"
}