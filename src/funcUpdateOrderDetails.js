const updateOrderDetails = function updateOrderDetails(
  orderId,
  prodId,
  prodQty,
  qtyToUpdate,
  refetch
) {
  //update existing row in order details table for product- altering the qty (- or +)
  var newprodQty = prodQty + qtyToUpdate;
  fetch(
    "/api/orderdetails/update/order/" +
      orderId +
      "/product/" +
      prodId +
      "/productqty/" +
      newprodQty,
    {
      method: "POST",
      credentials: "include",
    }
  ).then((response) => {
    response.json();
    refetch();
  });
};

export default updateOrderDetails;
