const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { profileService } = require('../services');

const createProfile = catchAsync(async (req, res) => {
  let { idStore, idUser, name, description } = req.body;

  // Jika idStore tidak disediakan, buat satu baru secara otomatis
  if (!idStore) {
    idStore = new mongoose.Types.ObjectId().toString();
  }

  // Validasi untuk nama - tidak boleh ada spasi atau karakter spesial
  if (!/^[A-Za-z0-9]+$/.test(name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name must not contain spaces or special characters');
  }

  const profile = await profileService.createProfile({ idStore, idUser, name, description });
  res.status(httpStatus.CREATED).send(profile);
});

const getProfiles = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'idStore', 'idUser']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await profileService.queryProfiles(filter, options);
  res.send(result);
});

const getProfile = catchAsync(async (req, res) => {
  const profile = await profileService.getProfileById(req.params.profileId);
  if (!profile) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Profile not found');
  }
  res.send(profile);
});

const updateProfile = catchAsync(async (req, res) => {
  const { name } = req.body;

  // Validasi untuk nama (jika diperbarui)
  if (name && !/^[A-Za-z0-9]+$/.test(name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name must not contain spaces or special characters');
  }

  const profile = await profileService.updateProfileById(req.params.profileId, req.body);
  res.send(profile);
});

const deleteProfile = catchAsync(async (req, res) => {
  await profileService.deleteProfileById(req.params.profileId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createProfile,
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
};
