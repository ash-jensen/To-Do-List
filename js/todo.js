$(document).ready(function(e) {
	$('#add-todo').button({
		icons: {
			secondary: "ui-icon-circle-plus"
		}
	}).click(function() {
		$('#new-todo').dialog('open');
	}); //end click & button
	$('#new-todo').dialog({
		modal: true,
		autoOpen: false,
		buttons: {
			"Add task": function() {
				var taskName = $('#task').val();
				if (taskName === '') {
					return false;
				}
				var taskHTML = '<li><span class="done">%</span>';
				taskHTML += '<span class="delete">x</span>';
				taskHTML += '<span class="task"></span></li>';
				var $newTask = $(taskHTML);
				$newTask.find('.task').text(taskName);
				$newTask.hide();
				$('#todo-list').prepend($newTask);
				$newTask.show('clip',250).effect('highlight',1000);
				$(this).dialog('close');
			},
			"Cancel": function() {
				$(this).dialog('close');
			}
		},
		close: function() {
				$('#new-todo input').val('');
		}
	}); // end dialog
	$('#todo-list').on('click', '.done', function() {
		var $taskItem = $(this).parent('li');
		$taskItem.slideUp(250, function() {
			var $this = $(this);
			$this.detach();
			$('#completed-list').append($this);
			$this.slideDown();
		}); // end slideup	
	}); // end on
	$('.sortlist').sortable({
		connectWith: '.sortlist',
		cursor: 'pointer',
		placeholder: 'ui-state-highlight',
		cancel: '.delete,.done'
	}); // end sortable
	$('.sortlist').on('click', '.delete', function() {
		$(this).parent('li').effect('puff', function() {
			$(this).remove();
		}); // end parent & effect
	}); // end on 
$('#clear-list').button({
	icons: { 
		secondary: "ui-icon-trash"
	}
}).click(function() {
	$('#del-items').dialog('open');
}); // end button & click
$('#del-items').dialog({
	modal: true,
	autoOpen: false,
	buttons: {
		"Clear To-Do": function() {
			$('#todo-list li').remove();
		},
		"Clear Completed": function() {
			$('#completed-list li').remove();
		}
	}
}); //end dialog
}); // end ready




























