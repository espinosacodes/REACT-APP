import { useState } from "react";


//{items [], headinf string}

interface ListGroupProps {
  items: string[];
  heading: string;

}




function ListGroup(props: ListGroupProps) {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const [selectedIndex, setSelectedIndex] =  useState(-1);
  

  return (
    <>
      <div>
        <h1>List</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={ selectedIndex === index?'list-group-item active':'list-group-item'}
              
              key={item}
              onClick={() => { setSelectedIndex(index); }}

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