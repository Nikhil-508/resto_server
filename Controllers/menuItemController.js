import MenuItem from "../Models/menuItem.js";

// Get all menu items by menuId
export const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find({ category: req.params.category });
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new menu item
export const createMenuItem = async (req, res) => {
  try {
    console.log("heyyy creteeee")
    const { name, description, price,category } = req.body;

    console.log(name,description,price,category,"dsttttttaaa")

    // Validate the input
    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create and save the new menu item
    const newItem = new MenuItem({
      name,
      description,
      price,
      category,  // Ensure menuId is passed correctly
    });

    await newItem.save();
    res.status(201).json(newItem);  // Return the created menu item
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
