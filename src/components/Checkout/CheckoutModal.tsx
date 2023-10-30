import { ReactElement, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import ButtonPrimary from "@/components/ui/buttons/ButtonPrimary";
import { useCartContext } from "@/context/CartContext";
import { db } from "@/lib/firebase/config";
import { FormDataType } from "@/types/global";

type CheckoutModalProps = {
  cartItems: ReactNode;
  grandTotal: number | null;
  formData: FormDataType;
};

const CheckoutModal = ({
  cartItems,
  grandTotal,
  formData,
}: CheckoutModalProps): ReactElement => {
  const { handleClearCart } = useCartContext();

  const handleOrderSubmit = async () => {
    const creationDate = serverTimestamp();
    const orderData = {
      ...formData,
      creationDate: creationDate,
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), { ...orderData });
    } catch (e) {
      console.log(e);
    }

    handleClearCart();
  };

  return (
    /* Checkout Modal */
    <div className="absolute left-1/2 top-0 z-50 mx-auto mt-6 w-full -translate-x-1/2 transform px-6 md:w-3/4 md:px-9 lg:w-auto lg:px-6">
      {/* Checkout Modal container */}
      <div className="container mt-4 flex flex-col gap-4 rounded-lg bg-light-100 p-6 text-dark-900 md:gap-8 md:p-9">
        {/* Modal heading */}
        <div className="flex items-center gap-3">
          <h5 className="heading-5 flex-grow uppercase">
            Thank you for your order, {`${formData.name}`}
          </h5>
          <Image
            src="/assets/icons/pages/Checkout/icon-order-confirmation.svg"
            alt="Succesfull order icon"
            className="w-12"
            width={50}
            height={50}
          />
        </div>
        <p className="text-body opacity-50">
          You will receive an email confirmation shortly.
        </p>
        {/* Order summary */}
        <div className="flex flex-col">
          {/* First/Left item */}
          <div className="flex-grow rounded-t-lg bg-light-300 p-4 md:rounded-b-none md:rounded-l-lg">
            {cartItems}
          </div>
          {/* Second/Right item */}
          <div className="flex items-center rounded-b-lg bg-dark-800 p-4 text-light-200 md:rounded-b-lg md:rounded-r-lg md:rounded-t-none lg:w-auto">
            <div className="flex w-full flex-col items-center ">
              <p className="subtitle mt-auto opacity-50">GRAND TOTAL</p>
              <p className="heading-6">
                $ {grandTotal?.toLocaleString("en-US")}
              </p>
            </div>
          </div>
        </div>
        <Link href="/" onClick={handleOrderSubmit} className="text-light-100">
          <ButtonPrimary
            type={"button"}
            label={"Back to home"}
            style={"w-full uppercase"}
          />
        </Link>
      </div>
    </div>
  );
};

export default CheckoutModal;
