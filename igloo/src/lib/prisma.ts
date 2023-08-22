import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

// table User {
//   user_id    Int
//   username   String
//   email      String
//   password   String
//   created_at DateTime
//   orders     Order
// }

// table Product {
//   product_id     Int
//   name           String
//   description    String
//   price          Float
//   image_url      String
//   stock_quantity Int
//   category_id    Int
//   created_at     DateTime
//   category       Category
//   order_items    OrderItem
// }

// table Category {
//   category_id Int
//   name        String
//   products    Product
// }

// table Order {
//   order_id     Int
//   user_id      Int
//   order_date   DateTime
//   total_amount Float
//   user         User
//   order_items  OrderItem
// }

// table OrderItem {
//   order_item_id Int
//   order_id      Int
//   product_id    Int
//   quantity      Int
//   subtotal      Float
//   order         Order
//   product       Product
// }

// Ref: Product.category < Category.category_id

// Ref: Order.user < User.user_id

// Ref: OrderItem.order < Order.order_id

// Ref: OrderItem.product < Product.product_id

// --------------------------------------------------------

// table User {
//   user_id    Int
//   username   String
//   email      String
//   password   String
//   created_at DateTime
//   orders     Order
// }

// table Product {
//   product_id     Int
//   name           String
//   description    String
//   price          Float
//   image_url      String
//   stock_quantity Int
//   subcategory_id Int
//   created_at     DateTime
//   subcategory    Subcategory
//   order_items    OrderItem
// }

// table Subcategory {
//   subcategory_id Int
//   name           String
//   category_id    Int
//   category       Category
//   products       Product
// }

// table Category {
//   category_id Int
//   name        String
//   subcategories Subcategory
// }

// table Order {
//   order_id     Int
//   user_id      Int
//   order_date   DateTime
//   total_amount Float
//   user         User
//   order_items  OrderItem
// }

// table OrderItem {
//   order_item_id Int
//   order_id      Int
//   product_id    Int
//   quantity      Int
//   subtotal      Float
//   order         Order
//   product       Product
// }

// Ref: Product.subcategory < Subcategory.subcategory_id

// Ref: Subcategory.category < Category.category_id

// Ref: Order.user < User.user_id

// Ref: OrderItem.order < Order.order_id

// Ref: OrderItem.product < Product.product_id
