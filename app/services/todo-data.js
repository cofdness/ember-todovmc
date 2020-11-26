import Service from '@ember/service';
import {tracked} from "@glimmer/tracking";
import {action} from "@ember/object";

export default class TodoDataService extends Service {
  @tracked todos = [];

  get incomplete() {
    return this.todos.filter(todo => todo.isCompleted === false);
  }

  get all(){
    return this.todos;
  }

  get todoCountIsLittle() {
    return this.todos.length <= 1;
  }

  get completed() {
    return this.todos.filter(todo => todo.isCompleted);
  }

  @action
  add(text) {
    let newTodo = new Todo(text);
    this.todos = [...this.todos, newTodo];
  }

  @action
  clearCompleted() {
    this.todos = this.incomplete;
  }

  @action
  toggleCompletion(todo) {
    todo.isCompleted = !todo.isCompleted;
  }

}


class Todo {
  @tracked text = '';
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}
