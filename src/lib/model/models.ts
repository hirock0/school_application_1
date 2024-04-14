import mongoose from "mongoose";
import { ConnectionDB } from "@/connection/connectionDB";
ConnectionDB();

const SignupData = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "fill the data"],
  },
  emailOrnumber: {
    type: String,
    required: [false, "fill the data"],
  },
  password: {
    type: String,
    required: [false, "fill the data"],
  },
  reTypePassword: {
    type: String,
    required: [false, "fill the data"],
  },
  address: {
    type: String,
    required: [false, "fill the data"],
  },
  image: {
    type: String,
    required: [false, "fill the data"],
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: String,
  tokenVerified: Date,
  forgotPassword: String,
  forgotPasswordVerified: Date,
});

export const SignupSchemaData =
  mongoose.models.signupdatas || mongoose.model("signupdatas", SignupData);

// admin_signup_start

const AdminSignupData = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "fill the data"],
  },
  emailOrnumber: {
    type: String,
    required: [false, "fill the data"],
  },
  password: {
    type: String,
    required: [false, "fill the data"],
  },
  reTypePassword: {
    type: String,
    required: [false, "fill the data"],
  },
  address: {
    type: String,
    required: [false, "fill the data"],
  },
  image: {
    type: String,
    required: [false, "fill the data"],
  },
  isVerify: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: String,
  tokenVerified: Date,
  forgotPassword: String,
  forgotPasswordVerified: Date,
});

export const AdminSignupSchemaData =
  mongoose.models.admin_details ||
  mongoose.model("admin_details", AdminSignupData);

// admin_signup_end

const TalentedStudentData = new mongoose.Schema({
  img: {
    type: String,
    required: [false, "fill the data"],
  },
  name: {
    type: String,
    required: [false, "fill the data"],
  },
  age: {
    type: String,
    required: [false, "fill the data"],
  },
  Class: {
    type: String,
    required: [false, "fill the data"],
  },
  awardFor: {
    type: String,
    required: [false, "fill the data"],
  },
  desciptions: {
    type: String,
    required: [false, "fill the data"],
  },
  address: {
    type: String,
    required: [false, "fill the data"],
  },
  dateField: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

export const TalentedStudentSchema =
  mongoose.models.talentedstudents ||
  mongoose.model("talentedstudents", TalentedStudentData);

const AwardGettingEvents = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "fill the data"],
  },
  awardReason: {
    type: String,
    required: [false, "Fille the field"],
  },
  awardGettingPlace: {
    type: String,
    required: [false, "Fille the field"],
  },
  Date: {
    type: String,
    required: [false, "Fille the field"],
  },
  eventPics: {
    type: String,
    required: [false, "Fille the field"],
  },
  dateField: {
    type: Date,
    required: false,
    default: Date.now,
  },
});
export const AwardGettingEventsSchema =
  mongoose.models.award_events ||
  mongoose.model("award_events", AwardGettingEvents);

// NoticeBoard_start

const NoticeData = new mongoose.Schema({
  pdfName: {
    type: String,
    required: [false, "fill the data"],
  },
  pdfFile: {
    type: String,
    required: [false, "fill the data"],
  },
  recentDate: {
    type: String,
    required: [false, "fill the data"],
  },
  dateField: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

export const NoticeDataSchema =
  mongoose.models.notice_board_datas ||
  mongoose.model("notice_board_datas", NoticeData);

// apply_start

const ApplyDate = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "fill the data"],
  },
  fatherName: {
    type: String,
    required: [false, "fill the data"],
  },
  motherName: {
    type: String,
    required: [false, "fill the data"],
  },
  dateOfbirth: {
    type: String,
    required: [false, "fill the data"],
  },
  address: {
    type: String,
    required: [false, "fill the data"],
  },
  mobile: {
    type: String,
    required: [false, "fill the data"],
  },
  applicationFor: {
    type: String,
    required: [false, "fill the data"],
  },
  institutionName: {
    type: String,
    required: [false, "fill the data"],
  },
  image: {
    type: String,
    required: [false, "fill the data"],
  },
  useremail: {
    type: String,
    required: [false, "fill the data"],
  },
  dateField: {
    type: Date,
    required: false,
    default: Date.now,
  },
});

export const ApplyDateSchema =
  mongoose.models.apply_details || mongoose.model("apply_details", ApplyDate);

// apply_end
