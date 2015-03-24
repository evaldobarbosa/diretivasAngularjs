var App = angular.module('GDGDay',[]);

App.controller('MainController', function($scope) {
	$scope.teste = "GDG São Luís Day '1";
	$scope.nomeLista = 'Tarefas durante a palestra';

	$scope.tasks = [
		{'id': 1, title: 'Apresentar o angular', done: true, blocked: false},
		{'id': 2, title: 'Bower, HTML, Controller, ...', done: false, blocked: false},
		{'id': 3, title: 'Diretivas', done: false, blocked: true}
	];

	$scope.addTask = function(task) {
		if ( task.title.length == 0 ) {
			alert('informe um titulo');
			return false;
		}
		task.done = false;
		task.blocked = false;
		$scope.tasks.push(task);
		delete(task);
	}
});

App.directive('task', function() {
	return {
		require: '^todoList',
		restrict: 'E',
		replace: true,
		templateUrl : '/app/view/task.html'
	};
});

App.directive('todoList', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		templateUrl: '/app/view/todo-list.html',
		link: function(scope,element,attr) {
			element.find('h4').html( attr.title );
		}
	};
});