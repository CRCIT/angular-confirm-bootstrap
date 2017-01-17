# "Angular Confirm Bootstrap"
[![License](http://img.shields.io/:license-apache-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

Client confirmation which offers the possibility to accept or cancel an action.

## Description

Para utilizar angular-confirm-bootstrap en tu proyecto:
* bower install https://github.com/CRCIT/angular-confirm-bootstrap.git
* Incluir el modulo en el bower.json en caso de no haber utilizado el comando --save al ejecutar el bower install
* Poner directiva angular-confirm-bootstrap en un atributo del html
* Utilizar los parámetros deseados de esta lista para personalizar el confirm:

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

Copyright 2016 CRC Information Technologies - Released under the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html).
