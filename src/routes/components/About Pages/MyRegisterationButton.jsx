import { motion } from "framer-motion";

const MyRegisterationButton = ({ disabled ,argument}) => {
  const isRegistered = argument === "true";
  const hoverAnimation = isRegistered || disabled ? {} : { scale: 1.1 };
  const tapAnimation = isRegistered || disabled ? {} : { scale: 0.9 };

  return (
    <motion.button
      disabled={disabled || isRegistered}
      className="about-preregister-button"
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
     {isRegistered ? 'Registered!' : 'Register Now'} 
    </motion.button>
  );
};

export default MyRegisterationButton;
