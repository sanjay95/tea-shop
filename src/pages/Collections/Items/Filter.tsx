import React, { useState } from "react";
import { FILTER } from "./FilterObject";
import "./Filter.css";

interface FilterItem {
  category: string;
  items: Item[];
}

interface Item {
  name: string;
}

const Filter: React.FC = () => {
  const [openedCategory, setOpenedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (openedCategory === category) {
      setOpenedCategory(null);
    } else {
      setOpenedCategory(category);
    }
  };

  return (
    <div className="filter-container">
      {FILTER.map((item: FilterItem, idx: number) => (
        <div key={idx}>
          <div
            onClick={() => {
              toggleCategory(item.category);
            }}
            className={`filter-container__category`}
          >
            {item.category}
            <div>{openedCategory === item.category ? "-" : "+"}</div>
          </div>
          {openedCategory === item.category && (
            <div>
              {item.items.map((i: Item, idx: number) => (
                <div className="filter-container__check" key={idx}>
                  <input type="checkbox" id={i.name} />
                  <label htmlFor={i.name} id={i.name}>
                    <p>{i.name}</p>
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filter;
