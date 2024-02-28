FROM node:18.16.0-alpine3.17

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install --frozen-lockfile

# Copy the rest of your application's code
COPY . .

# Your application's default port, change if different
EXPOSE 5000

# Command to run your app
CMD ["pnpm", "start"]