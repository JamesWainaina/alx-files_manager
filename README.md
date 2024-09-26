# 0x04. Files Manager

## Overview
This project is part of the back-end curriculum and will test our knowledge of authentication, NodeJS, MongoDB, Redis, pagination, and background processing. The goal is to build a simple platform for uploading and viewing files, with features like user authentication, file management, and image thumbnail generation.

## Team
- **James Gatheru**

## Project Timeline
- **Project Start**: Sep 26, 2024, 6:00 AM
- **Project End**: Oct 3, 2024, 6:00 AM
- **Checker Release**: Sep 28, 2024, 12:00 AM
- **Manual QA**: Request a review when the project is done
- **Auto Review**: Runs at the deadline

## Objectives
The objective of this project is to build a fully functional platform to:
- **Authenticate users** via tokens.
- **List all files**.
- **Upload new files**.
- **Change file permissions**.
- **View files**.
- **Generate image thumbnails**.

This project consolidates all key concepts from the trimester and provides a real-world scenario where different back-end technologies are integrated into a full product.

## Features
- User authentication with tokens.
- File upload and management.
- File permission management.
- Thumbnail generation for images.
- Pagination support for listing files.
- Background processing using Kue.

## Technologies
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB (NoSQL)
- **Cache/Queue**: Redis, Kue
- **Testing**: Mocha
- **ES6**: Modern JavaScript syntax
- **Additional Tools**: Image thumbnail generation, Mime-Types for file management

## Learning Objectives
By the end of this project, you should be able to:
1. Create an API with Express.
2. Authenticate a user using tokens.
3. Store data in MongoDB.
4. Store temporary data in Redis.
5. Set up and use background workers (Kue).
6. Implement pagination for API responses.
7. Generate thumbnails for image files.

## Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- Files must be interpreted/compiled on **Ubuntu 18.04 LTS** using **Node.js (version 12.x.x)**.
- Each file must end with a newline.
- A `README.md` file is required at the root of the project.
- All code must use the `.js` extension.
- Code will be verified using **ESLint**.

## Provided Files
- **package.json**: Contains project dependencies.
- **.eslintrc.js**: ESLint configuration file.
- **babel.config.js**: Babel configuration file for transpiling ES6+ code.

## Project Setup
1. Clone the project repository.
2. Install project dependencies:
   ```bash
   npm install

