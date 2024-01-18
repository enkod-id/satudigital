const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const profileValidation = require('../../validations/profile.validation');
const profileController = require('../../controllers/profile.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageProfiles'), validate(profileValidation.createProfile), profileController.createProfile)
  .get(auth('getProfiles'), validate(profileValidation.getProfiles), profileController.getProfiles);

router
  .route('/:profileId')
  .get(auth('getProfiles'), validate(profileValidation.getProfile), profileController.getProfile)
  .patch(auth('manageProfiles'), validate(profileValidation.updateProfile), profileController.updateProfile)
  .delete(auth('manageProfiles'), validate(profileValidation.deleteProfile), profileController.deleteProfile);

module.exports = router;


/**
 * @swagger
 * tags:
 *   name: Profiles
 *   description: User profiles management and retrieval
 */

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Create a user profile
 *     description: Create a user profile with additional fields.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idUser
 *               - idStore
 *               - name
 *               - fullname
 *               - country
 *               - location
 *               - email
 *               - profession
 *               - address
 *               - phone
 *               - website
 *             properties:
 *               idUser:
 *                 type: string
 *               idStore:
 *                 type: string
 *              name:
 *                 type: string
 *               fullname:
 *                 type: string
 *               country:
 *                 type: string
 *               location:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               profession:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               website:
 *                 type: string
 *             example:
 *               idUser: "12345"
 *               idStore: "67890"
 *               name: "jakartastore"
 *               fullname: "John Doe"
 *               country: "United States"
 *               location: "New York"
 *               email: "john@example.com"
 *               profession: "Web Developer"
 *               address: "123 Main St"
 *               phone: "+1 (123) 456-7890"
 *               website: "https://www.example.com"
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/UserProfile'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get user profiles
 *     description: Get user profiles with additional fields.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/UserProfile'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /profiles/{id}:
 *   get:
 *     summary: Get a user profile by ID
 *     description: Get a user profile by its ID with additional fields.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User profile ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/UserProfile'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a user profile by ID
 *     description: Update a user profile by its ID with additional fields.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User profile ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idUser:
 *                 type: string
 *               idStore:
 *                 type: string
 *               fullname:
 *                 type: string
 *               country:
 *                 type: string
 *               location:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               profession:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               website:
 *                 type: string
 *             example:
 *               idUser: "12345"
 *               idStore: "67890"
 *               fullname: "John Doe"
 *               country: "United States"
 *               location: "New York"
 *               email: "john@example.com"
 *               profession: "Web Developer"
 *               address: "123 Main St"
 *               phone: "+1 (123) 456-7890"
 *               website: "https://www.example.com"
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/UserProfile'
 *       "400":
 *         $ref: '#/components/responses/BadRequest'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a user profile by ID
 *     description: Delete a user profile by its ID with additional fields.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User profile ID
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
