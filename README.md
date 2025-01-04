React CRUD Product Manager

Project Overview

React CRUD Product Manager is a simple front-end application demonstrating essential CRUD (Create, Read, Update, Delete) functionality. It uses React for building user interfaces and JSON Server for simulating a back-end API.

Features

Fetch and display a list of products from a mock API.

Add new products to the list.

Edit product details.

Delete products.

Simple and responsive design with Bootstrap.

Technologies Used

React: For building the user interface.

React-DOM: For rendering React components in the DOM.

React Router: For managing application routing.

Bootstrap: For a responsive and styled UI.

JSON Server: For creating a mock back-end API.

FakeAPI Products: For sample product data.

Installation and Setup

Clone the repository:

git clone https://github.com/yourusername/react-crud-product-manager.git

Navigate to the project directory:

cd react-crud-product-manager

Install dependencies:

npm install

Start the JSON server (ensure db.json is correctly set up):

npx json-server --watch db.json --port 5050

Start the React development server:

npm start

Open your browser at:

http://localhost:3000

Usage

Home Page: Displays all products fetched from the mock API.

Add Product: Add new product details through a form.

Edit Product: Modify existing products via the edit feature.

Delete Product: Remove a product using the delete option.

Acknowledgments

FakeAPI for providing mock product data.

JSON Server for backend simulation.

React Documentation for comprehensive guidance.
