import { MenuItem, TextField } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <TextField value="1" onChange={()=>{}} inputProps={{'aria-label':'should be on INPUT element'}} select>
        <MenuItem value="0">Zero</MenuItem>
        <MenuItem value="1">One</MenuItem>
      </TextField>
    </div>
  );
}

export default App;
