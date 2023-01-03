import logo from "./logo.svg";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar";
import MenuItems from "./components/MenuItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navbar currentItem="Home" />
      </header>
      <main className="content">
        <div className="btn_list">
          <Button color="accent" size="lg" />
          <Button color="info" size="lg" />
          <Button color="success" size="lg" />
          <Button color="warning" size="lg" />
          <Button color="error" size="lg" />
        </div>
        <div className="btn_list">
          <Button color="accent" size="sm" />
          <Button color="info" size="sm" />
          <Button color="success" size="sm" />
          <Button color="warning" size="sm" />
          <Button color="error" size="sm" />
        </div>
        <MenuItems />
      </main>
    </div>
  );
}

export default App;
