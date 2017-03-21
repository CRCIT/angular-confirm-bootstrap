(function () {
  'use strict';

  angular
    .module('angular.confirm.bootstrap')
    .directive('angularConfirmBootstrap', angularConfirmBootstrapDirective);

  /** @ngInject */
  function angularConfirmBootstrapDirective() {
    /**
     * directive.scope.options {
        *  acbConfirmText: Type: string, text button action Ok by default 'Ok'
        *  acbButtonConfirmClass: Type: string, default: empty
        *  acbButtonConfirmIcon: Type: string(<i class="fa fa-..."></i>), default: empty
        *  acbCancelText: Type: string, text button action Ok by default 'Cancel'
        *  acbButtonCancelClass: Type: string, default: empty
        *  acbButtonCancelIcon: Type: string(<i class="fa fa-..."></i>), default: empty
        *  acbMessage: Type: string , main message
        *  acbTitle: Type: string , title modal
        *  acbOnConfirm: Type: function, callback function
        *  acbOnCancel: Type: function, callback function
        *  acbSizeModal: Type: string, size of modal by default 'lg'
        *  acbPositionButtons: Type: string, Allowed Values:[left, center, right(default)],  position of buttons 'Ok' and 'Cancel'
        *  acbBackdrop: Type: boolean|string, Allowed Values:[static(disables modal closing by click on the backdrop), false, true(default)], controls presence of a backdrop.
    * }
     **/


    var directive = {
      restrict: 'EA',
      templateUrl: '',
      scope: {
        acbConfirmText: '@',
        acbButtonConfirmClass: '@',
        acbButtonConfirmIcon: '@',
        acbCancelText: '@',
        acbButtonCancelClass: '@',
        acbButtonCancelIcon: '@',
        acbMessage: '@',
        acbTitle: '@',
        acbOnConfirm: '&',
        acbOnCancel: '&',
        acbSizeModal: '@',
        acbPositionButtons: '@',
        acbBackdrop: '@'
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
        acbConfirmText: vm.acbConfirmText ? vm.acbConfirmText : "Ok",
        acbButtonConfirmIcon: vm.acbButtonConfirmIcon ? vm.acbButtonConfirmIcon : '',
        acbButtonConfirmClass: vm.acbButtonConfirmClass ? vm.acbButtonConfirmClass : 'btn',
        acbCancelText: vm.acbCancelText ? vm.acbCancelText : "Cancel",
        acbButtonCancelIcon: vm.acbButtonCancelIcon ? vm.acbButtonCancelIcon : '',
        acbButtonCancelClass: vm.acbButtonCancelClass ? vm.acbButtonCancelClass : 'btn btn-default',
        acbMessage: vm.acbMessage ? vm.acbMessage : '',
        acbTitle: vm.acbTitle ? vm.acbTitle : '',
        acbOnConfirm: vm.acbOnConfirm,
        acbOnCancel: vm.acbOnCancel,
        acbPositionButtons: vm.acbPositionButtons ? vm.acbPositionButtons : 'right',
        acbSizeModal: vm.acbSizeModal ? vm.acbSizeModal : 'md',
        acbBackdrop: vm.acbBackdrop ? vm.acbBackdrop : 'true'
      };

      vm.openModal = function () {
        var modalInstance = $uibModal.open({
          keyboard: false,
          backdrop: vm.confirmValues.acbBackdrop,
          templateUrl: 'modal-confirm.html',
          controller: 'AngularConfirmBootstrapController',
          size: vm.confirmValues.acbSizeModal,
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
