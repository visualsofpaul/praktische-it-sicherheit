# Practical IT Security Practical Example

This repository contains a practical example for the topic "Authentisierungsverfahren bei Webservern". It was created as part of the module "Praktische IT-Sicherheit" at the University of Applied Sciences in Cologne.

## Contents

This project includes the following components:

- A Docker-Compose file that sets up a web server consisting of an Apache web server and a Next.js web server
- A Next.js web application simulating an online store for official equipment
- An Apache configuration file that configures the web server
- Auth0-specific files that implement the authentication of the web application

## Installation

To install the project, follow these steps:

1. Clone the repository to your computer
2. Create a file named `.env.local` in the root directory of the project and populate it with the contents according to the [.env.example](.env.example) file
3. Run the command `npm install` in the root directory of the project
4. Run the command `npm run build` in the root directory of the project
5. Run the command `docker-compose up --build` in the root directory of the project
6. Wait until the containers are fully started
7. Open the web application in your browser at `http://localhost:80`

## Sources for Used Graphics

- [Product 1](https://images-ext-1.discordapp.net/external/uA7uJ7g_UHtq0WVA4lQU6s0j7ywGZsK0nT4siOLkKnw/%3Ft%3Dst%3D1719491224~exp%3D1719494824~hmac%3D132e0125c606408340602179375bb63d097bfd9a82139ef4f316aa6a53ee9157%26w%3D740/https/img.freepik.com/free-photo/unrecognizable-firefighter-yellow-protective-helmet-uniform-studio-back-view-anonymous_7502-10649.jpg?format=webp&width=448&height=671)
- [Product 2](https://images-ext-1.discordapp.net/external/KMyjt1_9AsTw8r3mePqvdW4VIlCdI4FCbRrfd_PgtLM/%3Ft%3Dst%3D1719491429~exp%3D1719495029~hmac%3D248c3dc26496211460b985d154ee15211b69031c1c75a0ccb1d780ccaac4e02f%26w%3D740/https/img.freepik.com/free-photo/unrecognizable-firefighter-walking-after-hard-working-day-crop-view-fireman-uniform-black_7502-10348.jpg?format=webp&width=448&height=671)
- [Product 3](https://images-ext-1.discordapp.net/external/GHNDUt7jNbJi3eOGrTeGBxUH_Zxjs3L7-KQ3X-rTzcI/%3Ft%3Dst%3D1719491465~exp%3D1719495065~hmac%3D26b2c844a088c12f9c88f310695ff1641d4b38fd8a9cdbb632c8e6d0db81c226%26w%3D740/https/img.freepik.com/free-photo/anonymous-firefighter-pulling-hammer-from-leather-holster_7502-10082.jpg?format=webp&width=448&height=671)
- [Product 4](https://images-ext-1.discordapp.net/external/b6vcHYOUJHjdG3EbHeFKXBXZADE4fe9ug9z2xXC9N8k/%3Ft%3Dst%3D1719491479~exp%3D1719495079~hmac%3Ddd841cc8a702ac6ea59f40e866bcd111ce335d613669c428070770f5f75067a2%26w%3D740/https/img.freepik.com/free-photo/bearded-caucasian-firefighter-full-gear-holding-red-axe-fire-fighting-studio-front-view_7502-10590.jpg?format=webp&width=448&height=671)
- [Product 5](https://images-ext-1.discordapp.net/external/QuT22MsGPc_UmaVu5aCqyW1axDd6ZByfKvx2q_HE02s/%3Ft%3Dst%3D1719491487~exp%3D1719495087~hmac%3D7076991d1e8c521d00ac8bf024136c0f60ac2a276926c8cfc78b0c1b940d0a8b%26w%3D740/https/img.freepik.com/free-photo/unrecognizable-bearded-firefighter-wearing-leather-protective-gloves_7502-10083.jpg?format=webp&width=448&height=671)
- [Product 6](https://images-ext-1.discordapp.net/external/49Vh2pL1rCSLHgpXrxIt-c2GxCOXsMu7CueOLxFnIok/%3Ft%3Dst%3D1719491500~exp%3D1719495100~hmac%3D80209ce5cbf61b75540c5826d6cba3255821c22761d9d6ee22619496c33723ab%26w%3D740/https/img.freepik.com/free-photo/red-extinguisher-held-by-anonymous-male-firefighter_7502-10081.jpg?format=webp&width=448&height=671)
