import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header text="This is header 1" subtext="subtext #1" />
      <Header text="Another header" subtext="sub sub 22" />

      <Content text="My content">
        <h1>This is a child component</h1>
        <p>This is some text</p>
        <p>This is more text</p>
      </Content>

      <Content text="My other content">
        <table>
          <tbody>
            <tr>
              <td>asdf</td>
              <td>asdf</td>
              <td>asdf</td>
            </tr>
          </tbody>
        </table>
      </Content>

      <Footer text="This is my footer" />
    </div>
  );
}

export default App;
