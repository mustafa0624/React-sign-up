import { Button, TextField, Grid, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useFormik } from "formik"
import Firebase from "../firebase/firabase.utils"


const styleFunc = makeStyles({
    wrapper: {
        marginTop: "5rem"
    }
})



export default function Signin() {

    const formik = useFormik({
        initialValues: {
          email: '',
          password:"",
        },
        onSubmit: values => {
        //   alert(JSON.stringify(values, null, 2));
        Firebase.signIn(values?.email,values?.password)
        },
      });

   
    const GoogleHandle=()=>{
        Firebase.useGoogleProvider()
    }
    const signupStyles = styleFunc();
    return (
        <Container className={signupStyles.wrapper} maxWidth="sm">
            

            <form onSubmit={formik.handleSubmit}>
           
                <Grid container spacing={3}>
                    
                    <Grid item xs={12}>
                        <TextField 
                        id="email"
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      
                        required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        id="password"
                         label="Password" 
                         variant="outlined"
                         type='password'
                          fullWidth 
                          value={formik.values.password}
                          onChange={formik.handleChange}
                         
                          required/>

                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth >
                            Login
                    </Button>

                    </Grid>

                    <Grid item xs={12}>

                        <Button variant="contained" color="primary" fullWidth onClick={GoogleHandle}>
                            Signin with Google
                    </Button>

                    </Grid>

                </Grid>
            </form>
            

        </Container>
    )
}
