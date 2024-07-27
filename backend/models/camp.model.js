const mongoose = require('mongoose');
const campSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true
  },
  traineeIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainee"
  }],
  appliedTrainerIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainer"
  }],
  selectedTrainerIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainer"
  }],
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  selected: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Camp = mongoose.model("Camp", campSchema);

module.exports = Camp;
