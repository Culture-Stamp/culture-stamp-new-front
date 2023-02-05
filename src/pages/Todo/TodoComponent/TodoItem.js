import React, { useRef } from "react";
import styled from "styled-components";
import {MdDragIndicator} from 'react-icons/md';
import { useDrag, useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes.js'

function TodoItem({todo, onRemove, onToggle, index, moveCard }) {
    const { id, content, checked } = todo;
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
      accept: ItemTypes.CARD,
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover(item, monitor) {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = index
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return
        }
        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        // Get vertical middle
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        // Determine mouse position
        const clientOffset = monitor.getClientOffset()
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
        // Time to actually perform the action
        moveCard(dragIndex, hoverIndex)
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex
      },
    })
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.CARD,
      item: () => {
        return { id, index }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })
    //const opacity = isDragging ? 0 : 1
    drag(drop(ref));

  return (
    <Container ref={ref} data-handler-id={handlerId}>
      <Button>
        <MdDragIndicator size='24'/>
        <DoneButton onClick={() => onToggle(id)}>
          {checked ? "ok" : null}
        </DoneButton> 
      </Button>
      <Topic
        style={{
          textDecoration: checked ? "line-through" : null,
          color: checked ? "#ccc" : "#000",
        }}
      >
        {content}
      </Topic>
      <DeleteButton onClick={() => onRemove(id)}>
        x
      </DeleteButton>
    </Container>
  );
}

// CSS

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin: 10px 0;
  padding: 0 30px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  overflow: auto;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoneButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  border: 0.1px solid #ccc;
  border-radius: 50%;
  background-color: transparent;
  font-size: 7px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Topic = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 30px;
  padding: 0 10px;
  margin: 0 10px;
  font-size: 18px;
`;

const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;



export default TodoItem;