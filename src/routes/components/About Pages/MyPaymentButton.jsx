import { motion } from "framer-motion";

const MyPaymentButton = ({ disabled , argument}) => {
  const isPaid = argument === "true";
  const hoverAnimation = isPaid || disabled ? {} : { scale: 1.1 };
  const tapAnimation = isPaid || disabled ? {} : { scale: 0.9 };

  return (
    <motion.button
      disabled={disabled || isPaid}
      className="about-preregister-button"
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
     {isPaid ? 'Paid!' : 'Pay Now'} 
    </motion.button>
  );
};

export default MyPaymentButton;
