/*!
 * angular.confirm.bootstrap
 * null
 * @license undefined
 * v0.1.2
 * 2017-01-17T11:06:35.252Z
 */
(function () {
  'use strict';

  /**
   * @ngdoc module
   * @name angular.confirm.bootstrap
   * @description Module that asks for a confirmation and offers the possibility to accept or cancel the action
   */
  angular.module('angular.confirm.bootstrap', [
    'ui.bootstrap.modal'
  ]);

})();

(function () {
  'use strict';

  angular
    .module('angular.confirm.bootstrap')
    .controller('AngularConfirmBootstrapController', angularConfirmBootstrapController);

  function angularConfirmBootstrapController($uibModalInstance, Setting) {
    var vm = this;
    vm.dataModal = Setting.data;

    vm.closeModal = function () {
      $uibModalInstance.dismiss('cancel');
    };

    vm.actionCancel = function () {
      if (vm.dataModal.onCancel !== undefined) {
        if (typeof(vm.dataModal.onCancel) === typeof(Function)) {
          vm.dataModal.onCancel();
        }
      }
      $uibModalInstance.close(false);
    };

    vm.actionOk = function () {
      if (vm.dataModal.onConfirm !== undefined) {
        if (typeof(vm.dataModal.onConfirm) === typeof(Function)) {
          vm.dataModal.onConfirm();
        }
      }
      $uibModalInstance.close(false);
    };

  }
  angularConfirmBootstrapController.$inject = ["$uibModalInstance", "Setting"];
})();


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
    directiveConfirmController.$inject = ["$uibModal", "$translate"];
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
        message: vm.message ? vm.message : 'Sample message',
        title: vm.title ? vm.title : 'Sample title',
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

(function(module) {
try {
  module = angular.module('angular.confirm.bootstrap');
} catch (e) {
  module = angular.module('angular.confirm.bootstrap', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modal-confirm.html',
    '<div class="modal-header"><button type="button" class="close" ng-click="vm.closeModal()" aria-hidden="true">x</button><h4 class="modal-title">{{vm.dataModal.title}}</h4></div><div class="modal-body"><div class="row"><div class="col-md-12"><h5>{{vm.dataModal.message}}</h5></div></div></div><div class="modal-footer" ng-style="{\'text-align\' : vm.dataModal.positionButtons}"><button type="button" ng-click="vm.actionCancel()" ng-class="vm.dataModal.buttonCancelClass"><i ng-class="vm.dataModal.buttonCancelIcon"></i> {{vm.dataModal.cancelText}}</button> <button type="button" ng-click="vm.actionOk()" ng-class="vm.dataModal.buttonConfirmClass"><i ng-class="vm.dataModal.buttonConfirmIcon"></i> {{vm.dataModal.confirmText}}</button></div>');
}]);
})();
