import axios from "axios";
import { Product } from "../models/Product";

export function fetchAll() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://my-json-server.typicode.com/benirvingplt/products/products")
      .then(({ data }) => {
        resolve(Object.assign([], data));
      })
      .catch((error) => {
        reject(error);
      });
  });
}
