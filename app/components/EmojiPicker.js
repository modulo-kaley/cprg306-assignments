"use client";
import { useState, useEffect, useRef } from "react";

// grouped emojis by grocery category
const emojiGroups = {
  "🥦 Produce":     ["🍎","🍌","🍇","🍓","🥦","🥕","🌽","🍅","🥑","🍋","🍊","🫐","🍑","🍒","🍈","🥭","🍍","🥥","🍆","🥔","🧅","🧄","🥬","🥒","🌶️","🫑","🍄","🥝","🍐","🫒","🌿","🪴"],
  "🥛 Dairy":       ["🥛","🧀","🧈","🍦","🥚","🫙","🍮","🧆"],
  "🍞 Bakery":      ["🍞","🥐","🥖","🧁","🍰","🥨","🫓","🥞","🧇","🍩","🍪","🎂","🍫","🥧"],
  "🍗 Meat":        ["🍗","🥩","🥓","🌭","🍖","🍣","🍤","🦐","🦞","🦀","🦑","🐟","🥚","🍳","🫕"],
  "🧃 Beverages":   ["🧃","☕","🍵","🧋","🥤","🍶","🧉","🫖","🍺","🍷","🥂","🍹","🧊","💧","🍼","🫗"],
  "🍿 Snacks":      ["🍿","🍪","🍫","🍬","🍭","🥜","🫘","🧃","🍡","🍢","🍣","🍱","🥮","🍘","🍙","🍚","🍛","🫔","🌮","🌯"],
  "🥫 Canned":      ["🥫","🍯","🧂","🫙","🥣","🍲","🫕"],
  "🌾 Dry Goods":   ["🌾","🍚","🍝","🥣","🫘","🌰","🥜","🧆","🫓","🥙","🧇","🥞"],
  "❄️ Frozen":      ["🧊","🍨","🫕","🥧","🍦","🧁","🥐","🍕","🌮"],
  "🏠 Household":   ["🧼","🪥","🧻","🫧","🧹","🧴","🪒","🧽","🪤","🧺","🪣","🫙","🪴","🕯️","🪑"],
  "💊 Health":      ["💊","🩺","🩹","🧬","🫀","🩻","💉","🧪","🌡️","🪥","🧴","🫧"],
  "🐾 Pet":         ["🐾","🦴","🐠","🐹","🐕","🐈","🐇","🦜","🐢","🦎"],
  "🌺 Beauty":      ["🌺","💄","💅","🪞","🧴","🪥","💋","🌸","🧖","💆"],
};

// human-readable names for individual emojis on hover
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

export default function EmojiPicker({ selectedEmoji, onEmojiSelect }) {
  // tracks whether the picker panel is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // tracks which category tab is active
  const [activeGroup, setActiveGroup] = useState("🥦 Produce");
  // ref attached to the wrapper div so we can detect clicks outside it
  const pickerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // if the click was outside the picker wrapper, close it
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setIsOpen(false);
        console.log("🖱️ Clicked outside — closing emoji picker");
      }
    };

    // only listen when the picker is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // cleanup the listener when picker closes or component unmounts
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleEmojiClick = (emoji) => {
    onEmojiSelect(emoji);
    setIsOpen(false);
    console.log("✅ Emoji selected:", emoji);
  };

  return (
    // ref here so click outside detection knows the boundary of the picker
    <div className="relative" ref={pickerRef}>

      {/* trigger button — shows the selected emoji or sparkle placeholder */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-xl bg-earth-pearl dark:bg-earth-armadillo border-2 border-earth-stonewall/30 hover:border-earth-copper transition-colors duration-200 flex items-center justify-center text-xl"
      >
        {selectedEmoji || "✨"}
      </button>

      {/* dropdown picker panel */}
      {isOpen && (
        <div className="absolute z-50 top-14 left-0 w-72 bg-earth-bison dark:bg-earth-soya rounded-xl shadow-xl border border-earth-stonewall/20 p-3">

          {/* category tabs — title shows full group name on hover */}
          <div className="flex flex-wrap gap-1 mb-3">
            {Object.keys(emojiGroups).map((group) => (
              <button
                key={group}
                type="button"
                title={group}
                onClick={() => setActiveGroup(group)}
                className={`text-xs px-2 py-1 rounded-lg transition-colors duration-150 font-sans
                  ${activeGroup === group
                    ? "bg-earth-copper text-earth-pearl"
                    : "bg-earth-pearl/20 text-earth-armadillo dark:text-earth-pearl hover:bg-earth-copper/40"
                  }`}
              >
                {group.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* emoji grid — title shows emoji name on hover */}
          <div className="grid grid-cols-6 gap-1">
            {emojiGroups[activeGroup].map((emoji) => (
              <button
                key={emoji}
                type="button"
                title={emojiNames[emoji] || emoji}
                onClick={() => handleEmojiClick(emoji)}
                className="w-10 h-10 rounded-lg hover:bg-earth-copper/30 transition-colors duration-150 flex items-center justify-center text-xl"
              >
                {emoji}
              </button>
            ))}
          </div>

          {/* close button — also available as a fallback to clicking outside */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-xs font-sans text-earth-stonewall hover:text-earth-copper transition-colors duration-150"
          >
            close
          </button>

          {/* clear button — only shows if an emoji is already selected */}
          {selectedEmoji && (
            <button
              type="button"
              onClick={() => { onEmojiSelect(""); setIsOpen(false); }}
              className="mt-1 w-full text-xs font-sans text-earth-stonewall hover:text-earth-copper transition-colors duration-150"
            >
              clear emoji
            </button>
          )}

        </div>
      )}
    </div>
  );
}