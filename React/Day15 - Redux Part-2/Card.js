import FoodCart from "./FoodCart";

const foodItems = [
  { id: 1, food: "Rice", Price: "100" },
  { id: 2, food: "Dal", Price: "150" },
  { id: 3, food: "Roti", Price: "50" },
  { id: 4, food: "Veg-Biryani", Price: "200" },
  { id: 5, food: "Paneer", Price: "250" },
  { id: 6, food: "Soup", Price: "100" },
  { id: 7, food: "Tikka", Price: "180" },
  { id: 8, food: "Masala", Price: "220" },
  { id: 9, food: "Veg-Korma", Price: "210" },
  { id: 10, food: "Gobi-Aloo", Price: "190" },
];

export default function Card() {
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      {foodItems.map((value) => {
        return (
          <div
            key={value.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              width: "200px",
              height: "200px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <FoodCart value={value}></FoodCart>
          </div>
        );
      })}
    </div>
  );
}
