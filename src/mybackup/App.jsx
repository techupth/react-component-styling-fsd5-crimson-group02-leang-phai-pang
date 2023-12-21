import { Alert } from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <div className="App">
        <Button type="primary" text="Large" />
        <Button type="secondary" text="Large" />
        <hr />
        <Alert type="Alert1" text="This is error alert box" />
        <Alert type="Alert2" text="This is warning alert box" />
        <Alert type="Alert3" text="This is info alert box" />
        <Alert type="Alert4" text="This is success alert box" />
      </div>
    </>
  );
}

export default App;
