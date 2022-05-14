import { Reorder } from 'framer-motion';
import {  RiCloseCircleLine } from 'react-icons/ri';

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom }
  })
};

const List = ({ items, removeItem, reOrderList }) => {
  return (
    <>
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={reOrderList}
        className="ul-portal"
        style={{ display: "flex", flexDirection: "column", flex: 2 }}>
          { items.map((item, index) => (
            <Reorder.Item
              value={item}
              className="list-row"
              key={item.id}
              layoutId={itemVariants}
              initial="hidden"
              animate="visible"
              exit="pre"
              custom={(index + 1) * 0.2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              >
                <div>{item.text}</div>
                <div className='icons'>
                  <RiCloseCircleLine
                    onClick={() => removeItem(item.id)}
                    className="delete-icon">  
                  </RiCloseCircleLine>
                </div>
            </Reorder.Item>
          ))}
      </Reorder.Group>
    </>
  );
}

export default List;