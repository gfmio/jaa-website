
const mongoose = require('mongoose')
require('mongoose-type-url')
require('mongoose-type-email')

const Url = mongoose.SchemaTypes.Url
const Email = mongoose.SchemaTypes.Email

var User = {
  name: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    }
  },
  position: String, // Role in the JAA
  avatar: Url, // Link to the profile picture
  email: {
    type: Email,
    required: true
  },
  alumniEmail: {
    type: Email,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ['male', 'female', 'other', 'prefer not to say'],
      message: 'enum validator failed for path `{PATH}` with value `{VALUE}`'
    }
  },
  address: {
    street: String,
    streetNumber: String,
    city: String,
    zipCode: String,
    country: String // To be changed
  },
  nationality: String, // To be changed
  phone: String, // To be changed
  college: {
    type: String,
    enum: {
      values: ['krupp', 'mercator', 'ciii', 'nordmetall'],
      message: ''
    }
  },
  jacobsGraduationYear: Number, // to be changed
  degrees: [{
    degree: String,
    major: String,
    institution: String,
    graduationYear: Number // to be changed
  }],
  work: [{
    company: String,
    position: String,
    industry: String, // To be changed
    field: String // To be changed
  }],
  social: {
    linkedin: Url,
    facebook: Url,
    twitter: Url,
    website: Url
  },
  accountStatus: Boolean,
  termsAndConditionsAccepted: Boolean,
  freeMembershipRequest: String,
  membershipPlan: {
    type: String,
    enum: {
      values: ['free', 'contributor', 'patron']
    }
  }
}

module.exports = User
