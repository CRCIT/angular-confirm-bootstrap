'use strict';

describe('AngularConfirmBootstrapController', function () {
  var ele, $scope, $compile, recompile;

  beforeEach(module('angular.confirm.bootstrap'));
  beforeEach(inject(function ($rootScope, _$compile_) {
    $scope = $rootScope;
    $compile = _$compile_;

    //TODO TEST

    /*    $scope.gridOptions = getGridOptions();

     recompile = function() {
     ele = angular.element(
     '<div>' +
     '<input id="single-input" type="text" ui-grid-single-filter-value/>' +
     '<div id="grid" ui-grid-bootstrap-styles ui-grid="gridOptions" class="grid" ui-grid-single-filter></div>' +
     '</div>'
     );
     $compile(ele)($scope);
     $scope.$digest();
     };

     recompile();

     }));


     describe('Comprobamos el uso de la directiva ui-grid', function () {

     it('debería tener 3 filas', function () {
     var rows = $(ele).find('.ui-grid-row');
     expect(rows.length).toEqual(4);
     });

     });

     describe('La directiva ui-grid-single-filter', function () {

     it('filtra los resultados del grid para cualquier valor del input con directiva ui-grid-single-filter-value', function () {
     var input =  $(ele).find('#single-input').val(1);
     input.triggerHandler('keyup');
     $scope.$digest();
     var rows = $(ele).find('.ui-grid-row');
     expect($(ele).find('#single-input').val()).toEqual("1");
     expect(rows.length).toEqual(2);
     });

     it('filtra los resultados del grid para cualquier valor del input con directiva ui-grid-single-filter-value', function () {
     var input =  $(ele).find('#single-input').val("1 3 desc");
     input.triggerHandler('keyup');
     $scope.$digest();
     var rows = $(ele).find('.ui-grid-row');
     expect(rows.length).toEqual(1);
     });

     });

     describe('En el filtrado de celdas mendiante custom cell templates', function () {

     it('El valor se busca en las celdas renderizadas', function () {
     var input =  $(ele).find('#single-input').val("cell template");
     input.triggerHandler('keyup');
     $scope.$digest();
     var rows = $(ele).find('.ui-grid-row');
     expect(rows.length).toEqual(1);
     });

     it('El valor se busca en las celdas renderizadas eliminando los elementos HTML', function () {
     var input =  $(ele).find('#single-input').val("pencil");
     input.triggerHandler('keyup');
     $scope.$digest();
     var rows = $(ele).find('.ui-grid-row');
     expect(rows.length).toEqual(0);
     });

     });


     //

     function getGridOptions() {
     var gridOptions = {};

     gridOptions = {
     onRegisterApi: function( gridApi ){ $scope.gridApi = gridApi; },
     columnDefs:[
     {field:"code"},
     {field:"description"},
     {field:'cellTemplateProperty', cellTemplate:'<div class="ui-grid-cell-contents" ><i class="fa fa-pencil"></i> cell {{grid.getCellValue(row, col)}} </div>' }
     ],
     data:[
     {code:'1', description:'description 1', cellTemplateProperty:'template'},
     {code:'2', description:'description 2', cellTemplateProperty:''},
     {code:'3', description:'description 3', cellTemplateProperty:''},
     {code:'13', description:'description 13', cellTemplateProperty:''}
     ]
     };

     return gridOptions;
     }*/

  }));
});
