jQuery(function ($) {
	const todos = [];
	const list = $('.todos');
	const input = $('input');
	localStorage.setItem('todo', 'myValue')

	function addTodo(value) {
		todos.push(value);
		renderTodos();
	}


	function renderTodos() {
		list.empty();
		$.each(todos, function(i) {
			list.append(`
				<li>
					${this}
					<button class='delete' data-index="${i}">X</button>
					<button class='edit' data-index="${i}">Edit</button>
				</li>
			`);
		});
	}

	$(document).on('click', '.add', function() {
			list.empty();
			$.each(todos, function(i) {
				list.append(`
					<li>
						${this}
						<button class='delete' data-index="${i}">X</button>
						<button class='edit' data-index="${i}">Edit</button>
					</li>
				`);
			});
		});

	function removeTodo(index) {
		todos.splice(index, 1);
		renderTodos();
	}

	input.on('change', function(e) {
		addTodo(this.value);
		this.value = '';
	});

	$(document).on('click', '.delete', function() {
		const index = $(this).data('index');
		removeTodo(index);
		/*вызов ф-ции для редактирования*/
	})

	$(document).on('click', '.edit', function() {
		const index = $(this).data('index');
		$(".edit").click(function() {
 			$(this).replaceWith("<li>" + $(this.value).text() + "</li>");
		});
	});
});