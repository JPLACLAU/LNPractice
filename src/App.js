import { requestProvider } from "webln";

function App() {
  async function loadRequestProvider() {
    const webln = await requestProvider();
    console.log(webln);
  }

  return (
    <div>
      <h4> Webl practice tutorial</h4>
      <button onClick={loadRequestProvider}>Connect to provider</button>
    </div>
  );
}

export default App;
