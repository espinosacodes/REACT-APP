import ListGroup from "./componets/ListGroup";

function App() {

  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectetItem={handleSelectItem} />
    </div>
  );
}

export default App;
