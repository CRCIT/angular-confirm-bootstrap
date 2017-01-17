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

    *  confirmText: Type: string, text button action Ok by default 'Ok'
    *  buttonConfirmClass: Type: string, default: empty
    *  buttonConfirmIcon: Type: string(<i class="fa fa-..."></i>), default: empty
    *  cancelText: Type: string, text button action Ok by default 'Cancel'
    *  buttonCancelClass: Type: string, default: empty
    *  buttonCancelIcon: Type: string(<i class="fa fa-..."></i>), default: empty
    *  message: Type: string , main message
    *  title: Type: string , title modal
    *  onConfirm: Type: function, callback function
    *  onCancel: Type: function, callback function
    *  sizeModal: Type: string, size of modal by default 'lg'
    *  positionButtons: Type: string, Allowed Values:[left, center, right(default)],  position of buttons 'Ok' and 'Cancel'
    *  backdrop: Type: boolean|string, Allowed Values:[static(disables modal closing by click on the backdrop), false, true(default)], controls presence of a backdrop.

## License

Copyright 2017 CRC Information Technologies - Released under the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html).
