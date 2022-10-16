const data = [{ name: "hero", id: 1221 }, { name: "Karim", id: 1222 }, { name: "Rahim", id: 1223 }];
const result = data.find(person => person.id === "1221");
console.log(result);