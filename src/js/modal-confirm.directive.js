(function () {
  'use strict';

  angular
    .module('angular.confirm.bootstrap')
    .directive('angularConfirmBootstrap', angularConfirmBootstrapDirective);

  /** @ngInject */
  function angularConfirmBootstrapDirective() {
    /**
     * directive.scope.options {
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
    * }
     **/


    var directive = {
      restrict: 'EA',
      templateUrl: '',
      scope: {
        confirmText: '@',
        buttonConfirmClass: '@',
        buttonConfirmIcon: '@',
        cancelText: '@',
        buttonCancelClass: '@',
        buttonCancelIcon: '@',
        message: '@',
        title: '@',
        onConfirm: '&',
        onCancel: '&',
        sizeModal: '@',
        positionButtons: '@',
        backdrop: '@'
      },
      link: function (scope, element, attr) {
        $(element).on('click', function (e) {
          e.stopPropagation();
          scope.vm.openModal();
        });
      },
      controller: directiveConfirmController,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;

    /** @ngInject */
    function directiveConfirmController($uibModal, $translate) {
      var vm = this;

      vm.confirmValues = {
        confirmText: vm.confirmText ? vm.confirmText : "Aceptar",
        buttonConfirmIcon: vm.buttonConfirmIcon ? vm.buttonConfirmIcon : '',
        buttonConfirmClass: vm.buttonConfirmClass ? vm.buttonConfirmClass : 'btn',
        cancelText: vm.cancelText ? vm.cancelText : "Cancelar",
        buttonCancelIcon: vm.buttonCancelIcon ? vm.buttonCancelIcon : '',
        buttonCancelClass: vm.buttonCancelClass ? vm.buttonCancelClass : 'btn btn-default',
        message: vm.message ? vm.message : '',
        title: vm.title ? vm.title : '',
        onConfirm: vm.onConfirm,
        onCancel: vm.onCancel,
        positionButtons: vm.positionButtons ? vm.positionButtons : 'right',
        sizeModal: vm.sizeModal ? vm.sizeModal : 'md',
        backdrop: vm.backdrop ? vm.backdrop : 'true'
      };

      vm.openModal = function () {
        var modalInstance = $uibModal.open({
          keyboard: false,
          backdrop: vm.confirmValues.backdrop,
          templateUrl: 'modal-confirm.html',
          controller: 'AngularConfirmBootstrapController',
          size: vm.confirmValues.sizeModal,
          controllerAs: 'vm',
          resolve: {
            Setting: function () {
              return {
                data: vm.confirmValues
              };
            }
          }
        });

        modalInstance.result.then(function (data) {

        });
      };

    }

  }
})();
