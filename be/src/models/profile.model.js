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
      default: () => new mongoose.Types.ObjectId().toString(),
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
      trim: true,
    },
    fullname: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    profession: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Menambahkan plugin yang mengonversi mongoose ke JSON
profileSchema.plugin(toJSON);
profileSchema.plugin(paginate);

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
