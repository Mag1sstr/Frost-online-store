import { useState } from "react";
import styles from "./CartPage.module.scss";
import CartStage from "../../components/blocks/Stages/Cart/CartStage/CartStage";
import type { IStages } from "../../types/interfaces";
import ContactsStage from "../../components/blocks/Stages/Cart/ContactsStage/ContactsStage";
import DeliveryStage from "../../components/blocks/Stages/Cart/DeliveryStage/DeliveryStage";
import FinalStage from "../../components/blocks/Stages/Cart/FinalStage/FinalStage";
import { useCreateOrderMutation, useGetCartQuery } from "../../api/api";
import { useAuth } from "../../store/slices/authSlice";
import { toast } from "react-toastify";
import EmptyCart from "../../components/blocks/EmptyCart/EmptyCart";

function CartPage() {
  const { user } = useAuth();
  const [currentStage, setCurrentStage] = useState(0);
  const [mainStage, setMainStage] = useState(0);
  const [orderNumber, setOrderNumber] = useState<number | null>(null);

  const [contactsValues, setContactsValues] = useState({
    name: user?.firstName ?? "",
    surname: user?.lastName ?? "",
    patronymic: "",
    tel: "",
    email: user?.email ?? "",
  });
  const [deliveryValues, setDeliveryValues] = useState({
    area: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
  });

  const [createOrder, { isLoading: createOrderLoading }] =
    useCreateOrderMutation();
  const { data: cartData } = useGetCartQuery(null);

  const handleSubmit = () => {
    createOrder({
      area: deliveryValues.area,
      apartment: deliveryValues.apartment,
      city: deliveryValues.city,
      house: deliveryValues.house,
      phone: contactsValues.tel,
      street: deliveryValues.street,
    }).then((resp) => {
      setOrderNumber(resp.data!);
      toast.success("Заказ оформлен");
      console.log(resp.data);
    });
  };

  const stages: IStages[] = [
    {
      name: "Корзина",
      component: (
        <CartStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
          data={cartData?.items}
        />
      ),
    },
    {
      name: "Контактные данные",
      component: (
        <ContactsStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
          contactsValues={contactsValues}
          setContactsValues={setContactsValues}
        />
      ),
    },
    {
      name: "Доставка",
      component: (
        <DeliveryStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
          deliveryValues={deliveryValues}
          setDeliveryValues={setDeliveryValues}
          handleSubmit={handleSubmit}
        />
      ),
    },
    {
      name: "Завершение",
      component: (
        <FinalStage
          createOrderLoading={createOrderLoading}
          orderNumber={orderNumber}
        />
      ),
    },
  ];

  if (cartData && !cartData.items.length) {
    return <EmptyCart />;
  }

  return (
    <section className={styles.cart}>
      <div className={styles.inner}>
        <div className={styles.container}>
          <div className={styles.top}>
            <h2>Оформление заказа</h2>
            <div className={styles.stages}>
              {stages.map(({ name }, i) => (
                <button
                  key={name}
                  className={`${styles.stage} ${
                    currentStage === i && styles.active
                  }`}
                  onClick={() => {
                    if (i <= mainStage) {
                      setCurrentStage(i);
                    }
                  }}
                  disabled={i > mainStage}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.stage__container}>
          {stages[currentStage].component}
        </div>
      </div>
    </section>
  );
}

export default CartPage;
