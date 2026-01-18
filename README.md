# VectorShift Frontend Technical Assessment

This project is a submission for the VectorShift Frontend Technical Assessment. It consists of a React-based frontend (built with Vite) using React Flow for a node-based pipeline editor, and a FastAPI backend for processing the pipeline.

## Features

### 1. Node Abstraction
- **BaseNode Component**: A reusable `BaseNode` component (`frontend/src/BaseNode.jsx`) abstracts common functionality like headers, styling, and input/output handles.
- **Custom Nodes**: Includes 9 node types:
  - **Standard**: Input, Output, Text, LLM.
  - **Custom Examples**: Date, Note, Filter, Transform, API Call.

### 2. Styling
- **Unified Theme**: A modern, dark-themed design implemented with CSS variables (`frontend/src/index.css`).
- **Consistent UI**: All nodes share a cohesive look and feel with hover effects and consistent spacing.

### 3. Smart Text Node
- **Auto-resizing**: Text nodes automatically expand their height to fit the content.
- **Variable Support**: Typing `{{ variableName }}` in a Text node automatically creates a new input handle for that variable.

### 4. Pipeline Analysis (Backend Integration)
- **DAG Detection**: The backend analyzes the pipeline to determine if it forms a Directed Acyclic Graph (DAG).
- **Stats**: Calculates and returns the total number of nodes and edges.
- **Submission Alert**: Clicking "Submit" shows a user-friendly alert with the analysis results.

### 5. Enhanced UX
- **Close Button**: Every node has a "close" (×) button to easily remove it from the canvas.
- **Draggable**: Utilizing React Flow's native capability.

## Technology Stack

- **Frontend**: React (Vite), React Flow, Zustand (state management).
- **Backend**: Python, FastAPI.

## Setup Instructions

### Prerequisites
- Node.js and npm
- Python 3.8+

### 1. Frontend Setup
Navigate to the `frontend` directory:
```bash
cd frontend
npm install
npm run dev
```
The frontend will run on `http://localhost:5173` (default Vite port) or the port shown in your terminal.

### 2. Backend Setup
Navigate to the `backend` directory:
```bash
cd backend
# Create a virtual environment (optional but recommended)
python -m venv venv
# Activate virtual environment
# Windows:
.\venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install requirements (if requirements.txt exists, otherwise install fastapi uvicorn)
pip install fastapi uvicorn

# Run the server
uvicorn main:app --reload
```
The backend will run on `http://127.0.0.1:8000`.

## Usage
1. Open the frontend in your browser.
2. Drag and drop nodes from the toolbar to the canvas.
3. Connect nodes by dragging from handles.
4. Type in Text nodes to see auto-resizing and variable handle creation.
5. Click **Submit** to send the pipeline to the backend for analysis.
6. Click the **×** button on a node to remove it.
