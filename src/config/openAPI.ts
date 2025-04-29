import path from "path";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "MAU web technologies server",
    version: "1.0.1",
    description: "API documentation for my express.js",
  },
  components: {
    securitySchemes:{
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, "../routes/*.ts")],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
