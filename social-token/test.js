const Moralis = require('moralis');

const Monster = Moralis.Object.extend("Monster");
const monster = new Monster();

monster.set("strength", 1024);
monster.set("ownerName", "Aegon");
monster.set("canFly", true);

monster.save().then(
  (monster) => {
    // Execute any logic that should take place after the object is saved.
    alert("New object created with objectId: " + monster.id);
  },
  (error) => {
    // Execute any logic that should take place if the save fails.
    // error is a Moralis.Error with an error code and message.
    alert("Failed to create new object, with error code: " + error.message);
  }
);