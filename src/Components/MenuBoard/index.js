import React, { useContext } from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import NineteenEastMain from '../../MenuStyles/NineteenEastMain';
import CityBar from '../../MenuStyles/CityBar';
import { AccentContext } from '../../App';

const MenuBoard = ({ menuItems, setMenuItems, foodItems, setFoodItems, renderSelectedBorder, backgroundStyle, showDuplicateHeadingMsg, menuHeading, handleRemoveMenuItem, handleNewButtonClick, menuStyle, setBackgroundStyle, setSelectedBorder, setSelectedBorderColor,
     paperColor, backgroundFlipped, pageWidth, pageHeight, orientation }) => {
        console.log(pageHeight);
    const {headingAccent, headingAccentColor, colorizeAccent} = useContext(AccentContext);
    function generateUniqueId() {
        return new Date().getTime(); // This can be replaced with a more robust method
    }



    // Calculate the index based on the Y coordinate of the drop
    function calculateDropIndex(clientY) {
        const menuContainer = document.getElementById('menu');
        const menuItems = document.getElementsByClassName('menu-item-name');

        // Calculate the top offset of the menu container
        const containerTop = menuContainer.getBoundingClientRect().top;

        // Calculate the drop position relative to the menu container
        const dropPosition = clientY - containerTop;

        // Calculate the index where the item should be inserted
        let dropIndex = 0;
        for (let i = 0; i < menuItems.length; i++) {
            const menuItem = menuItems[i];
            const menuItemTop = menuItem.getBoundingClientRect().top - containerTop;

            if (dropPosition > menuItemTop + menuItem.offsetHeight / 2) {
                dropIndex = i + 1;
            } else {
                break;
            }
        }

        return dropIndex;
    }

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const reorderedItems = reorder(
            menuItems,
            result.source.index,
            result.destination.index
        );

        console.log(reorderedItems);
        setMenuItems(reorderedItems);
    };

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    function handleOnDrop(e) {
        const menuItemType = e.dataTransfer.getData('menuItemType');
        const existingHeading = menuItems.find((item) => item.type === 'menuHeading' && item.name === menuItemType);

        if (existingHeading) {
            showDuplicateHeadingMsg();
            return;
        }

        const draggedItem = foodItems.find((item) => item.name === menuItemType) || menuHeading.find((item) => item.name === menuItemType);

        if (!draggedItem) {
            return;
        }

        let newItem;

        if (draggedItem.type === 'menuHeading') {
            newItem = {
                id: generateUniqueId(),
                headingID: draggedItem.id,
                name: draggedItem.name,
                type: draggedItem.type,
            };
        } else if (draggedItem.type === 'foodItem') {
            // Check if a food item with the same ID already exists in the menu
            const existingFoodItemIndex = menuItems.findIndex((item) => item.type === 'foodItem' && item.name === draggedItem.name);

            if (existingFoodItemIndex !== -1) {
                // If exists, remove the existing one
                setMenuItems((prevItems) => [
                    ...prevItems.slice(0, existingFoodItemIndex),
                    ...prevItems.slice(existingFoodItemIndex + 1),
                ]);
            }


            setFoodItems((prevFoodItems) =>
                prevFoodItems.map((item) =>
                    item.id === draggedItem.id ? { ...item, isOnMenu: true } : item
                )
            );

            // Calculate the index where the item should be inserted
            const dropIndex = calculateDropIndex(e.clientY);

            // Insert the new food item at the calculated index
            setMenuItems((prevItems) => [
                ...prevItems.slice(0, dropIndex),
                {
                    id: generateUniqueId(),
                    headingID: draggedItem.id,
                    name: draggedItem.name,
                    description: draggedItem.description,
                    price: draggedItem.price,
                    extras: draggedItem.extras,
                    type: draggedItem.type,
                    symbol1: draggedItem.symbol1,
                    symbol2: draggedItem.symbol2,
                    symbol3: draggedItem.symbol3,
                    center: draggedItem.center,
                    price_with_name: draggedItem.price_with_name,
                    box_accent: draggedItem.box_accent,
                    box_accent_color: draggedItem.box_accent_color,
                },
                ...prevItems.slice(dropIndex),
            ]);
            return; // Return here to avoid executing the code below for menuHeading
        }

        // Calculate the index where the item should be inserted for menuHeading
        const dropIndexHeading = calculateDropIndex(e.clientY);

        // Insert the new menuHeading item at the calculated index
        setMenuItems((prevItems) => [
            ...prevItems.slice(0, dropIndexHeading),
            newItem,
            ...prevItems.slice(dropIndexHeading),
        ]);

        console.log(menuItems);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    const renderMenuStyle = (item) => {
        switch (menuStyle.name) {
          case '19 East Main':
            return <NineteenEastMain item={item}
            handleRemoveMenuItem={handleRemoveMenuItem}
            handleNewButtonClick={handleNewButtonClick}
        />;
          case 'City Bar':
            return <CityBar item={item}
            handleRemoveMenuItem={handleRemoveMenuItem}
            handleNewButtonClick={handleNewButtonClick}
        />;
          default:
            return null; 
        }
      };

    return (
        <div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" >
                    {(provided) => (
                        <div
                            id="menu"
                            style={{width: `calc(${pageWidth} - 4.2rem)`, height: `calc(${pageHeight} - 0.5rem)`}}
                            onDrop={handleOnDrop}
                            onDragOver={handleDragOver}
                            {...provided.droppableProps}
                            ref={provided.innerRef}

                        >
                            
                            <div id="bg-style" style={backgroundStyle === 'paper' ? { width:pageWidth, height: pageHeight, backgroundColor: paperColor, backgroundImage: `url(${backgroundStyle})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'  } : 
                            {width: pageWidth, height: pageHeight, transform: backgroundFlipped ? 'scaleY(-1)' : 'none', backgroundImage: `url(${backgroundStyle})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                            {renderSelectedBorder()}
                            </div>

                            {menuItems.map((item, index) => (
                                <Draggable
                                    key={item.id} // Use a unique key for each draggable item
                                    draggableId={`menu-${item.id}`}
                                    index={index}

                                >
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className='menu-item-name'
                                        >
                                            {renderMenuStyle(item)}
                                        </div>

                                    )}
                                </Draggable>

                            ))}

                            {provided.placeholder}


                        </div>

                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default MenuBoard;