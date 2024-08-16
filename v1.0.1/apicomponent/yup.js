import * as yup from 'yup';
import {NameAndEmail} from "./db"




const UserSchema = yup.object().shape({
  Username: yup.string().required().required('Username is required'),
  Email: yup.string().email().required('Email is required'),
  Password: yup.string().required('Password is required'),
});




export async function userValid(req, res, next) {

  try {

    await UserSchema.validate({
      Username: req.body.data.Username,
      Email: req.body.data.Email,
      Password: req.body.data.Password,
    })


    const a = await NameAndEmail(req.body.data.Username, req.body.data.Username)



    if (!a[0]) {
      return next()
    } else {
      return res.send(`${a[0].Email ? "Email Already Exists": "User Already Exists"}`)
    }




  } catch (error) {
    console.log(error.errors)
  }

}