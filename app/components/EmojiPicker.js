"use client";
import { useState, useEffect, useRef } from "react";

const emojiGroups = {
  "🍌 Produce":   ["🍎","🍌","🍇","🍓","🥦","🥕","🌽","🍅","🥑","🍋","🍊","🫐","🍑","🍒","🍈","🥭","🍍","🥥","🍆","🥔","🧅","🧄","🥬","🥒","🌶️","🫑","🍄","🥝","🍐","🫒","🌿","🪴"],
  "🥛 Dairy":     ["🥛","🧀","🧈","🍦","🥚","🫙","🍮","🧆"],
  "🥐 Bakery":    ["🍞","🥐","🥖","🧁","🍰","🥨","🫓","🥞","🧇","🍩","🍪","🎂","🍫","🥧"],
  "🍗 Meat":      ["🍗","🥩","🥓","🌭","🍖","🍣","🍤","🦐","🦞","🦀","🦑","🐟","🥚","🍳","🫕"],
  "🧃 Beverages": ["🧃","☕","🍵","🧋","🥤","🍶","🧉","🫖","🍺","🍷","🥂","🍹","🧊","💧","🍼","🫗"],
  "🍿 Snacks":    ["🍿","🍪","🍫","🍬","🍭","🥜","🫘","🧃","🍡","🍢","🍣","🍱","🥮","🍘","🍙","🍚","🍛","🫔","🌮","🌯"],
  "🥫 Canned":    ["🥫","🍯","🧂","🫙","🥣","🍲","🫕"],
  "🌾 Dry Goods": ["🌾","🍚","🍝","🥣","🫘","🌰","🥜","🧆","🫓","🥙","🧇","🥞"],
  "❄️ Frozen":    ["🧊","🍨","🫕","🥧","🍦","🧁","🥐","🍕","🌮"],
  "🏠 Household": ["🧼","🪥","🧻","🫧","🧹","🧴","🪒","🧽","🪤","🧺","🪣","🫙","🪴","🕯️","🪑"],
  "💊 Health":    ["💊","🩺","🩹","🧬","🫀","🩻","💉","🧪","🌡️","🪥","🧴","🫧"],
  "🦴 Pet":       ["🐾","🦴","🐠","🐹","🐕","🐈","🐇","🦜","🐢","🦎"],
  "💅 Beauty":    ["🌺","💄","💅","🪞","🧴","🪥","💋","🌸","🧖","💆"],
};

const emojiNames = {
  "🍎":"Red Apple","🍌":"Banana","🍇":"Grapes","🍓":"Strawberry","🥦":"Broccoli",
  "🥕":"Carrot","🌽":"Corn","🍅":"Tomato","🥑":"Avocado","🍋":"Lemon","🍊":"Orange",
  "🫐":"Blueberries","🍑":"Peach","🍒":"Cherries","🍈":"Melon","🥭":"Mango",
  "🍍":"Pineapple","🥥":"Coconut","🍆":"Eggplant","🥔":"Potato","🧅":"Onion",
  "🧄":"Garlic","🥬":"Leafy Greens","🥒":"Cucumber","🌶️":"Hot Pepper","🫑":"Bell Pepper",
  "🍄":"Mushroom","🥝":"Kiwi","🍐":"Pear","🫒":"Olive","🌿":"Herb","🪴":"Plant",
  "🥛":"Milk","🧀":"Cheese","🧈":"Butter","🍦":"Ice Cream","🥚":"Egg","🫙":"Jar",
  "🍮":"Custard","🧆":"Falafel","🍞":"Bread","🥐":"Croissant","🥖":"Baguette",
  "🧁":"Cupcake","🍰":"Cake","🥨":"Pretzel","🫓":"Flatbread","🥞":"Pancakes",
  "🧇":"Waffle","🍩":"Donut","🍪":"Cookie","🎂":"Birthday Cake","🍫":"Chocolate",
  "🥧":"Pie","🍗":"Chicken Leg","🥩":"Cut of Meat","🥓":"Bacon","🌭":"Hot Dog",
  "🍖":"Meat on Bone","🍣":"Sushi","🍤":"Fried Shrimp","🦐":"Shrimp","🦞":"Lobster",
  "🦀":"Crab","🦑":"Squid","🐟":"Fish","🍳":"Cooking","🫕":"Fondue",
  "🧃":"Juice Box","☕":"Coffee","🍵":"Tea","🧋":"Bubble Tea","🥤":"Cup with Straw",
  "🍶":"Sake","🧉":"Mate","🫖":"Teapot","🍺":"Beer","🍷":"Wine","🥂":"Champagne",
  "🍹":"Tropical Drink","🧊":"Ice","💧":"Water","🍼":"Baby Bottle","🫗":"Pouring Liquid",
  "🍿":"Popcorn","🍬":"Candy","🍭":"Lollipop","🥜":"Peanuts","🫘":"Beans",
  "🍡":"Dango","🍢":"Oden","🍱":"Bento Box","🥮":"Moon Cake","🍘":"Rice Cracker",
  "🍙":"Rice Ball","🍚":"Cooked Rice","🍛":"Curry","🫔":"Tamale","🌮":"Taco","🌯":"Burrito",
  "🥫":"Canned Food","🍯":"Honey","🧂":"Salt","🥣":"Bowl with Spoon","🍲":"Pot of Food",
  "🌾":"Wheat","🍝":"Spaghetti","🌰":"Chestnut","🥙":"Stuffed Flatbread",
  "🧼":"Soap","🪥":"Toothbrush","🧻":"Toilet Paper","🫧":"Bubbles","🧹":"Broom",
  "🧴":"Lotion Bottle","🪒":"Razor","🧽":"Sponge","🪤":"Mousetrap","🧺":"Laundry Basket",
  "🪣":"Bucket","🪴":"Potted Plant","🕯️":"Candle","🪑":"Chair",
  "💊":"Pill","🩺":"Stethoscope","🩹":"Bandage","🧬":"DNA","🫀":"Heart",
  "🩻":"X-Ray","💉":"Syringe","🧪":"Test Tube","🌡️":"Thermometer",
  "🐾":"Paw Prints","🦴":"Bone","🐠":"Tropical Fish","🐹":"Hamster","🐕":"Dog",
  "🐈":"Cat","🐇":"Rabbit","🦜":"Parrot","🐢":"Turtle","🦎":"Lizard",
  "🌺":"Hibiscus","💄":"Lipstick","💅":"Nail Polish","🪞":"Mirror","💋":"Lips",
  "🌸":"Cherry Blossom","🧖":"Face Mask","💆":"Massage",
};

// Emoji picker that opens as a dropdown panel.
// selectedEmoji: the currently chosen emoji (shown on the trigger button).
// onEmojiSelect: called with the chosen emoji string when the user picks one.
export default function EmojiPicker({ selectedEmoji, onEmojiSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  // Default the active tab to the first group in emojiGroups.
  const [activeGroup, setActiveGroup] = useState(() => Object.keys(emojiGroups)[0]);
  const pickerRef = useRef(null);

  // Close the picker when the user clicks outside of it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Notify the parent of the selection and close the panel.
  const handleEmojiClick = (emoji) => {
    onEmojiSelect(emoji);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={pickerRef}>

      {/* trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="emoji-trigger"
      >
        {selectedEmoji || "✨"}
      </button>

      {/* dropdown panel */}
      {isOpen && (
        <div className="emoji-panel">

          {/* category tabs */}
          <div className="emoji-tab-container">
            {Object.keys(emojiGroups).map((group) => (
              <button
                key={group}
                type="button"
                title={group}
                onClick={() => setActiveGroup(group)}
                className={`emoji-tab ${activeGroup === group ? "emoji-tab-active" : ""}`}
              >
                {group.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* emoji grid */}
          <div className="grid grid-cols-6 gap-1">
            {emojiGroups[activeGroup].map((emoji) => (
              <button
                key={emoji}
                type="button"
                title={emojiNames[emoji] || emoji}
                onClick={() => handleEmojiClick(emoji)}
                className="emoji-btn"
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* close / clear actions */}
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="emoji-action"
            >
              close
            </button>

            {selectedEmoji && (
              <button
                type="button"
                onClick={() => { onEmojiSelect(""); setIsOpen(false); }}
                className="emoji-action"
              >
                clear
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
}