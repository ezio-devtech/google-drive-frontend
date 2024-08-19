
# Google Drive Integration - Frontend

## Overview

This is the frontend for a Google Drive integration application. It provides a user interface to interact with the backend API for authenticating with Google, uploading files, listing files, downloading files, and deleting files from Google Drive.

## Features

- Google OAuth 2.0 Login
- File Upload to Google Drive
- List Files from Google Drive
- Download Files from Google Drive
- Delete Files from Google Drive

## Prerequisites

- **Node.js** (v14.x or higher)
- **NPM** (v6.x or higher)
- **Backend Server**: Ensure the backend server is running and accessible.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ezio-devtech/frontend-google-drive.git
cd frontend-google-drive
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Development Server
```bash
npm start
```
The frontend will run on http://localhost:3000.


## Usage
### 1. Login: Navigate to http://localhost:3000, and click on "Login with Google" to authenticate.
### 2. Access Files: After authentication, you will be redirected to the Drive page where you can view, upload, download, or delete files.