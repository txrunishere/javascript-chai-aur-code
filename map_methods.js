// ---------------------------- Map ----------------------------

// const map = new Map();

// console.log(map);
// console.log(typeof map); // object



// +++++++++++++++++++++++++++++ Instance Methods +++++++++++++++++++++++++++++

// --> The set() method of Map instances adds or updates an entry in this map with a specified key and a value.

// set(key, value)

const mapSet = new Map();
// mapSet.set("name", "Tarun");
// console.log(mapSet);




// --> The get() method of Map instances returns a specified element from this map. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

// get(key)

const mapGet = new Map();
// mapGet.set('age', 17);
// mapGet.set('name', 'Deepak');
// console.log(mapGet.get('age'));
// console.log(mapGet.get('name'));




// --> The has() method of Map instances returns a boolean indicating whether an element with the specified key exists in this map or not.

// has(key)

const mapHas = new Map();
// mapHas.set("animal", "Goat");
// console.log(mapHas.has("animal"));




// --> The clear() method of Map instances removes all elements from this map.

// clear()

const mapClear = new Map();
// mapClear.set("bar", "baz");
// mapClear.set(1, "foo");

// console.log(mapClear.size); // 2
// console.log(mapClear.has("bar")); // true
// console.log(mapClear.get(1));

// mapClear.clear();

// console.log(mapClear.size); // 0
// console.log(mapClear.has("bar")); // false
// console.log(mapClear);




// --> The delete() method of Map instances removes the specified element from this map by key.

// mapInstance.delete(key)

const mapDel = new Map();
// mapDel.set("name", "enna");
// console.log(mapDel);
// console.log(mapDel.delete('name'));
// console.log(mapDel);




// --> The keys() method of Map instances returns a new map iterator object that contains the keys for each element in this map in insertion order.

// keys()

const mapKeys = new Map();
// mapKeys.set("0", "foo");
// mapKeys.set(1, "bar");
// mapKeys.set({}, "baz");

const mapIter = mapKeys.keys();

// console.log(mapIter.next().value); // "0"
// console.log(mapIter.next().value); // 1
// console.log(mapIter.next().value); // {}
// console.log(mapIter.next().value); // undefined




// --> The values() method of Map instances returns a new map iterator object that contains the values for each element in this map in insertion order.

// values()

const mapVal = new Map();

// mapVal.set('0', 'hello');
// mapVal.set(1, 'world');

const mapIter2 = mapVal.values();

// console.log(mapIter2.next().value);
// Expected output: "foo"
// console.log(mapIter2.next().value);
// Expected output: "bar"




// --> The entries() method of Map instances returns a new map iterator object that contains the [key, value] pairs for each element in this map in insertion order.

// entries()

const map1 = new Map();

// map1.set('0', 'foo');
// map1.set(1, 'bar');

const iterator1 = map1.entries();
// console.log(iterator1);
// console.log(iterator1.next().value); // to access the next value of the map




// --> The forEach() method of Map instances executes a provided function once per each key/value pair in this map, in insertion order.

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

const mapForEach = new Map();
mapForEach.set("name", "Deepak");
mapForEach.set("age", 17);
mapForEach.set("city", "Delhi");

mapForEach.forEach((el) => console.log(el));
