import database from "../api/database";

export default class ProductService {
  getProducts() {
    return database.get("/products");
  }
  getByProductDetails(id) {
    return database.get(`/products/${id}`);
  }
  getUsers(){
    return database.get("/users")
  }
}
