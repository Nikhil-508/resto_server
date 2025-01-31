
import Menu from '../Models/menu.js'

export const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMenu = async (req, res) => {
  try {
    const { menuName, description } = req.body;
    const newMenu = new Menu({ menuName, description });
    await newMenu.save();
    res.status(201).json(newMenu);
    console.log("successssss")
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
