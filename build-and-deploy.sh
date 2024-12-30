#!/bin/bash

cd backend || { echo "Erreur : impossible de se déplacer dans le répertoire backend"; exit 1; }

echo "Exécution de mvn clean install..."
mvn clean install

if [ $? -eq 0 ]; then
  echo "Maven build successful, proceeding with frontend build..."

  cd ../frontend || { echo "Erreur : impossible de se déplacer dans le répertoire frontend"; exit 1; }
  echo "Exécution de npm run build..."
  npm install
  npm install -g @angular/cli |
  npm run build

  if [ $? -eq 0 ]; then
    echo "Frontend build successful, proceeding with Docker build..."

    cd .. || { echo "Erreur : impossible de revenir dans le répertoire parent"; exit 1; }

    docker-compose up --build
  else
    echo "Frontend build failed, aborting Docker build."
    exit 1
  fi
else
  echo "Maven build failed, aborting Docker build."
  exit 1
fi
