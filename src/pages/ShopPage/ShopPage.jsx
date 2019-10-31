import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Product from "../../components/Product/Product";
import withNavBar from "../../hocs/withNavBar";

const ShopPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="ShopPageWrapper">
      <h2>Welcome to Shop</h2>
      <button onClick={() => setShowModal(true)}>Bay</button>
      <Modal onClose={() => setShowModal(false)} open={showModal}>
        <Product />
      </Modal>
    </div>
  );
};


export default withNavBar(ShopPage);
