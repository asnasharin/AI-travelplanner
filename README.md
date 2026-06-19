# AI Travel Itinerary Generator ✈️

An AI-powered travel planning application built with the MERN stack that allows users to upload travel booking documents, extract travel information, and generate personalized travel itineraries using Google Gemini AI.

---

## 🚀 Features

### 🔐 Authentication

* User Registration and Login
* JWT-based Authentication
* Protected Routes and APIs

### 📄 Document Upload

* Upload travel-related PDF documents
* Flight Tickets
* Hotel Bookings
* Secure file handling using Multer

### 🔍 Information Extraction

* Extract travel information from uploaded documents
* Passenger Details
* Travel Dates
* Departure and Arrival Information
* Booking Details

### 🤖 AI Itinerary Generation

* Generate personalized travel itineraries using Google Gemini AI
* AI-powered trip recommendations
* Day-wise travel plans
* Trip summaries

### 📚 Itinerary History

* View all previously generated itineraries
* Access itinerary details by ID
* Store travel plans for future reference

### 📱 Responsive Design

* Mobile-friendly UI
* Modern design with Tailwind CSS
* Smooth user experience

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Tailwind CSS
* Vite

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer

### AI Integration

* Google Gemini AI


## 🔄 Application Workflow

### 1. User Authentication

* Register or Login
* Receive JWT token

### 2. Upload Travel Document

* Upload flight ticket or hotel booking PDF

### 3. Extract Information

* Extract travel-related details from document

### 4. Generate Itinerary

* Send extracted data to Gemini AI
* Generate personalized itinerary

### 5. Save Itinerary

* Store generated itinerary in MongoDB

### 6. View Results

* Display AI-generated travel plan
* Access itinerary history

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Documents

```http
POST   /api/bookings/upload
GET    /api/bookings
```

### Extraction

```http
POST /api/bookings/:id/extract
```

### Itinerary

```http
POST /api/itinerary/generate
GET  /api/itinerary
GET  /api/itinerary/:id
```

---

