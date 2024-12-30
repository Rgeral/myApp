# Utiliser l'image officielle de Tomcat
FROM tomcat:latest
RUN mvn clean install
COPY target/backend.war /usr/local/tomcat/webapps/
