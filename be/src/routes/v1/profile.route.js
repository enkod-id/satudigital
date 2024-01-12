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
 *   description: Profile management and retrieval
 */

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Create a profile
 *     description: Only admins can create profiles.
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
 *               - name
 *             properties:
 *               idUser:
 *                 type: string
 *                 description: Unique user ID
 *               name:
 *                 type: string
 *                 description: Profile name, no spaces or special characters
 *               description:
 *                 type: string
 *                 description: Description of the profile
 *             example:
 *               idUser: "12345"
 *               name: "profileName"
 *               description: "Profile description here"
 *     responses:
 *       "201":
 *         description: Profile created
 *       "400":
 *         description: Bad request
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *
 *   get:
 *     summary: Get all profiles
 *     description: Only admins can retrieve all profiles.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: idUser
 *         schema:
 *           type: string
 *         description: User ID to filter by
 *       - in: query
 *         name: idStore
 *         schema:
 *           type: string
 *         description: Store ID to filter by
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Profile name to filter by
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Maximum number of profiles per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *     responses:
 *       "200":
 *         description: List of profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Profile'
 *                 page:
 *                   type: integer
 *                 limit:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 totalResults:
 *                   type: integer
 *
 * /profiles/{profileId}:
 *   get:
 *     summary: Get a specific profile
 *     description: Logged in users can fetch their own profile information. Only admins can fetch others.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: profileId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique Profile ID
 *     responses:
 *       "200":
 *         description: Profile data
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Profile'
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Profile not found
 *
 *   patch:
 *     summary: Update a profile
 *     description: Logged in users can only update their own profile. Only admins can update others.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: profileId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique Profile ID
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
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       "200":
 *         description: Profile updated
 *       "400":
 *         description: Bad request
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Profile not found
 *
 *   delete:
 *     summary: Delete a profile
 *     description: Logged in users can delete only their own profile. Only admins can delete others.
 *     tags: [Profiles]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: profileId
 *         required: true
 *         schema:
 *           type: string
 *         description: Unique Profile ID
 *     responses:
 *       "200":
 *         description: Profile deleted
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Profile not found
 */
