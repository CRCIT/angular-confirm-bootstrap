# "Angular Confirm Bootstrap"
[![License](http://img.shields.io/:license-apache-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

Client confirmation which shows an uib-bootstrap modal and offers the possibility to accept or cancel an action.

## Description

In order to use angular-confirm-bootstrap in your project:
* bower install https://github.com/CRCIT/angular-confirm-bootstrap.git
* Include the library in your bower.json file if you haven't previously used the option --save while executing bower install
* Include the module 'angular.confirm.bootstrap' as an angular dependency
* Use the directive 'angular-confirm-bootstrap' as a html element or attribute
* You can configure the following params:

    *  acb-confirm-text: Type: string, text button action Ok by default 'Ok'
    *  acb-button-confirm-class: Type: string, default: empty
    *  acb-button-confirm-icon: Type: string(<i class="fa fa-..."></i>), default: empty
    *  acb-cancel-text: Type: string, text button action Ok by default 'Cancel'
    *  acb-button-cancel-class: Type: string, default: empty
    *  acb-button-cancel-icon: Type: string(<i class="fa fa-..."></i>), default: empty
    *  acb-message: Type: string , main message, default: empty
    *  acb-title: Type: string , title modal, default: empty
    *  acb-on-confirm: Type: function, callback function
    *  acb-on-cancel: Type: function, callback function
    *  acb-size-modal: Type: string, size of modal by default 'lg'
    *  acb-position-buttons: Type: string, Allowed Values:[left, center, right(default)],  position of buttons 'Ok' and 'Cancel'
    *  acb-backdrop: Type: boolean|string, Allowed Values:[static(disables modal closing by click on the backdrop), false, true(default)], controls presence of a backdrop.

## Example

    <button 
        type="button" 
        class="btn btn-xs btn-danger" 
        angular-confirm-bootstrap  
        acb-title="{{ title }}" 
        acb-message="{{ message }}" 
        acb-button-confirm-class="btn btn-success"
        acb-button-confirm-icon="fa fa-trash"
        acb-button-cancel-icon="fa fa-times" 
        acb-on-confirm="confirmClicked = true"
        acb-on-cancel="cancelCliked = true"
        acb-size-modal="md" >
        <i class="fa fa-trash"></i>
    </button>

## License

Copyright 2017 CRC Information Technologies - Released under the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html).
