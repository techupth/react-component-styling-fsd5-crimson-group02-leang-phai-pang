/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import "./App.css";
import Button from './components/Button'
import Alert from "./components/Alert"


function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* แบบที่1 */}
        <Button type="primary" text="Primary!" /> <br></br>
        {/* แบบที่2 */}
        <Button  type="secondary" text="Secondary" />  <br></br>
        {/* แบบที่3 */}
        <Button />
      </div>
      <hr />
      <div className="alert-components-section">

        <Alert type="error" text="error" />
        <Alert type="warning" text="warning" />
        <Alert type="info" text= "info" />
        <Alert type="success" text= "success" />

      </div>
    </div>
  );
}

export default App;
