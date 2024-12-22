# Ticket Search Application

This application renders a ticket search page with filtering options, designed to match a specified layout. It is built using React with TypeScript and supports sorting and filtering functionality for ticket data from a JSON file. The project is bundled using Vite, providing a fast and modern development experience.
The application is deployed and available at: [Ticket Search Application](https://ticket-filter-app.onrender.com/)

## Features

### 1. Ticket Rendering (#task1)

- Renders tickets dynamically using React.
- Data is sourced from a local `tickets.json` file.
- Tickets are automatically sorted by price in ascending order.

### 2. Ticket Filtering (#task2)

- Implements filtering by the number of stops.
- Users can select filters to refine the ticket list based on their preferences.

## Installation

### 1. Clone the repository:

```
git clone https://github.com/JuliaBel5/ticket-filter-app.git
```

### 2. Install dependencies:

```
npm install
```

### 3. Start the development server:

```
npm run dev
```

### 4. Open the app in your browser: http://localhost:5173

## Key Technologies

- **React**: Component-based UI rendering.
- **TypeScript**: Provides type safety for better maintainability.
- **Mantine**: Component library for styling.
- **Vite**: A fast bundler and dev server for modern front-end projects.

## Usage

### View Tickets

- All tickets are displayed by default, sorted by price.

### Filter Tickets

- Use the filter panel to select the desired number of stops.

### Change Currency

- Switch between **RUB**, **USD**, and **EUR** for ticket prices.

## License

This project is licensed under the MIT License.

Feel free to fork and modify the project as needed!

## Author

If you have any questions or suggestions, please contact me at juliabel5@gmail.com.
