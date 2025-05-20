Student_Schema = {
  name: { type: String, required: true},
  age: Number,
  branch: String,
  course: String,
  courses : { type :Number, required:true},
  email: {type:String, unique:true},
  college: { type:String, required: true},
  Addmission :{ type: Date, required: true},
}
