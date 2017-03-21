/*!
 * angular.confirm.bootstrap
 * null
 * @license undefined
 * v0.1.4
 * 2017-03-21T14:15:16.028Z
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
      if (vm.dataModal.acbOnCancel !== undefined) {
        if (typeof(vm.dataModal.acbOnCancel) === typeof(Function)) {
          vm.dataModal.acbOnCancel();
        }
      }
      $uibModalInstance.close(false);
    };

    vm.actionOk = function () {
      if (vm.dataModal.acbOnConfirm !== undefined) {
        if (typeof(vm.dataModal.acbOnConfirm) === typeof(Function)) {
          vm.dataModal.acbOnConfirm();
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
    directiveConfirmController.$inject = ["$uibModal", "$translate"];
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

(function(module) {
try {
  module = angular.module('angular.confirm.bootstrap');
} catch (e) {
  module = angular.module('angular.confirm.bootstrap', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('modal-confirm.html',
    '<div class="modal-header"><button type="button" class="close" ng-click="vm.closeModal()" aria-hidden="true">x</button><h4 class="modal-title">{{vm.dataModal.acbTitle}}</h4></div><div class="modal-body"><div class="row"><div class="col-md-12"><h5>{{vm.dataModal.acbMessage}}</h5></div></div></div><div class="modal-footer" ng-style="{\'text-align\' : vm.dataModal.acbPositionButtons}"><button type="button" ng-click="vm.actionCancel()" ng-class="vm.dataModal.acbButtonCancelClass"><i ng-class="vm.dataModal.acbButtonCancelIcon"></i> {{vm.dataModal.acbCancelText}}</button> <button type="button" ng-click="vm.actionOk()" ng-class="vm.dataModal.acbButtonConfirmClass"><i ng-class="vm.dataModal.acbButtonConfirmIcon"></i> {{vm.dataModal.acbConfirmText}}</button></div>');
}]);
})();
