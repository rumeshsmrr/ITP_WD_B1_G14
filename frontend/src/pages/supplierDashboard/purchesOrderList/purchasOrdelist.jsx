import React, { useEffect, useState } from "react";

const PurchasOrderList =()=>{
    const [purchaseItem, setPurchaseItem] = useState([]);

    useEffect(() => {
        const getpurchaseItem = async () => {
          try {
            const res = await publicRequest.get("/cart/" + cuId);
            console.log(res.data);
            setPurchaseItem(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getpurchaseItem();
      }, [cuId]);

return(
    <>
        <h1>{}</h1>
    </>
)

}

export default PurchasOrderList;