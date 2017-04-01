import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
import {Angular2TokenService} from "angular2-token";

@Component({
  selector: 'qs-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // constructor(private _iconRegistry: MdIconRegistry,
  //             private _domSanitizer: DomSanitizer) {
  //   this._iconRegistry.addSvgIconInNamespace('assets', 'teradata',
  //     this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata.svg'));
  //   this._iconRegistry.addSvgIconInNamespace('assets', 'github',
  //     this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
  //   this._iconRegistry.addSvgIconInNamespace('assets', 'covalent',
  //     this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent.svg'));
  //   this._iconRegistry.addSvgIconInNamespace('assets', 'covalent-mark',
  //     this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/covalent-mark.svg'));
  //   this._iconRegistry.addSvgIconInNamespace('assets', 'teradata-ux',
  //     this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/teradata-ux.svg'));
  //   this._iconRegistry.addSvgIconInNamespace('assets', 'appcenter',
  //     this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/appcenter.svg'));
  //   this._iconRegistry.addSvgIconInNamespace('assets', 'listener',
  //     this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/listener.svg'));
  //   this._iconRegistry.addSvgIconInNamespace('assets', 'querygrid',
  //     this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/querygrid.svg'));
  // }


  constructor(private _tokenService: Angular2TokenService) {
    this._tokenService.init({


      apiPath: 'http://192.168.43.150:3000',

      signInPath: 'admin_auth/sign_in',

      signOutPath: 'admin_auth/sign_out',
      validateTokenPath: 'admin_auth/validate_token',

      registerAccountPath: 'admin_auth',


    });
  }

}
