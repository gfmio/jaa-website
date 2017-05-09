//
// Simple To Do data model
//

module.exports = function(content) {
  const Todo = function(content, completed) {
    this.content = content
    if (completed == undefined) {
      completed = False
    }
    this.completed = completed

    this.toggleComplete = function() {
      this.completed = !(this.completed)
    }
  }

  return new Todo(content)
}
