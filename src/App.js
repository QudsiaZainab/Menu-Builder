import './App.css';
import './Menu_Styles.css';
import { useState, createContext } from 'react';
import symbols from './data/symbols';
import Casino3 from './Borders/Casino3';
import Thin_thinner from './Borders/Thin_thinner';
import Nouveau from './Borders/Nouveau';
import BlackTie10 from './Borders/BlackTie10';
import menuHeading from './data/menuHeading';
import menuStyles from './data/menuStyles';
import BorderVIC2 from './Borders/BorderVIC2';
import BorderColor5 from './Borders/BorderColor5';
import foods from './data/foods';
import MenuBoard from './Components/MenuBoard';
import DesignDropdown from './dropdowns/DesignDropdown';
import MenuStylesDialog from './dialogs/MenuStylesDialog'
import BackgroundDialog from './dialogs/BackgroundDialog';
import BorderDialog from './dialogs/BorderDialog';
import AccentsDialog from './dialogs/AccentsDialog';
import FileDropdown from './dropdowns/FileDropdown';
import PageSetupDialog from './dialogs/PageSetupDialog';

export const AccentContext = createContext();
export const ColorizeAccentContext = createContext();

function App() {

  const [isAddingNewFoodItem, setIsAddingNewFoodItem] = useState(false);
  const [selectedFoodItemId, setSelectedFoodItemId] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [showSymbolForm, setShowSymbolForm] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState('none')
  const [selectedSymbol, setSelectedSymbol] = useState(null);
  const [selectedBorder, setSelectedBorder] = useState('BlackTie10');
  const [showMenuStyle, setShowMenuStyle] = useState(false);
  const [selectedBorderColor, setSelectedBorderColor] = useState("#000000");
  const [showBackgroundStyle, setShowBackgroundStyle] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [tempBorder, setTempBorder] = useState('none');
  const [tempBackground, setTempBackground] = useState('none');
  const [headingAccent, setHeadingAccent] = useState('none');
  const [headingAccentColor, setHeadingAccentColor] = useState('none');
  const [showAccents, setShowAccents] = useState(false);
  const [colorizeAccent, setColorizeAccent] = useState(false);
  const [tempAccent, setTempAccent] = useState('none');
  const [tempAccentColor, setTempAccentColor] = useState('none');
  const [tempColorizeAccent, setTempColorizeAccent] = useState(false);
  const [paperColor, setPaperColor] = useState("black");
  const [backgroundFlipped, setBackgroundFlipped] = useState(false);
  const [showFileDropdown, setShowFileDropdown] = useState(false);
  const [showPageSetup, setShowPageSetup] = useState(false);
  const [orientation, setOrientation] = useState('portrait');
  const [pageWidth, setPageWidth] = useState("8.5in");
  const [selectedPage, setSelectedPage] = useState('Letter');
  const [pageHeight, setPageHeight] = useState("11in");
  const [customWidth, setCustomWidth] = useState("5.5");
  const [customHeight, setCustomHeight] = useState("8.5");
  const [menuStyle, setMenuStyle] = useState({
    name: '19 East Main',
    border: 'BlackTie10',
    borderColor: 'black',
    background: 'none',
  });
  const [designDropdown, setDesignDropdown] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    description: '',
    extras: '',
    isOnMenu: false,
    id: '',
    symbol1: 'none',
    symbol2: 'none',
    symbol3: 'none',
    center: false,
    price_with_name: false,
    box_accent: 'none',
    box_accent_color: '#000000',
  });
  const [foodItems, setFoodItems] = useState(foods);


  const handleSymbolSelection = (symbol) => {
    // Update the selected symbol in the formValues state based on the selectedSymbol
    setFormValues((prevValues) => {
      const updatedSymbol = {
        [selectedSymbol]: symbol,
      };
      return { ...prevValues, ...updatedSymbol };
    });

    // Close the symbols form
    setShowSymbolForm(false);
  };

  console.log(pageHeight);



  const handleInputChange = (e, fieldName) => {
    const { value, type, checked } = e.target;

    // For checkboxes, use the 'checked' property to get the boolean value
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: fieldValue,
    }));
  };


  const handleSymbolForm = (symbolNumber) => {
    setShowSymbolForm(true);
    setSelectedSymbol(`symbol${symbolNumber}`);
  };


  const handleNewButtonClick = (foodItemId) => {
    console.log("new button clicked");
    setIsAddingNewFoodItem(true);
    setSelectedFoodItemId(foodItemId);

    // Initialize form values based on the selected food item
    const selectedFoodItem = foodItems.find((item) => item.id === foodItemId);
    console.log(formValues);

    setFormValues({
      name: selectedFoodItem ? selectedFoodItem.name : '',
      price: selectedFoodItem ? selectedFoodItem.price : '',
      description: selectedFoodItem ? selectedFoodItem.description : '',
      extras: selectedFoodItem ? selectedFoodItem.extras : '',
      isOnMenu: selectedFoodItem && selectedFoodItem.isOnMenu ? selectedFoodItem.isOnMenu : false,
      id: selectedFoodItem ? selectedFoodItem.id : '',
      symbol1: selectedFoodItem ? selectedFoodItem.symbol1 : 'none',
      symbol2: selectedFoodItem ? selectedFoodItem.symbol2 : 'none',
      symbol3: selectedFoodItem ? selectedFoodItem.symbol3 : 'none',
      center: selectedFoodItem && selectedFoodItem.center ? selectedFoodItem.center : false,
      price_with_name: selectedFoodItem && selectedFoodItem.price_with_name ? selectedFoodItem.price_with_name : false,
      box_accent: selectedFoodItem && selectedFoodItem.box_accent ? selectedFoodItem.box_accent : 'none',
      box_accent_color: selectedFoodItem && selectedFoodItem.box_accent_color ? selectedFoodItem.box_accent_color : '#000000',
    });

    console.log(formValues);

  };



  const closeNewItemMenu = () => {
    console.log("close button clicked");
    setIsAddingNewFoodItem(false);
  };





  const handleCancel = () => {
    setIsAddingNewFoodItem(false);
  };



  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };



  const handleColorChange = (event) => {
    setFormValues({
      ...formValues,
      box_accent_color: event.target.value,
    });
  };




  const handleSelectionChange = (selectedValue) => {
    setFormValues({
      ...formValues,
      box_accent: selectedValue,
    });
  };








  const handleRemoveMenuItem = (itemId) => {
    setMenuItems((prevMenuItems) => {
      const removedItemIndex = prevMenuItems.findIndex((item) => item.id === itemId);

      if (removedItemIndex === -1) {
        // Item with the specified ID not found
        return prevMenuItems;
      }

      // Get the name of the removed menu item
      const removedItemName = prevMenuItems[removedItemIndex].name;

      // Remove the item with the specified ID
      const updatedMenuItems = [
        ...prevMenuItems.slice(0, removedItemIndex),
        ...prevMenuItems.slice(removedItemIndex + 1),
      ];

      // Update IDs of remaining items
      const updatedMenuItemsWithNewIds = updatedMenuItems.map((item, index) => ({
        ...item,
        id: index + 1,
      }));

      // Update the corresponding food item's isOnMenu to false
      setFoodItems((prevFoodItems) =>
        prevFoodItems.map((foodItem) =>
          foodItem.name === removedItemName ? { ...foodItem, isOnMenu: false } : foodItem
        )
      );

      console.log(menuItems);

      return updatedMenuItemsWithNewIds;
    });
  };



  function handleOnDrag(e, menuItemType, item) {
    e.dataTransfer.setData("menuItemType", menuItemType);
  }



  // Function to generate a unique ID
  function generateUniqueId() {
    return new Date().getTime(); // This can be replaced with a more robust method
  }

  function showDuplicateHeadingMsg() {
    const duplicateMsg = document.getElementById('duplicate-heading-msg');
    duplicateMsg.style.opacity = 1;


    setTimeout(() => {
      closeDuplicateHeadingMsg();
    }, 10000); // 3
  }

  function closeDuplicateHeadingMsg() {
    const duplicateMsg = document.getElementById('duplicate-heading-msg');
    duplicateMsg.style.opacity = 0;
  }


  const updateMenuItem = (updatedItem) => {
    setMenuItems((prevItems) =>
      prevItems.map((item) =>
        item.headingID === updatedItem.id ? { ...item, ...updatedItem } : item
      )
    );
    console.log(menuItems);
  };


  const findMaxId = (items) => {
    return items.reduce((maxId, item) => (item.id > maxId ? item.id : maxId), 0);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get the values from the form
    const { name, price, description, extras, isOnMenu, id, symbol1, symbol2, symbol3, center, price_with_name, box_accent, box_accent_color } = formValues;
    console.log(formValues);

    const selectedFoodItem = foodItems.find(item => item.id === selectedFoodItemId);
    console.log(selectedFoodItem);

    if (selectedFoodItem) {
      // Update existing food item in both foodItems and menuItems
      const updatedFoodItems = foodItems.map((item) =>
        item.id === selectedFoodItemId
          ? { ...item, name, description, price, extras, isOnMenu, id, symbol1, symbol2, symbol3, center, price_with_name, box_accent, box_accent_color }
          : item
      );

      console.log(updatedFoodItems);

      setFoodItems(updatedFoodItems);

      const updatedMenuItem = {
        id: selectedFoodItemId,
        name,
        description,
        price,
        extras,
        type: 'foodItem',
        symbol1,
        symbol2,
        symbol3,
        center,
        price_with_name,
        box_accent,
        box_accent_color,
      };

      // Update the corresponding menu item as well
      updateMenuItem(updatedMenuItem);
    } else {
      // Add new food item
      const maxId = findMaxId(foodItems);
      const newFoodItem = {
        id: maxId + 1,
        name,
        description,
        price,
        extras,
        type: 'foodItem',
        isOnMenu: false, // Set isOnMenu based on the checkbox
        symbol1,
        symbol2,
        symbol3,
        center,
        price_with_name,
        box_accent,
        box_accent_color,
      };

      // Update the food items state
      setFoodItems((prevItems) => [...prevItems, newFoodItem]);

      // If the item is on the menu, add a corresponding menu item

    }

    console.log(id);
    if (isOnMenu && !menuItems.some((item) => item.headingID === id)) {
      const newMenuItem = {
        id: generateUniqueId(),
        headingID: id, // Adjust the headingID based on your logic
        name,
        type: 'foodItem',
        description,
        symbol1,
        symbol2,
        symbol3,
        price,
        extras,
        center,
        price_with_name,
        box_accent,
        box_accent_color,
      };

      // Update the menu items state
      setMenuItems((prevItems) => [...prevItems, newMenuItem]);
    }

    if (!isOnMenu && menuItems.some((item) => item.headingID === id)) {
      handleRemoveMenuItem(id);
    }

    // Close the new item menu
    closeNewItemMenu();
    setSelectedFoodItemId(null);

    // Reset the form values
    setFormValues({
      id: '',
      name: '',
      price: '',
      description: '',
      extras: '',
      isOnMenu: false,
      symbol1: 'none',
      symbol2: 'none',
      symbol3: 'none',
      center: false,
      price_with_name: false,
      box_accent: 'none',
      box_accent_color: '#000000',
    });

    console.log(foodItems);
  };

  const renderSelectedBorder = () => {
    const w = `${pageWidth} - 3rem`
    switch (selectedBorder) {
      case 'Casino3':
        return <Casino3 color={selectedBorderColor} widt = {`calc(${pageWidth} - 3rem)`} heigh = {`calc(${pageHeight} - 3rem)`}/>;
      case 'Thin_thinner':
        return <Thin_thinner color={selectedBorderColor} widt = {`calc(${pageWidth} - 3rem)`} heigh = {`calc(${pageHeight} - 3rem)`}/>;
      case 'Nouveau':
        return <Nouveau color={selectedBorderColor} widt = {`calc(${pageWidth} - 3rem)`} heigh = {`calc(${pageHeight} - 3rem)`}/>;
      case 'BlackTie10':
        return <BlackTie10 color={selectedBorderColor} widt = {`calc(${pageWidth} - 3rem)`} heigh = {`calc(${pageHeight} - 3rem)`}/>;
      case 'BorderVIC2':
        return <BorderVIC2 color={selectedBorderColor} widt = {`calc(${pageWidth} - 3rem)`} heigh = {`calc(${pageHeight} - 3rem)`}/>;
      case 'BorderColor5':
        return <BorderColor5 color={BorderColor5} widt = {`calc(${pageWidth} - 3rem)`} heigh = {`calc(${pageHeight} - 3rem)`}/>;
      // Add cases for other border components as needed
      default:
        return null; // Default case, can be a fallback component or null
    }
  };

  return (
    <div>
      <div id="duplicate-heading-msg" className="duplicate-msg ">
        <div className='label-close'>
          <img src="/images/close-icon.png" alt="Close" onClick={closeDuplicateHeadingMsg}></img>
        </div>

        <p>That heading is already on the menu. To reorder items, drag them while on the menu.</p>

      </div>

      <header >
        <img src='/images/logo.png' alt=''></img>
        <h3>iMenu Pro</h3>
        <a href='#w' id="sample-menu">Sample Menu</a>
        <a href='#e' id="delete-icon-item"><img alt="" id="delete-icon" src="/images/delete.png"></img></a>
        <a href='#e' className='head-item'>Page: 1</a>
        <a href='#e' className='head-item'>Spacing: 0.0</a>
        <a href='#e' className='head-item'>Size: 8.5" * 11"</a>
        <button id="sign-up">Sign up</button>
      </header>
      <nav id="nav1">
        <div className='nav-item'
          onMouseEnter={() => { setShowFileDropdown(true) }}
          onMouseLeave={() => { setShowFileDropdown(false) }}
        >File<img alt="" src='/images/dropdown.png' className='dropdown'></img></div>
        <div className='nav-item'>Edit<img alt="" src='/images/dropdown.png' className='dropdown'></img></div>
        <div className='nav-item'>View<img alt="" src='/images/dropdown.png' className='dropdown'></img></div>
        <div className='nav-item'>Insert<img alt="" src='/images/dropdown.png' className='dropdown'></img></div>
        <div className='nav-item' id="design"
          onMouseEnter={() => { setDesignDropdown(true) }}
          onMouseLeave={() => { setDesignDropdown(false) }}
        >Design
          <img alt="" src='/images/dropdown.png' className='dropdown'></img>

        </div>

        <a href="#w" id="nav1-style">Style: 19 east main</a>
      </nav>
      {designDropdown && (<DesignDropdown setDesignDropdown={setDesignDropdown}
        setShowMenuStyle={setShowMenuStyle} setShowBackgroundStyle={setShowBackgroundStyle}
        setShowBorder={setShowBorder} setTempBorder={setTempBorder} selectedBorder={selectedBorder}
        setTempBackground={setTempBackground} backgroundStyle={backgroundStyle}
        setShowAccents={setShowAccents} setTempColorizeAccent={setTempColorizeAccent} setTempAccent={setTempAccent} setTempAccentColor={setTempAccentColor}
        headingAccent={headingAccent} headingAccentColor={headingAccentColor} colorizeAccent={colorizeAccent} />)}
      <nav id="nav-2">
        <div className='nav-item'><img alt="" className='nav2-img' src="/images/open-menu.png"></img></div>
        <div className='nav-item'><img alt="" className='nav2-img' src="/images/save-menu.png"></img></div>
        <div className='nav-item'><img alt="" className='nav2-img' src="/images/print-menu.png"></img></div>
        <div className='nav-item'><img alt="" className='nav2-img' src="/images/zoom-out-menu.png"></img></div>
        <div className='nav-item'><img alt="" className='nav2-img' src="/images/zoom-in-menu.png"></img></div>
        <div className='nav-item'><img alt="" className='nav2-img' src="/images/page-1-menu.png"></img></div>
        <div className='nav-item'><img alt="" className='nav2-img' src="/images/page-2-menu.png"></img></div>
        <div className='nav-item'>&lt;&lt; Style</div>
        <div className='nav-item'>Style&gt;&gt;</div>
        <div className='nav-item'><img img alt="" className='nav2-img' src="/images/fit-menu.png"></img></div>
        <div className='nav-item'><img img alt="" className='nav2-img' src="/images/shrink-space-menu.png"></img></div>
        <div className='nav-item'><img img alt="" className='nav2-img' src="/images/expand-space-menu.png"></img></div>
        <div className='nav-item'><img img alt="" className='nav2-img' src="/images/reset-spacing-menu.png"></img></div>
        <div className='nav-item'><img img alt="" className='nav2-img' src="/images/shrink-fonts-menu.png"></img></div>
        <div className='nav-item'><img img alt="" className='nav2-img' src="/images/grow-fonts-menu.png"></img></div>
        <div className='nav-item'><img img alt="" className='nav2-img' src="/images/reset-fonts-menu.png"></img></div>
        <div className='nav-item'><img alt="" className='nav2-img' src="/images/help-menu.png"></img></div>
      </nav>
      <div id="main" style={{overflowX: 'auto', overflowY: 'hidden'}}>
        <div id="items">
          <div id="items-head">
            <h3>Food Items</h3>
            <button id="new-button" onClick={handleNewButtonClick}><img alt="" id="new-icon" src="/images/new-icon.png" ></img>new</button>
            <button id="list-button"><img alt="" id="list-icon" src="/images/list.png"></img>list<img alt="" src='/images/dropdown.png' id="list-dropdown"></img></button>
            <span id="expand-list">&gt;&gt;</span>
          </div>
          <div id="search-box">
            <img alt="" src='/images/search-icon.png'></img>
            <input placeholder='Find Food Item' type="text"></input>
          </div>
          <div id="food-items">
            {foodItems.map((foodItem) => (
              <div
                key={foodItem.id}
                className="food-item"
                draggable
                onDragStart={(e) => handleOnDrag(e, foodItem.name, foodItem)}
                onClick={() => handleNewButtonClick(foodItem.id)}
              >
                <img src="/images/food-item-icon.png" alt="" />
                <div className="item-name">{foodItem.name}</div>
              </div>
            ))}
          </div>


          <div id="headings-head">
            <h3>Menu Headings</h3>
            <button id="new-button"><img alt="" id="new-icon" src="/images/new-icon.png"></img>new</button>
          </div>


          <div id="headings-items">
            {menuHeading.map((headingItem) => (
              <div
                key={headingItem.id}
                className="food-item"
                draggable
                onDragStart={(e) => handleOnDrag(e, headingItem.name, headingItem)}
              >
                <img src="/images/food-item-icon.png" alt="" />
                <div className="item-name">{headingItem.name}</div>
              </div>
            ))}
          </div>
        </div>
        <AccentContext.Provider value={{ headingAccent, headingAccentColor, colorizeAccent }}>
          <MenuBoard
            menuItems={menuItems}
            setMenuItems={setMenuItems}
            foodItems={foodItems}
            setFoodItems={setFoodItems}
            renderSelectedBorder={renderSelectedBorder}
            backgroundStyle={backgroundStyle}
            showDuplicateHeadingMsg={showDuplicateHeadingMsg}
            menuHeading={menuHeading}
            handleRemoveMenuItem={handleRemoveMenuItem}
            handleNewButtonClick={handleNewButtonClick}
            menuStyle={menuStyle}
            setBackgroundStyle={setBackgroundStyle}
            setSelectedBorder={setSelectedBorder}
            setSelectedBorderColor={setSelectedBorderColor}
            paperColor={paperColor}
            backgroundFlipped={backgroundFlipped}
            pageWidth = {pageWidth}
            pageHeight = {pageHeight}
            orientation = {orientation}
          />
        </AccentContext.Provider>
      </div>




      {isAddingNewFoodItem && (
        <div id="new-food-item">
          <div className="dialog-head">
            <h2>Food Items</h2>
            <div id="new-food-item-head-right">
              <button className='q-button'>?</button>
              <img alt="" className="new-item-cross" src='images/close-icon.png' onClick={closeNewItemMenu}></img>
            </div>


          </div>


          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <textarea type="text" placeholder='Name' id="name" name="name" value={formValues.name} onChange={(e) => handleInputChange(e, 'name')} required></textarea>
              <input type="text" id="price" placeholder='Price' name='price' value={formValues.price} onChange={(e) => handleInputChange(e, 'price')}></input>
            </div>


            <textarea id="description" type="text" placeholder='Description' name='description' value={formValues.description} onChange={(e) => handleInputChange(e, 'description')}></textarea>
            <input type="text" id="extras" placeholder='Extras' name='extras' value={formValues.extras} onChange={(e) => handleInputChange(e, 'extras')}></input>
            <div id="new-item-main">
              <div id="symbols">
                <h4>Symbols</h4>
                <div id="symbols-row">
                  <p onClick={() => { handleSymbolForm(1) }}>{formValues.symbol1}</p>
                  <p onClick={() => { handleSymbolForm(2) }}>{formValues.symbol2}</p>
                  <p onClick={() => { handleSymbolForm(3) }}>{formValues.symbol3}</p>
                </div>
                <h5>Layout Tweaks</h5>
                <div className='check-input'><input type="checkbox" checked={formValues.center} onChange={(e) => handleInputChange(e, 'center')}></input><p>Center</p></div>
                <div className='check-input' ><input type="checkbox" ></input><p>Span</p></div>
                <div className='check-input'><input type="checkbox" checked={formValues.price_with_name} onChange={(e) => handleInputChange(e, 'price_with_name')}></input><p>Price with Name</p></div>
                <div className='check-input'><input type="checkbox" ></input><p>Wrap Text</p></div>
              </div>
              <div id="box-accent">
                <h4>Box/Accent</h4>
                <div className="custom-dropdown">
                  <div className="selected-option">
                    {formValues.box_accent !== 'none' && <img className='dropdown-imgs' src={`images/${formValues.box_accent}.png`} alt={formValues.box_accent} />}
                    <span>{formValues.box_accent === 'none' ? 'none' : ''}</span>
                    <img alt="" id='custom-dropdown-img' src='images/dropdown.png'></img>
                  </div>
                  <ul className="options">
                    <li onClick={() => handleSelectionChange('none')}>
                      none
                    </li>
                    <li onClick={() => handleSelectionChange('thick-solid-border')}>
                      <img className='dropdown-imgs' src="images/thick-solid-border.png" alt="image2" />
                    </li>

                  </ul>
                </div>


                <div id="color-selector">
                  <label htmlFor="colorPicker">Box/Accent Color:</label>
                  <input
                    type="color"
                    id="colorPicker"
                    value={formValues.box_accent_color}
                    onChange={handleColorChange}
                  />

                </div>
                <div id="below-color">
                  <div id="bin">
                    <p>Bin/Number</p>
                    <input type="text" placeholder='bin 389'></input>
                  </div>
                  <div id="n-photo">
                    No photo
                  </div>
                </div>
                <div id="upload-photo">
                  <img alt="" src="images/camera.png"></img>
                  <p>Upload Photo</p>
                </div>
              </div>
              <div id="spacing">
                <h4>Spacing</h4>
                <div id="spacing-drpdn">
                  <label>
                    <input
                      type="radio"
                      value="option1"
                      checked={selectedOption === 'option1'}
                      onChange={handleOptionChange}
                    />
                    <p>Style</p>
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="option2"
                      checked={selectedOption === 'option2'}
                      onChange={handleOptionChange}
                    />
                    <p>Custom</p>
                  </label>
                </div>
                <label className="spacing-labels">
                  <p>Before:</p>
                  <input type="text"></input>
                </label>
                <label className="spacing-labels">
                  <p>After:</p>
                  <input type="text"></input>
                </label>
              </div>
            </div>

            <div id="new-food-item-footer">
              <div id="new-food-item-footer-left">
                <input type="checkbox" checked={formValues.isOnMenu} onChange={(e) => handleInputChange(e, 'isOnMenu')}></input>
                <p>On Menu</p>
              </div>
              <div id="new-food-item-footer-right">
                <button type="submit" id="ok-button">OK</button>
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={(event) => { event.preventDefault() }}>Next</button>

              </div>


            </div>

          </form>

          {showSymbolForm && (
            <div id="symbols-form">
              {symbols.map((symbol) => (
                <i key={symbol} onClick={() => handleSymbolSelection(symbol)}>
                  {symbol}
                </i>
              ))}
            </div>
          )}

        </div>)}



      {showBackgroundStyle && (<BackgroundDialog setBackgroundStyle={setBackgroundStyle} backgroundStyle={backgroundStyle} setShowBackgroundStyle={setShowBackgroundStyle} tempBackground={tempBackground}
        paperColor={paperColor} setPaperColor={setPaperColor}

        backgroundFlipped={backgroundFlipped}
        setBackgroundFlipped={setBackgroundFlipped} />)}

      {showBorder && (<BorderDialog
        setSelectedBorder={setSelectedBorder}
        selectedBorder={selectedBorder}
        setShowBorder={setShowBorder}
        setSelectedBorderColor={setSelectedBorderColor}
        selectedBorderColor={selectedBorderColor}
        tempBorder={tempBorder}
        setTempBorder={setTempBorder}
      />)}


      {showMenuStyle && (<MenuStylesDialog
        menuStyle={menuStyle}
        setMenuStyle={setMenuStyle}
        setSelectedBorder={setSelectedBorder}
        setSelectedBorderColor={setSelectedBorderColor}
        setBackgroundStyle={setBackgroundStyle}
        menuStyles={menuStyles}
        setShowMenuStyle={setShowMenuStyle}
      />)}
      {showAccents && (
        <AccentContext.Provider value={{ colorizeAccent, setColorizeAccent }}>
          <AccentsDialog
            formValues={formValues}
            setFormValues={setFormValues}
            setShowAccents={setShowAccents}
            setHeadingAccent={setHeadingAccent}
            setHeadingAccentColor={setHeadingAccentColor}
            headingAccent={headingAccent}
            headingAccentColor={headingAccentColor}
            tempAccent={tempAccent}
            tempAccentColor={tempAccentColor}
            tempColorizeAccent={tempColorizeAccent}
          />
        </AccentContext.Provider>)}

      {showFileDropdown && (<FileDropdown
        setshowFileDropdown={setShowFileDropdown}
        setMenuItems={setMenuItems}
        setShowPageSetup={setShowPageSetup}
      />)}

      <AccentContext.Provider value={{ setPageWidth, setPageHeight, setOrientation, pageWidth }}>
        {showPageSetup && (<PageSetupDialog setShowPageSetup={setShowPageSetup} setPageWidth={setPageWidth} setPageHeight={setPageHeight} setSelectedPage = {setSelectedPage} selectedPage = {selectedPage}
         orientation={orientation} setOrientation={setOrientation} pageWidth = {pageWidth} pageHeight={pageHeight}
         customWidth = {customWidth} customHeight = {customHeight} setCustomWidth = {setCustomWidth} setCustomHeight = {setCustomHeight}/>)
        }
      </AccentContext.Provider>
    </div>
  );

}

export default App;