const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const profileSchema = mongoose.Schema(
  {
    idUser: {
      type: String,
      required: true,
      trim: true,
    },
    idStore: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!/^[A-Za-z0-9]+$/.test(value)) {
          throw new Error('Name must not contain spaces or special characters');
        }
      },
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Add plugin that converts mongoose to json
profileSchema.plugin(toJSON);
profileSchema.plugin(paginate);

/**
 * @typedef Profile
 */
const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
