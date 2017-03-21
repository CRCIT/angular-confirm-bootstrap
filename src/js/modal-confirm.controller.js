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
})();

