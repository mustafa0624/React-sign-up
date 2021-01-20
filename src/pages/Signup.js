import { Button, TextField, Grid, Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useFormik } from "formik"


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
            alert(JSON.stringify(values, null, 2));
        },
    });

    const signupStyles = styleFunc();
    return (
        <Container className={signupStyles.wrapper} maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField id="displayName" label="Display Name" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.displayName} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="email" label="Email" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.email} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="password" label="Password" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.password} />

                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                    </Button>

                    </Grid>

                    <Grid item xs={12}>

                        <Button variant="contained" color="primary" fullWidth>
                            Signup with Google
                    </Button>

                    </Grid>

                </Grid>
            </form>

        </Container>
    )
}
