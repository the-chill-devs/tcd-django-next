#!/bin/bash
# This script is used to initialize the environment for the project.
# It should be run before any other scripts to ensure that all necessary dependencies are installed and configured

# Install Node.js dependencies for the frontend
echo "Installing frontend dependencies..."
cd app_frontend
npm install

# Install Python dependencies for the backend
echo "Proceeding to backend/ and installing dependencies..."
cd ../app_backend
python -m venv venv

# Detect OS and activate venv
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    source venv/Scripts/activate
else
    source venv/bin/activate
fi

pip install -r requirements.txt

cd ..
echo "Environment initialization complete. You can now proceed with running the frontend and backend servers."