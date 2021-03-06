import React from 'react'

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid'
const WorkAnswersSingle =(props) => {
    const [value, setValue] = React.useState();

    const handleChange = event => {
      setValue(event.target.value);
    };

    return(
    
        <FormControl fullWidth={true}>
            
            <FormLabel style={{color:'black', padding:'15px',fontWeight:'bold'}}>Выберите один ответ</FormLabel>

            <RadioGroup value={value} onChange={handleChange}>
                <Grid container direction="row" justify="space-between" alignItems="flex-start" style={{marginTop:'2vh', padding:'15px',borderRadius: '25px'}}>
                {props.actionTask.answers.map(answer=>{
                    return(
                   
                        <Grid item xs={12} sm={6} md={3} lg={3}  style={{padding:'center'}} key={answer.id}>
                        <FormControlLabel value={answer.answer}  control={<Radio />} label={answer.answer} />
                        </Grid>
                   
                    )
                })}</Grid>
            </RadioGroup>

        </FormControl>
       
    )
}
export default WorkAnswersSingle;