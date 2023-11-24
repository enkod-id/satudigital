const httpStatus = require('http-status');
const { Todo } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a Todo
 * @param {Object} todoBody
 * @returns {Promise<Todo>}
 */
const createTodo = async (todoBody) => {
  return Todo.create(todoBody);
};

/**
 * Query for Todos
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTodos = async (filter, options) => {
  const Todos = await Todo.paginate(filter, options);
  return Todos;
};

/**
 * Get Todo by id
 * @param {ObjectId} id
 * @returns {Promise<Todo>}
 */
const getTodoById = async (id) => {
  return Todo.findById(id);
};

/**
 * Get Todo by email
 * @param {string} email
 * @returns {Promise<Todo>}
 */


/**
 * Update Todo by id
 * @param {ObjectId} todoId
 * @param {Object} updateBody
 * @returns {Promise<Todo>}
 */
const updateTodoById = async (todoId, updateBody) => {
  const todo = await getTodoById(todoId);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
 
  Object.assign(todo, updateBody);
  await todo.save();
  return todo;
};

/**
 * Delete Todo by id
 * @param {ObjectId} TodoId
 * @returns {Promise<Todo>}
 */
const deleteTodoById = async (TodoId) => {
  const Todo = await getTodoById(TodoId);
  if (!Todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  await Todo.remove();
  return Todo;
};

module.exports = {
  createTodo,
  queryTodos,
  getTodoById,
  updateTodoById,
  deleteTodoById,
};
