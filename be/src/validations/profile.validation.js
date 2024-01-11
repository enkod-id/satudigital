const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProfile = {
  body: Joi.object().keys({
    idUser: Joi.string().required().custom(objectId),
    idStore: Joi.string().required().custom(objectId),
    name: Joi.string().required().regex(/^[A-Za-z0-9]+$/),
    description: Joi.string(),
  }),
};

const getProfiles = {
  query: Joi.object().keys({
    idUser: Joi.string().custom(objectId),
    idStore: Joi.string().custom(objectId),
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProfile = {
  params: Joi.object().keys({
    profileId: Joi.string().custom(objectId),
  }),
};

const updateProfile = {
  params: Joi.object().keys({
    profileId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      idUser: Joi.string().custom(objectId),
      idStore: Joi.string().custom(objectId),
      name: Joi.string().regex(/^[A-Za-z0-9]+$/),
      description: Joi.string(),
    })
    .min(1),
};

const deleteProfile = {
  params: Joi.object().keys({
    profileId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProfile,
  getProfiles,
  getProfile,
  updateProfile,
  deleteProfile,
};
