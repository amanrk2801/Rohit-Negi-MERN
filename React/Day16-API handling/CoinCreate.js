import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const CoinCreate = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.slice1);
  useEffect(() => {
    dispatch(fetchData(20));
  });

  // Display info of 20 user
  return <div>CoinCreate</div>;
};

export default CoinCreate;
