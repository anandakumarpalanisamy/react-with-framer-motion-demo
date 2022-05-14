import { motion } from 'framer-motion';

const svgVariants = {
  start: {},
  finished: {}
}

const Bag = () => {
  return (
    <div className="bag-svg">
      <svg
        xmlns="http://www.w3c.org/2000/svg"
        className="h-6 v-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#fff">
          <motion.path
            style={{ strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 1 }}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            variants={svgVariants}
            initial="start"
            animate="finished"
          ></motion.path>
      </svg>
    </div>
  )
}

export default Bag;