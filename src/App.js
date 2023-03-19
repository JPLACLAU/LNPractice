import { requestProvider } from "webln";
import { useState } from "react";

function App() {
  const [nodeInfo, setNodeInfo] = useState("");
  const [amount, setAmount] = useState(0);
  const [webln, setWebln] = useState("");
  const [paymentRequest, setPaymentRequest] = useState("");

  async function loadRequestProvider() {
    const webln = await requestProvider();
    const nodeInfo = await webln.getInfo();
    setNodeInfo(nodeInfo.node.alias);
    setWebln(webln);
    console.log(nodeInfo);
  }
  async function handleInvoice(e) {
    e.preventDefault();
    const invoice = await webln.makeInvoice(amount);
    console.log(invoice);
    setPaymentRequest(invoice.paymentRequest);
  }

  async function handlePayment() {
    await webln.sendPayment(paymentRequest);
  }

  return (
    <div>
      <h4> Webl practice tutorial</h4>
      <button onClick={loadRequestProvider}>Connect to provider</button>
      <p> Connected to: {nodeInfo}</p>
      <h4>Create invoice</h4>
      <form onSubmit={handleInvoice}>
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          required
        />{" "}
        <br />
        <button>Create invoice</button>
      </form>
      <br />
      <button onClick={handlePayment}>Pay invoice</button>
      <br />
    </div>
  );
}

export default App;
