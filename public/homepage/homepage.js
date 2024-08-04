const menus = {
    annapoorna: [
        { name: "Idli", price: "₹50", image: "images/idli.jpg" },
        { name: "Dosa", price: "₹80", image: "images/dosa.jpg" },
        { name: "Vada", price: "₹40", image: "images/vada.jpg" },
        { name: "Pongal", price: "₹60", image: "images/pongal.jpg" },
        { name: "Poori", price: "₹70", image: "images/poori.jpg" },
        { name: "Chapati", price: "₹65", image: "images/chapati.jpg" },
        { name: "Sambar Rice", price: "₹90", image: "images/sambarrice.jpg" },
        { name: "Curd Rice", price: "₹80", image: "images/curdrice.jpg" },
        { name: "Rava Kesari", price: "₹50", image: "images/ravakesari.jpg" },
        { name: "Coffee", price: "₹30", image: "images/coffee.jpg" }
    ],
    dominos: [
        { name: "Margherita Pizza", price: "₹200", image: "images/margherita.jpg" },
        { name: "Pepperoni Pizza", price: "₹350", image: "images/pepperoni.jpg" },
        { name: "Garlic Bread", price: "₹150", image: "images/garlicbread.jpg" },
        { name: "Cheese Burst Pizza", price: "₹400", image: "images/cheeseburst.jpg" },
        { name: "Veggie Paradise", price: "₹250", image: "images/veggieparadise.jpg" },
        { name: "Chicken Dominator", price: "₹450", image: "images/chickendominator.jpg" },
        { name: "Pasta Italiano", price: "₹200", image: "images/pastaitaliano.jpg" },
        { name: "Choco Lava Cake", price: "₹100", image: "images/chocolava.jpg" },
        { name: "Taco Mexicana", price: "₹175", image: "images/tacomexicana.jpg" },
        { name: "Chicken Wings", price: "₹220", image: "images/chickenwings.jpg" }
    ],
    pizzahut: [
        { name: "Veggie Supreme", price: "₹300", image: "images/veggiesupreme.jpg" },
        { name: "Chicken Supreme", price: "₹350", image: "images/chickensupreme.jpg" },
        { name: "Triple Cheese", price: "₹280", image: "images/triplecheese.jpg" },
        { name: "Paneer Tikka", price: "₹320", image: "images/paneertikka.jpg" },
        { name: "Tandoori Chicken", price: "₹370", image: "images/tandoorichicken.jpg" },
        { name: "Classic Margherita", price: "₹250", image: "images/classicmargherita.jpg" },
        { name: "Pepperoni Feast", price: "₹400", image: "images/pepperonifeast.jpg" },
        { name: "Cheesy Garlic Bread", price: "₹150", image: "images/cheesygarlicbread.jpg" },
        { name: "Spicy Paneer", price: "₹330", image: "images/spicypaneer.jpg" },
        { name: "Chicken Italiano", price: "₹380", image: "images/chickenitaliano.jpg" }
    ],
    kfc: [
        { name: "Zinger Burger", price: "₹150", image: "images/zingerburger.jpg" },
        { name: "Hot Wings", price: "₹200", image: "images/hotwings.jpg" },
        { name: "Popcorn Chicken", price: "₹180", image: "images/popcornchicken.jpg" },
        { name: "Chicken Bucket", price: "₹500", image: "images/chickenbucket.jpg" },
        { name: "Krushers", price: "₹120", image: "images/krushers.jpg" },
        { name: "Chicken Wrap", price: "₹140", image: "images/chickenwrap.jpg" },
        { name: "Grilled Chicken", price: "₹220", image: "images/grilledchicken.jpg" },
        { name: "Rice Bowlz", price: "₹130", image: "images/ricebowlz.jpg" },
        { name: "Choco Mud Pie", price: "₹100", image: "images/chocomudpie.jpg" },
        { name: "French Fries", price: "₹90", image: "images/frenchfries.jpg" }
    ],
    anandhas: [
        { name: "Mini Tiffin", price: "₹80", image: "images/minitiffin.jpg" },
        { name: "Ghee Roast", price: "₹90", image: "images/gheeroast.jpg" },
        { name: "Parotta", price: "₹70", image: "images/parotta.jpg" },
        { name: "Kadai Paneer", price: "₹150", image: "images/kadaipaneer.jpg" },
        { name: "Mushroom Biryani", price: "₹120", image: "images/mushroombiryani.jpg" },
        { name: "Vegetable Korma", price: "₹100", image: "images/vegetablekorma.jpg" },
        { name: "Mysore Pak", price: "₹60", image: "images/mysorepak.jpg" },
        { name: "Paneer Butter Masala", price: "₹130", image: "images/paneerbuttermasala.jpg" },
        { name: "Gobi Manchurian", price: "₹110", image: "images/gobimanchurian.jpg" },
        { name: "Badam Milk", price: "₹50", image: "images/badammilk.jpg" }
    ],
    hmr: [
        { name: "Chicken Biryani", price: "₹150", image: "images/chickenbiryani.jpg" },
        { name: "Mutton Biryani", price: "₹200", image: "images/muttonbiryani.jpg" },
        { name: "Egg Biryani", price: "₹120", image: "images/eggbiryani.jpg" },
        { name: "Prawn Biryani", price: "₹180", image: "images/prawnbiryani.jpg" },
        { name: "Veg Biryani", price: "₹100", image: "images/vegbiryani.jpg" },
        { name: "Paneer 65", price: "₹150", image: "images/paneer65.jpg" },
        { name: "Chicken 65", price: "₹170", image: "images/chicken65.jpg" },
        { name: "Fish Fry", price: "₹200", image: "images/fishfry.jpg" },
        { name: "Mutton Keema", price: "₹220", image: "images/muttonkeema.jpg" },
        { name: "Chicken Kebab", price: "₹160", image: "images/chickenkebab.jpg" }
    ],
    aryabhavan: [
        { name: "Veg Thali", price: "₹120", image: "images/vegthali.jpg" },
        { name: "Paneer Butter Masala", price: "₹150", image: "images/paneerbuttermasala.jpg" },
        { name: "Dal Tadka", price: "₹100", image: "images/daltadka.jpg" },
        { name: "Mix Veg Curry", price: "₹130", image: "images/mixvegcurry.jpg" },
        { name: "Naan", price: "₹40", image: "images/naan.jpg" },
        { name: "Gobi 65", price: "₹120", image: "images/gobi65.jpg" },
        { name: "Paneer Tikka", price: "₹170", image: "images/paneertikka.jpg" },
        { name: "Mango Lassi", price: "₹50", image: "images/mangolassi.jpg" },
        { name: "Masala Dosa", price: "₹80", image: "images/masaladosa.jpg" },
        { name: "Rava Idli", price: "₹60", image: "images/ravaidli.jpg" }
    ],
    Subway: [
        { name: "Veggie Delite", price: "₹150", image: "images/veggiedelite.jpg" },
        { name: "Chicken Teriyaki", price: "₹200", image: "images/chickenteriyaki.jpg" },
        { name: "Tuna Sub", price: "₹220", image: "images/tunasub.jpg" },
        { name: "Paneer Tikka Sub", price: "₹180", image: "images/paneertikkasub.jpg" },
        { name: "Italian B.M.T.", price: "₹250", image: "images/italianbmt.jpg" },
        { name: "Chicken Tikka Sub", price: "₹190", image: "images/chickentikkasub.jpg" },
        { name: "Turkey Sub", price: "₹210", image: "images/turkeysub.jpg" },
        { name: "Aloo Patty Sub", price: "₹160", image: "images/aloopattysub.jpg" },
        { name: "BBQ Chicken Sub", price: "₹230", image: "images/bbqchickensub.jpg" },
        { name: "Roast Beef Sub", price: "₹240", image: "images/roastbeefsub.jpg" }
    ],
    haribhavanam: [
        { name: "Chicken Fry", price: "₹180", image: "images/chickenfry.jpg" },
        { name: "Mutton Fry", price: "₹220", image: "images/muttonfry.jpg" },
        { name: "Fish Curry", price: "₹200", image: "images/fishcurry.jpg" },
        { name: "Chicken Curry", price: "₹170", image: "images/chickencurry.jpg" },
        { name: "Prawn Masala", price: "₹230", image: "images/prawnmasala.jpg" },
        { name: "Crab Curry", price: "₹250", image: "images/crabcurry.jpg" },
        { name: "Egg Masala", price: "₹120", image: "images/eggmasala.jpg" },
        { name: "Kothu Parotta", price: "₹150", image: "images/kothuparotta.jpg" },
        { name: "Rasam", price: "₹40", image: "images/rasam.jpg" },
        { name: "Payasam", price: "₹60", image: "images/payasam.jpg" }
    ],
    bbqnation: [
        { name: "Grilled Chicken", price: "₹250", image: "images/grilledchicken.jpg" },
        { name: "Paneer Tikka", price: "₹200", image: "images/paneertikka.jpg" },
        { name: "BBQ Prawns", price: "₹300", image: "images/bbqprawns.jpg" },
        { name: "Mutton Seekh Kebab", price: "₹270", image: "images/muttonseekhkebab.jpg" },
        { name: "Chicken Wings", price: "₹220", image: "images/chickenwings.jpg" },
        { name: "Fish Tikka", price: "₹250", image: "images/fishtikka.jpg" },
        { name: "Corn on the Cob", price: "₹100", image: "images/cornonthecob.jpg" },
        { name: "Grilled Vegetables", price: "₹150", image: "images/grilledvegetables.jpg" },
        { name: "Butter Naan", price: "₹50", image: "images/butternaan.jpg" },
        { name: "Brownie", price: "₹90", image: "images/brownie.jpg" }
    ]
};

function showMenu(restaurant) {
    const menuContainer = document.getElementById('menu-container');
    const menuContent = document.getElementById('menu-content');
    menuContent.innerHTML = '';

    if (menus[restaurant]) {
        menus[restaurant].forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.name;

            const name = document.createElement('p');
            name.textContent = item.name;

            const price = document.createElement('p');
            price.textContent = item.price;

            const selectButton = document.createElement('button');
            selectButton.textContent = 'Select Food';
            selectButton.className = 'select-button';

            const reviewButton = document.createElement('button');
            reviewButton.textContent = 'Review Food';
            reviewButton.className = 'review-button';

            itemDiv.appendChild(img);
            itemDiv.appendChild(name);
            itemDiv.appendChild(price);
            itemDiv.appendChild(selectButton);
            itemDiv.appendChild(reviewButton);

            menuContent.appendChild(itemDiv);
        });
    }

    menuContainer.style.display = 'flex';
}

function closeMenu() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.style.display = 'none';
}