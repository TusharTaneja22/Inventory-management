# Inventory State Management

This project is an Inventory Management App designed to calculate and display total product count, total store value, out-of-stock items, and the number of categories in the inventory. The app provides an admin view for managing the products, including actions like deleting, editing, and disabling products, and a user view with restricted actions.

# Features

**Top 4 Widgets**
**Total Product**: Displays the total number of products in the inventory.
**Total Store Value**: Shows the total value of all products in the store.
**Out of Stock**: Indicates the number of products that are out of stock.
**Number of Categories**: Displays the number of unique categories in the inventory.

**Product Table**
Lists all products in a tabular format along with action icons for editing, deleting, and disabling products.

**Admin View**
**Delete Icon**: Clicking the delete icon will delete the entire row.
**Edit Icon**: Clicking the edit icon opens a popup where you can edit the product fields. The updated values are reflected in the table, and the top 4 widget values are updated automatically. Updates are handled locally without an API for update.
**Eye Icon**: Clicking the eye icon disables the entire row, and the edit button is disabled.
**Dynamic Updates**: Upon disabling or deletion of a product, the top 4 widget values for total product count, total store value, out-of-stock items, and number of categories are decremented accordingly.

**User View**
All action buttons are disabled for users.

**Redux** is used for state management.
