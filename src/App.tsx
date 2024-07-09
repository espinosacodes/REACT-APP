import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(`Selected item: ${item}`);
  };

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectedItem={handleSelectItem} />
    </div>
  );
}

export default App;
