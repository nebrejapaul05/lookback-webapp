# Lookback Web Application

## Installation and Setup

Follow the steps below to install and run the Lookback Web Application locally.

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [npm](https://www.npmjs.com/) (Comes with Node.js)
- [Prisma](https://www.prisma.io/) (Installed via npm)

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/lookback-web-app.git
cd lookback-web-app
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory and configure it according to `.env.example`.

```sh
cp .env.example .env
```

Update the `.env` file with the necessary values.

### 3. Install Dependencies
```sh
npm install
```

### 4. Set Up the Database
Run the following Prisma commands to generate the client and push the schema to your database:
```sh
npx prisma generate
npx prisma db push
```

### 5. Start the Development Server
```sh
npm run dev
```

### 6. Access the Application
Once the server is running, open your browser and navigate to:
[http://localhost:3000](http://localhost:3000)

## Additional Commands

### Running Prisma Studio (Optional)
To inspect your database visually, run:
```sh
npx prisma studio
```

### Linting and Formatting
Ensure your code follows best practices:
```sh
npm run lint
npm run format
```

### Building for Production
To create an optimized production build:
```sh
npm run build
```

## Contributing
If you'd like to contribute, please fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

