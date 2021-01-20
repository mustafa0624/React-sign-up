import { Button, TextField, Grid,Container } from "@material-ui/core"

export default function Signup() {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Display Name" variant="outlined" fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />

                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" >
                        Primary
            </Button>

                </Grid>

                <Grid item xs={12}>

                    <Button variant="contained" color="primary" >
                        Primary
            </Button>

                </Grid>

            </Grid>

        </Container>
    )
}
