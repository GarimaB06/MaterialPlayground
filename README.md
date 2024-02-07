# MaterialPlayground

A simple React application to configure and view Three.js materials.

## Key Features and Components

### Main View

Main UI that contains the material viewer and material form that allows the user to edit the material’s configurations.

### Sidebar: Browse previews of created materials in a resizable and collapsible sidebar

- The sidebar is collapsible via a button with an arrow icon pointing left and right depending on if the sidebar is expanded or collapsed, respectively.
- The sidebar is arbitrarily resizable via a grabbable button on the right edge of the sidebar. When the sidebar is being resized the cursor will be in the resize state and the collapse button icon will be a two-sided arrow.
- If the user resizes the sidebar below a certain threshold width (175 pixels) that we’ve defined, the sidebar will be automatically put in the collapsed state.
  The initial width of the sidebar will be different depending on whether the user’s viewport width is desktop ( > 675 pixels) or mobile ( < 675 pixels).
- If the sidebar is collapsed when the user creates an objects, it will expand to show the user that the object has been added to the list.

### Material Management: Create, edit, and remove materials with user-friendly interactions


https://github.com/GarimaB06/MaterialPlayground/assets/68969765/1246a619-176a-4c29-ae0a-b8a53d663bdc

#### Create

- In the main view the user can configure the material by material type, color, metalness and roughness. The color picker is an HTML input of type `color` and the metalness and roughness use HTML inputs of type `range`.
- For the material types where metalness and roughness are not applicable, the inputs will be disabled.
- Once the user clicks on the ‘Create Object’ button the material will be added to the list of created material objects in the sidebar, and the material in the main view will reset to the default material properties.
- The user can reset their material options anytime with the "Reset" button.

#### Edit

- In the sidebar, created materials can be selected to view again in the main view by clicking on the edit button (pencil).
- The material that’s currently being edited will be highlighted in the sidebar.
- Any changes made to the material in the main view can be saved again by clicking on the “Update Object” button (which was the “Create Object” button) in the form.
- After updating the object, the material in the main view will reset to the default material properties.
- The user can reset their material options anytime with the "Cancel Edit" but.

#### Delete

- Each created material object in the sidebar list will have a delete button, which removes it from the sidebar.

### Persistence

A list of created materials are persisted between sessions to ensure data continuity. The browser’s local storage is used to achieve this.

### Responsive Design

The app is designed to work seamlessly across various screen sizes and input devices.

https://github.com/GarimaB06/MaterialPlayground/assets/68969765/f2edd80f-2683-4628-b378-26020eb864d2


### Accessibility

- All actionable UI are HTML Inputs, Buttons, or Selects. These ensures all keyboard shortcuts function as users would expect
- All Buttons have aria-labels to inform screen readers the purpose of the button
- All Inputs and Selects are wrapped in labels to make clear to the user what value is being edit

## Installing and Running the Application

1. **Installation:**

   - Clone the repository:

   ```
   git clone https://github.com/GarimaB06/MaterialPlayground.git
   ```

   - Install dependencies:

   ```
   npm install
   ```

2. **Run the Application:**

   - Start the frontend application:

   ```
   npm run dev
   ```

3. **Access the Application:**
   - Open your browser and navigate to `http://localhost:5173/`.
