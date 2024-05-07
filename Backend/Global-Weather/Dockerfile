# Use the official OpenJDK 11 image as the base image
FROM openjdk:17

# Set the working directory in the container
WORKDIR /app

# Copy the application jar file to the container
COPY target/*.jar Global-Weather-0.0.1-SNAPSHOT.jar

# Expose the port on which the Spring Boot application will run
EXPOSE 8080

# Run the Spring Boot application when the container starts
CMD ["java", "-jar", "Global-Weather-0.0.1-SNAPSHOT.jar"]