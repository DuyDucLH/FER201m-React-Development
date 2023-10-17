const productList = [
    {'id': 'P001', 'name': 'Product 1', 'price': 10, 'image': '/assets/images/1.png', 'cat_id': 1},
    {'id': 'P002', 'name': 'Product 2', 'price': 20, 'image': '/assets/images/2.png', 'cat_id': 1},
    {'id': 'P003', 'name': 'Product 3', 'price': 15, 'image': '/assets/images/3.png', 'cat_id': 2},
    {'id': 'P004', 'name': 'Product 4', 'price': 20, 'image': '/assets/images/4.png', 'cat_id': 2},
    {'id': 'P005', 'name': 'Product 5', 'price': 15, 'image': '/assets/images/5.png', 'cat_id': 3},
    {'id': 'P006', 'name': 'Product 6', 'price': 20, 'image': '/assets/images/6.png', 'cat_id': 3},
  ];

  const [data] = productList;
  console.log(data);
  console.log(productList instanceof Array);