import { useState, useEffect, useContext } from "react";
import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import InCartContext from "../store/favorites-context";
import BookList from "../components/BookList";
import classes from "../components/PurchaseHistory.module.css";
function PurchaseHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPurchases, setLoadedPurchases] = useState([]);
  const [flag, setFlag] = useState(true);

  const favoritesCtx = useContext(InCartContext);

  useEffect(() => {
    fetch(
      "https://bookbazaar-cc648-default-rtdb.firebaseio.com/userHistory.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let records;

        for (const key in data) {
          const record = {
            id: key,
            ...data[key],
          };
          let listData = {};
          if (
            favoritesCtx.adminAccess ||
            record.Email === favoritesCtx.userEmail
          ) {
            setFlag(false);
            records = (
              <div className="block">
                <div className={classes.email}>Email : {record.Email}</div>
                <div className={classes.time}>The Purchase Time is : {record.Time}</div>

                <div className="flex">
                  <BookList books={record.PurchaseHistory} />
                </div>
              </div>
            );
            listData = {
              id: record.id,
              content: records,
            };
          }
          setLoadedPurchases((loadedPurchases) =>
            loadedPurchases.concat(listData)
          );
        }
        setIsLoading(false);
      });
  }, [favoritesCtx.userEmail, favoritesCtx.adminAccess]);
  if (isLoading)
    return (
      <div className="App App-header App-logo">
        <FontAwesomeIcon icon={faCircleNotch} size="5x" />
      </div>
    );
if(flag)
      return (
        <div className="face">
          <div>
            <FontAwesomeIcon icon={faFaceFrown} size="5x" />
          </div>
  
          <div >You haven't Purchased Anything Yet !</div>
        </div>
      );
  return (
    <div>
      {loadedPurchases.map((dd) => {
        return <div key={dd.id}>{dd.content}</div>;
      })}
    </div>
  );
}

export default PurchaseHistory;
