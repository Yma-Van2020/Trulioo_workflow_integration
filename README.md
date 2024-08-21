# Workflow Access Application

This project is an Express.js application that serves static files and handles a webhook endpoint for verification and event processing. It includes a simple frontend served from an `index.html` file.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

- Node.js (v14 or later recommended)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the Application

1. Start the server:

    ```bash
    npm start
    ```

   By default, the server will run on port 3000. You can change the port by setting the `PORT` environment variable.

2. Access the application:

   Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Webhook Endpoint

The application includes a webhook endpoint at `/webhook` that handles URL verification and other event types. The endpoint responds with a challenge value during URL verification and logs received events for other types.

### File Structure

- `app.js` - Main application file containing server setup and routes.
- `public/` - Directory containing static files such as HTML, CSS, and images.
  - `index.html` - HTML file served at the root URL.
  - `styles.css` - CSS file for styling the HTML page.
  - `Logo.png` - Image file for the logo.

### Contributing

If you'd like to contribute to this project, please submit a pull request or open an issue for discussion.

### License

This project is licensed under the MIT License - see the `LICENSE` file for details.
