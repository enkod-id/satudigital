const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const todoValidation = require('../../validations/todo.validation');
const todoController = require('../../controllers/todo.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageTodos'), validate(todoValidation.createTodo), todoController.createTodo)
  .get(auth('getTodos'), validate(todoValidation.getTodos), todoController.getTodos)

router
  .route('/:todoId')
  .get(auth('getTodos'), validate(todoValidation.getTodo), todoController.getTodos)
  .patch(auth('manageTodos'), validate(todoValidation.updateTodo), todoController.updateTodo)
  .delete(auth('manageTodos'), validate(todoValidation.deleteTodo), todoController.deleteTodo);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo management and retrieval duplikat
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a todo
 *     description: Only admins can create other todos.
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - priority
 *               - desc
 *               - dueDate
 *             properties:
 *               title:
 *                 type: string
 *               priority:
 *                 type: string
 *               description:
 *                 type: string
 *               role:
 *                  type: string
 *             example:
 *               title: fake name
 *               priority: minor
 *               description: this is a todo application
 *               dueDate: 2023-11-11
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Todo'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all todos
 *     description: Only admins can retrieve all users.
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Todo name
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         description: Description
 *       - in: query
 *         name: priority
 *         schema:
 *           type: string
 *         description: priority
 *       - in: query
 *         name: priority
 *         schema:
 *           type: string
 *         description: dueDate 
 *       - in: query
 *         name: limit
 *         schema:
 *           type: string
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Todo'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /todo/{id}:
 *   get:
 *     summary: Get a user
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other todos.
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Todo'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a todo
 *     description: Logged in users can only update their own information. Only admins can update other todos.
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               priority:
 *                 type: string
 *              dueDate:
 *                 type: string
 *             example:
 *               title: fake name
 *               priority: low
 *               description: simple application todo
 *               dueDate: 2023-11-11 
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a todo
 *     description: Logged in users can delete only themselves. Only admins can delete other users.
 *     tags: [Todos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
