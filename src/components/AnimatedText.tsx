import * as motion from "motion/react-client";

type Props = {
  text: string;
};

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
  }),
};

export default function AnimatedText({ text }: Props) {
  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} style={{ whiteSpace: "pre" }}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}
