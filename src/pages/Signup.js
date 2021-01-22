import { Button, TextField, Grid, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useFormik } from "formik"
import Firebase from "../firebase/firabase.utils"


const styleFunc = makeStyles({
    wrapper: {
        marginTop: "5rem"
    }
})



export default function Signup() {

    const formik = useFormik({
        initialValues: {
            displayName: "",
            email: '',
            password: "",
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            Firebase.register(values.email,values.password)
        },
    });
    const googleHandle=()=>{
        Firebase.useGoogleProvider()
    }
    const signupStyles = styleFunc();
    return (
        <Container className={signupStyles.wrapper} maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="displayName"
                            label="Display Name"
                            variant="outlined"
                            fullWidth
                            onChange={formik.handleChange}
                            value={formik.values.displayName}
                            required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        id="email"
                        label="Email" 
                        variant="outlined" 
                        fullWidth 
                        onChange={formik.handleChange} 
                        value={formik.values.email}
                        required />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        id="password"
                         label="Password" 
                         variant="outlined"
                         type='password'
                          fullWidth 
                          onChange={formik.handleChange} 
                          value={formik.values.password} 
                          required/>

                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Register
                    </Button>

                    </Grid>

                    <Grid item xs={12}>

                        <Button variant="contained" color="primary" fullWidth onClick={googleHandle}>
                            Signup with Google
                    </Button>

                    </Grid>

                </Grid>
            </form>

        </Container>
    )
}
