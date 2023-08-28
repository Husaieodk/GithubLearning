import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <form>
      <p>Student Information</p><br/>
      <label>First Name</label>
      <input type="text" name="fname"/><br/>
      <label>Last name</label>
      <input type="text" name="lname"/><br></br>

      <label>T-shirt size</label>
      <select>
        <option>M</option>
        <option>L</option>
        <option>S</option>
        <option>XL</option>
      </select><br/>
      <input type="button" value="submit"/>
      
      </form>
      
    </div>
  );
}

export default App;
