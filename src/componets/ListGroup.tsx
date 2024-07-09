import { useState } from "react";

//{items [], headinf string}

interface Props {
  items: string[];
  heading: string;

  onSelectetItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectetItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <div>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
                onSelectetItem(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListGroup;

///51:21
//npm run dev
