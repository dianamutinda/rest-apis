<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [SMART-SHOP PRODUCTS API](#smart-shop-products-api)
  - [Usage](#usage)
    - [Get All Products](#get-all-products)
    - [Get a Single Product](#get-a-single-product)
    - [Create a Product](#create-a-product)
    - [Update a Product](#update-a-product)
    - [Delete a Product](#delete-a-product)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# SMART-SHOP PRODUCTS API
## Usage
### Get All Products  
* Endpoint:``` /products```  
* Method: ```GET```  
* Description: Retrieves a list of all products.  
Example:   
```curl -X GET http://localhost:3000/products```

### Get a Single Product  
* Endpoint:``` /products/:id```  
* Method: ```GET```  
* Description: Retrieves a single product by its ID.  
Example:  
```curl -X GET http://localhost:3000/products/1```

### Create a Product
* Endpoint:``` /products```
* Method: ```POST```  
* Description: Creates a new product.  
Example:
```  
 curl -X POST http://localhost:3000/products \
-H "Content-Type: application/json" \
-d '{"productthumbnail": "thumbnail_url", "producttitle": "Product Title", "productdescription": "Product Description", "productcost": 100, "onoffer": true}' 
```

### Update a Product
* Endpoint:```/products/:id```   
* Method: ```PATCH```  
* Description: Updates an existing product.  
Example:  
```
curl -X PATCH http://localhost:3000/products/1 \
-H "Content-Type: application/json" \
-d '{"productthumbnail": "new_thumbnail_url", "producttitle": "Updated Title", "productdescription": "Updated Description", "productcost": 150, "onoffer": false}'
```

### Delete a Product
* Endpoint:``` /products/:id```  
* Method: ```DELETE```  
* Description: Deletes a product by its ID.  
Example:  
```curl -X DELETE http://localhost:3000/products/1```