# CSSG-edu-team-final-project

# Triangle Literacy Hub

## 📖 Project Overview
The **Triangle Literacy Hub** is a localized React web application built for the Raleigh, Durham, and Chapel Hill community. It centralizes vital literary resources, including public libraries, educational non-profits, and online reading programs, into one accessible digital space.

## The Cause and Non-Profit Focus
This project addresses the systemic issue of low literacy in the United States—where **54% of adults read below a sixth-grade level**. The platform amplifies the reach of local Triangle-area organizations, directing users to:

* **Triangle Literacy Council:** Adult and youth literacy tutoring.
* **Book Harvest:** Book distribution and family literacy support in Durham.
* **Read and Feed:** After-school meals and reading tutoring for low-income families in Wake County.

## Technical Features
* **React:** Built with modular, reusable JSX components (such as `ResourceCard`) and modern CSS Grid for a fully responsive design.
* **Simulated Database:** Implements a backend-to-frontend workflow by storing data in a `data.json` file rather than hard-coding content.
* **Asynchronous Data Fetching:** Utilizes React Hooks (`useState`, `useEffect`) and the native `fetch` API to retrieve data from the local database on mount.
* **State Management:** Features conditional rendering to handle different UI states, including **Loading** and **Error** messaging.
* **Dynamic UI Rendering:** Automatically maps through database arrays to generate the resource cards, allowing for easy scalability.
