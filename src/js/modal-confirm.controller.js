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
})();

