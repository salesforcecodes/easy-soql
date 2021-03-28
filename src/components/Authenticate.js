import { useState } from 'react';
import { Button, Typography, Grid, Container, FormControl, Radio, RadioGroup, FormLabel, FormControlLabel, TextField } from '@material-ui/core';
import config from '../config';

function Authenticate() {
    const generateUrl = (baseUrl) => (`${baseUrl}/services/oauth2/authorize?response_type=token&client_id=${config.clientId}&redirect_uri=${config.redirectUri}`);
    const [envType, setEnvType] = useState('login');
    const [customUrl, setCustomUrl] = useState('');
    const [calcUrl, setCalcUrl] = useState('');
    const [loginUrl, setLoginUrl] = useState(generateUrl('https://login.salesforce.com'));

    const handleEnvChange = (e) => {
        setEnvType(e.target.value);
    }
    const customUrlChange = (e) => {
        setCustomUrl(e.target.value);
    }

    return (
        <Container>
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Easy SOQL
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                Easily build SOQL queries against your Salesforce environments
            </Typography>
            <br />
            <div>
                <Grid container justify="center" direction="column" alignItems="center">
                    <Grid item>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Type of environment</FormLabel>
                            <RadioGroup aria-label="envType" name="envType" value={envType} onChange={handleEnvChange}>
                                <FormControlLabel value="login" control={<Radio />} label="Production/Developer" />
                                <FormControlLabel value="test" control={<Radio />} label="Sandbox" />
                                <FormControlLabel value="custom" control={<Radio />} label="Custom URL" />
                            </RadioGroup>
                            {envType === 'custom' &&
                                <TextField variant="standard" placeholder="Domain URL here.." required={true} onChange={customUrlChange} />
                            }
                        </FormControl>
                    </Grid>
                    <Grid item>
                        <br />
                        <Button href={loginUrl} variant="contained">
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default Authenticate;