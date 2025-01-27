
# SideNavDash

SideNavDash is a modern and responsive dashboard application built with **Next.js**, **Tailwind CSS**, and **Chart.js**. It features an intuitive layout with a collapsible sidebar, a top navigation bar, and various chart components to display data visually.

## Features

- **Responsive Sidebar**: A collapsible sidebar menu for seamless navigation.
- **Charts Integration**: Interactive Bar and Line charts powered by Chart.js.
- **Dynamic Components**: Modular and reusable components like `MenuBar`, `Header`, and chart widgets.
- **Lightweight Design**: Built using Tailwind CSS for a clean and minimalistic UI.
- **Toggle Menu**: Easily toggle the sidebar for an enhanced user experience on mobile and desktop.

## Technologies Used

- [Next.js](https://nextjs.org/) – React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) – A utility-first CSS framework.
- [Chart.js](https://www.chartjs.org/) – JavaScript library for data visualization.
- [React Chart.js 2](https://react-chartjs-2.js.org/) – React wrapper for Chart.js.

## Getting Started

Follow the steps below to set up the project locally.

## Contributing
- Fork the repository.
- Create a branch for your changes: `git checkout -b feature-name`.
- Push your branch and open a pull request.

## Contributing Guidelines
1. Fork the repository.
2. Create a new branch for your changes.
3. Ensure your code is clean and well-documented.
4. Submit a pull request with a detailed explanation of the changes.

### Prerequisites

Make sure you have the following installed:

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/SideNavDash.git
   cd SideNavDash
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

4. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Project Structure

- `components/`
  - `header.js`: Contains the top navigation bar.
  - `menuBar.js`: Defines the sidebar menu items and structure.
- `pages/`
  - `index.js`: Main entry point of the dashboard.
  - `dashboard.js`: Contains the dashboard layout and widgets.
- `styles/`: Tailwind CSS configuration and custom styles.
- `public/`: Static assets like icons and images.

## Usage

- **Sidebar Toggle**: Use the button at the bottom of the sidebar to collapse or expand it.
- **Charts**: The Bar and Line charts display dynamic data. Modify the `barData` and `lineData` objects in the `Dashboard` component to update chart content.

---

Feel free to customize it according to your project requirements. Happy coding! 🚀
