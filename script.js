// ToyCar Constructor Function
function ToyCar(model, color, material, price, size, manufacturer, ageRecommendation, features, warranty, releaseDate) {
    this.model = model;
    this.color = color;
    this.material = material;
    this.price = price;
    this.size = size;
    this.manufacturer = manufacturer;
    this.ageRecommendation = ageRecommendation;
    this.features = features;
    this.warranty = warranty;
    this.releaseDate = releaseDate;
}

// Example ToyCar Instance
const car1 = new ToyCar(
    "Speedster 3000", 
    "Red", 
    "Plastic", 
    "$19.99", 
    "Small", 
    "ToyMakers Inc.", 
    "5+", 
    ["Lights", "Sound"], 
    "1 Year", 
    "2024"
);

// Function to change the car color
function changeColor() {
    // Toggle between red and blue colors
    car1.color = car1.color === "Red" ? "Blue" : "Red";
    document.getElementById("carColor").innerHTML = car1.color;
}
