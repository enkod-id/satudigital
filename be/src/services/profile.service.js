const httpStatus = require('http-status');
const { Profile } = require('../models');
const ApiError = require('../utils/ApiError');

// Fungsi helper untuk memeriksa apakah value adalah string
const isString = (value) => typeof value === 'string' || value instanceof String;

/**
 * Create a profile
 * @param {Object} profileBody
 * @returns {Promise<Profile>}
 */
const createProfile = async (profileBody) => {
  const { idStore, idUser, name, description } = profileBody;

  const modifiedProfileBody = {
    ...profileBody,
    fullname: "New Fullname Value", // Ganti dengan nilai yang sesuai
    country: "New Country Value", // Ganti dengan nilai yang sesuai
    location: "New Location Value", // Ganti dengan nilai yang sesuai
    email: "newemail@example.com", // Ganti dengan nilai yang sesuai
    profession: "New Profession Value", // Ganti dengan nilai yang sesuai
    address: "New Address Value", // Ganti dengan nilai yang sesuai
    phone: "New Phone Value", // Ganti dengan nilai yang sesuai
    website: "http://newwebsite.com" // Ganti dengan nilai yang sesuai
  };

  // Pastikan semua field yang diberikan adalah string
  if (!isString(modifiedProfileBody.idUser) || !isString(modifiedProfileBody.name) || (modifiedProfileBody.idStore && !isString(modifiedProfileBody.idStore)) || (modifiedProfileBody.description && !isString(modifiedProfileBody.description))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'All fields must be strings');
  }

  return Profile.create(modifiedProfileBody);
};

/**
 * Query for profiles
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryProfiles = async (filter, options) => {
  const profiles = await Profile.paginate(filter, options);
  return profiles;
};

/**
 * Get profile by id
 * @param {ObjectId} id
 * @returns {Promise<Profile>}
 */
const getProfileById = async (id) => {
  return Profile.findById(id);
};

/**
 * Update profile by id
 * @param {ObjectId} profileId
 * @param {Object} updateBody
 * @returns {Promise<Profile>}
 */
const updateProfileById = async (profileId, updateBody) => {
  const allowedFields = ['fullname', 'country', 'location', 'email', 'profession', 'address', 'phone', 'website'];

  const modifiedUpdateBody = { ...updateBody };

  for (const field of allowedFields) {
    if (updateBody[field]) {
      modifiedUpdateBody[field] = String(updateBody[field]);
    }
  }

  // Pastikan semua field yang diperbarui adalah string
  if ((modifiedUpdateBody.idStore && !isString(modifiedUpdateBody.idStore)) || (modifiedUpdateBody.idUser && !isString(modifiedUpdateBody.idUser)) || 
      (modifiedUpdateBody.name && !isString(modifiedUpdateBody.name)) || (modifiedUpdateBody.description && !isString(modifiedUpdateBody.description))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'All fields must be strings');
  }

  const profile = await getProfileById(profileId);
  if (!profile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Profile not found');
  }
  Object.assign(profile, modifiedUpdateBody);
  await profile.save();
  return profile;
};

/**
 * Delete profile by id
 * @param {ObjectId} profileId
 * @returns {Promise<Profile>}
 */
const deleteProfileById = async (profileId) => {
  const profile = await getProfileById(profileId);
  if (!profile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Profile not found');
  }
  await profile.remove();
  return profile;
};

module.exports = {
  createProfile,
  queryProfiles,
  getProfileById,
  updateProfileById,
  deleteProfileById,
};
