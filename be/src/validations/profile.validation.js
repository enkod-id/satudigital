const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProfile = {
  body: Joi.object().keys({
    idStore: Joi.string().custom(objectId), // Menambahkan validasi untuk idStore
    idUser: Joi.string().required(),
    name: Joi.string().required().regex(/^[A-Za-z0-9]+$/),
    description: Joi.string(),
    fullname: Joi.string(), // Validasi untuk fullname
    country: Joi.string(), // Validasi untuk country
    location: Joi.string(), // Validasi untuk location
    email: Joi.string(), // Validasi untuk email
    profession: Joi.string(), // Validasi untuk profession
    address: Joi.string(), // Validasi untuk address
    phone: Joi.string(), // Validasi untuk phone
    website: Joi.string(), // Validasi untuk website
  }),
};

const getProfiles = {
  query: Joi.object().keys({
    idStore: Joi.string().custom(objectId),
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProfile = {
  params: Joi.object().keys({
    profileId: Joi.string().required().custom(objectId),
  }),
};

const updateProfile = {
  params: Joi.object().keys({
    profileId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      idStore: Joi.string().custom(objectId), // Menambahkan validasi untuk idStore
      idUser: Joi.string(),
      name: Joi.string().regex(/^[A-Za-z0-9]+$/),
      description: Joi.string(),
      fullname: Joi.string(), // Validasi untuk fullname
      country: Joi.string(), // Validasi untuk country
      location: Joi.string(), // Validasi untuk location
      email: Joi.string(), // Validasi untuk email
      profession: Joi.string(), // Validasi untuk profession
      address: Joi.string(), // Validasi untuk address
      phone: Joi.string(), // Validasi untuk phone
      website: Joi.string(), // Validasi untuk website
    })
    .min(1),
};

const deleteProfile = {
  params: Joi.object().keys({
    profileId: Joi.string().required().custom(objectId),
  }),
};

module.exports = {
  createProfile,
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
};
