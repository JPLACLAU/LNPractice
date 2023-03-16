import logo from "./logo.svg";
import "./App.css";

import { makeInvoice } from "./makeInvoice.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a>
          <button class="button" type="button" onclick="makeInvoice()">
            webln.makeInvoice()
          </button>
        </a>
        <p>Prompts the user to provide the page with an invoice.</p>
        <a></a>
        <a>
          <button class="button" type="button" onclick="getInfo()">
            webln.getInfo()
          </button>

          <p>Returns some basic information about the node.</p>

          <pre id="result"></pre>
        </a>
        <a>
          <button class="button" type="button" onclick="signMessage()">
            webln.signMessage()
          </button>

          <p>Prompts the user to sign a message with their private key.</p>

          <pre id="result"></pre>
        </a>
        <a>
          <button class="button" type="button" onclick="verifyMessage()">
            webln.verifyMessage()
          </button>

          <p>Shows the user a view that verifies a signed message.</p>

          <pre id="result"></pre>
        </a>
        <a>
          <button class="button" type="button" onclick="keysend()">
            🚀 Send a boostagram
          </button>

          <pre id="result"></pre>
        </a>
        <a>
          <button class="button" type="button" onclick="keysend()">
            ⚡ Send a stream payment
          </button>

          <pre id="result"></pre>
        </a>
        <a>
          <button class="button" type="button" onclick="sendPayment()">
            webln.sendPayment()
          </button>

          <p>Make a payment using WebLN.</p>

          <pre id="result"></pre>
        </a>
        <a>
          <button class="button" type="button" onclick="keysend()">
            webln.keysend()
          </button>

          <p>
            Send a keysend payment to the node of{" "}
            <a href="https://amboss.space" target="_blank">
              amboss.space
            </a>{" "}
            and see your message on their billboard.
          </p>

          <pre id="result"></pre>
        </a>
        <a>
          <button class="button" type="button" onclick="enable()">
            webln.enable()
          </button>
          <p>Determines if the WebLN provider will allow the page to use it</p>
        </a>
        <pre id="result"></pre>
        <script></script>
      </header>
    </div>
  );
}

export default App;
