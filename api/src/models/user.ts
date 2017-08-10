
import mongoose = require("mongoose");
const Url = require("mongoose-type-url");
const Email = require("mongoose-type-email");

const Url = mongoose.SchemaTypes.Url
const Email = mongoose.SchemaTypes.Email

var User = {
  name: {
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    }
  },
  position: String, // Role in the JAA
  avatar: Url, // Link to the profile picture
  email: {
    required: true,
    type: Email,
  },
  alumniEmail: {
    required: true,
    type: Email,
  },
  gender: {
    type: String,
    required: true,
    enum: {
      values: ["male", "female", "other", "prefer not to say"],
      message: "enum validator failed for path `{PATH}` with value `{VALUE}`",
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
      values: ["krupp", "mercator", "ciii", "nordmetall"],
      message: ""
    },
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
      values: ["free", "contributor", "patron"]
    }
  }
}

module.exports = User
