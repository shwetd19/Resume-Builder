# Resume Builder

## 🚀 Overview
Resume Builder is a web-based application that allows users to create professional resumes effortlessly. Users can fill in their details, customize templates, and generate downloadable PDFs.

## ✨ Features
- 📄 Create, edit, and preview resumes in real-time
- 🎨 Multiple resume templates to choose from
- 🔄 Auto-save feature to prevent data loss
- 📥 Export resumes as PDF
- 👤 User authentication for personalized experience
- 🌐 Hosted using modern web technologies

## 🛠️ Tech Stack
- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **PDF Generation**: Puppeteer

## 🎯 Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.x)
- MongoDB (local or cloud-based)
- Yarn or npm

### Steps
```sh
# Clone the repository
git clone https://github.com/shwetd19/Resume-Builder.git
cd Resume-Builder

# Install dependencies
yarn install  # or npm install

# Setup environment variables
cp .env.example .env
# Update .env file with your MongoDB URI and other configs

# Start the development server
yarn dev  # or npm run dev
```

## 🔗 API Endpoints
| Method | Endpoint       | Description |
|--------|--------------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login` | Authenticate a user |
| GET    | `/api/resumes` | Fetch all resumes |
| POST   | `/api/resumes` | Create a new resume |
| PUT    | `/api/resumes/:id` | Update a resume |
| DELETE | `/api/resumes/:id` | Delete a resume |

## 🏗️ Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

### Steps to Contribute
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your forked repository
5. Open a pull request

## 📜 License
This project is licensed under the MIT License.

## 📧 Contact
For any queries, reach out to **Shwetas Dhake** via [GitHub](https://github.com/shwetd19) or [LinkedIn](https://www.linkedin.com/in/shwetasdhake).

