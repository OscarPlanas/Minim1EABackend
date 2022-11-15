import { Schema, model } from 'mongoose';

const ExamConfiguration = new Schema({
	mode: String,  //day or night
    font: Number,  //font size
    color: String, //color of the font
    background: String, //color of the background
    datecreation: Date //date of creation

});

export default model('ExamConfiguration', ExamConfiguration);