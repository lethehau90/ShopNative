import { OnInit } from '@angular/core';
import { OnDestroy, AfterContentInit, SimpleChanges } from '@angular/core/core';

import { InjectableObject } from './injectableobject.base';
import { Subscription } from "rxjs/Subscription";
import { Router, ActivatedRoute } from '@angular/router';

import { DataService } from '../../core/services/data.service'
import { AuthenService } from '../../core/services/authen.service';
import { UtilityService } from '../../core/services/utility.service';
import { UploadService } from '../../core/services/upload.service';
//import { CachingService } from '../services/caching.service';
import { TestService } from "../../core/services/test.service";

import { SystemConstants } from '../../core/common/system.constants'
import { MessageContstants } from '../../core/common/message.constants';
import { UrlConstants } from '../../core/common/url.constants';
import { PageConstants } from "../../core/common/page.constants";
import { UserService } from "../../core/shared/user.service";


interface IBaseComponentOptions {
  hotkey?: boolean;
  tableName?: string
}

export class BaseComponent implements OnInit, OnDestroy, AfterContentInit {

  public _componentName: string = 'BaseComponent';

  public _dataService: DataService;
  public _authenService: AuthenService;
  public _utilityService: UtilityService;
  public _uploadService: UploadService;
  //public _cachingService: CachingService
  public _testService : TestService
  public _userService : UserService

  public _systemConstants: any;
  public _messageContstants: any;
  public _urlConstants: any;
  public _pageConstants: any;

  public _router: Router;
  public _activatedRoute: ActivatedRoute

  subscription: Subscription;

  constructor(private opt?: IBaseComponentOptions) {

    this._dataService = InjectableObject.injector.get(DataService);
    this._authenService = InjectableObject.injector.get(AuthenService);
    this._utilityService = InjectableObject.injector.get(UtilityService);
    this._uploadService = InjectableObject.injector.get(UploadService);
    //this._cachingService = InjectableObject.injector.get(CachingService);
    
    this._testService = InjectableObject.injector.get(TestService);
    this._userService = InjectableObject.injector.get(UserService);

    this._systemConstants = SystemConstants;
    this._messageContstants = MessageContstants;
    this._urlConstants = UrlConstants;
    this._pageConstants = PageConstants;

    this._router = InjectableObject.injector.get(Router);
    this._activatedRoute = InjectableObject.injector.get(ActivatedRoute);
  }

  ngOnInit() {
    console.log(`${(<any>this).constructor.name}: OnInit`);
    this._componentName = (<any>this).constructor.name;
    console.log("start ngOninit: " + this._componentName);

    //console.log(this.opt)
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log(`${(<any>this).constructor.name}: OnInit`);
    console.log("ngOnDestroy");
    console.log("start ngOninit: " + this._componentName);
    //this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add 'implements OnChanges' to the class.
    // console.log(`${(<any>this).constructor.name}: OnChanges`);
  }

  ngDoCheck() {
    // tslint:disable-next-line:max-line-length
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    // console.log(`${(<any>this).constructor.name}: DoCheck`);
  }
  ngAfterContentChecked() {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    //console.log(`${(<any>this).constructor.name}: AfterContentChecked`);
  }

  ngAfterContentInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    //console.log(`${(<any>this).constructor.name}: AfterContentInit`);
  }
}
