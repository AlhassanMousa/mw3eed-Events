import { Button, Container } from "@material-ui/core";
import React, {  useState } from "react";
import db from "../firebase";
import "../App.scss";
import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase';

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";  




const   AddPost = () => {
const [value, setValues] = useState({ title: "", thedate: "", url: "" ,loc:"",cat:"",details:"",link:"",attendance:""});


const [startDate, setStartDate] = useState(new Date());

const changeValue = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };
const submit = (e) => {
    e.preventDefault();

    db.collection("events").add({
      title: value.title,
      startDate,
      image: value.url,
      loc: value.loc,
      cat:value.cat,
      link:value.link,
      details:value.details,
      attendance:value.attendance
    });

    setValues({ ...value, title: "", thedate: "", url: "" , loc:"",cat:"",details:"",link:""});
  };

 console.log(startDate)
  return (
          <form onSubmit={submit}>
          <Container>
            <span className="span1">

         </span>
            <h1>قم بإنشاء بوست جديد</h1>
  
            <div className="Form_InputDivs">
              <p>العنوان</p>
              <input
                value={value.title}
                name="title"
                type="text"
                placeholder="العنوان..."
                onChange={changeValue}
              />
            </div>


            <div className="Form_InputDivs">
              <p>الفئة</p>
    

<select    value={value.cat}
                type="text"
                placeholder="الفئة"
                name="cat"
                onChange={changeValue}>
       <option  selected >...</option>         
<option value="Business"  >اعمال</option>
<option value="Entertainment" >ترفيه</option>
  <option value="Education">تعليمى</option>
  <option  value="Shopping">تسوق</option>
  <option value="Workshops">ورش مهنية</option>
  <option value="Sports">رياضة</option>
  <option value="Health">صحة</option>
  <option value="Food">طعام</option>
  <option Value="Games">ألعاب</option>
  <option value="Fashion">موضة</option>
</select>
 
            </div>


            <div>
            <DatePicker
             selected={startDate}
             name="thedate"
             onChange={(date) => setStartDate(date)}
             value={value.startDate}
             showTimeSelect
             timeFormat="HH:mm"
             timeIntervals={15}
             timeCaption="time"
             dateFormat="MMMM d, yyyy h:mm aa"
             /> 

          <div className="Form_InputDivs">
              <p> المهتمين</p>
              <input
                value={value.attendance}
                type="number"
                placeholder="المهتمين"
                name="attendance"
                onChange={changeValue}
              />
          </div>



            <div className="Form_InputDivs">
              <p>مكان الحضور</p>
              <input
                value={value.loc}
                type="text"
                placeholder="المكان"
                name="loc"
                onChange={changeValue}
              />
          </div>


          </div>
       

            <div className="Form_InputDivs">
              <p>تفاصيل</p>
              <textarea
               rows="4" cols="50"
                value={value.details}
                type="text"
                placeholder="تفاصيل الايفنت"
                name="details"
                onChange={changeValue}
              />
            </div>

            <div className="Form_InputDivs">
              <p> لينك الصورة</p>
              <input
                value={value.url}
                type="text"
                placeholder="لينك المقاله"
                name="url"
                onChange={changeValue}
              />
            </div>

            <div className="Form_InputDivs">
              <p>لينك الايفنت</p>
              <input
                value={value.link}
                type="text"
                placeholder="لينك الايفنت"
                name="link"
                onChange={changeValue}
              />
            </div>

            <div className="Form_SubmitBtn">
              <Button type="submit">Submit</Button>
              <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>

            </div>
          </Container>
        </form> 
        
  )}

export default AddPost ;