import Navbar from "@components/Navbar";
import Card from "@components/Card";

export default function Home() {
  console.log("AUTH0_BASE_URL:", process.env.AUTH0_BASE_URL);

  return (
    <main className="bg-secondary-50 min-h-dvh flex flex-col items-center justify-center py-32">
      <Navbar />

      {/* Heading */}
      <header className="flex flex-col gap-1 items-center">
        <h1 className="text-2xl font-bold">Shop</h1>
        <p className="text-secondary-500">
          Hier findest du eine Auswahl unserer Produkte
        </p>
      </header>

      {/* Product Grid */}
      <section className="grid grid-cols-3 gap-4 p-8">
        <Card
          name="Feuerwehrhelm"
          price={99}
          imgSrc="https://images-ext-1.discordapp.net/external/uA7uJ7g_UHtq0WVA4lQU6s0j7ywGZsK0nT4siOLkKnw/%3Ft%3Dst%3D1719491224~exp%3D1719494824~hmac%3D132e0125c606408340602179375bb63d097bfd9a82139ef4f316aa6a53ee9157%26w%3D740/https/img.freepik.com/free-photo/unrecognizable-firefighter-yellow-protective-helmet-uniform-studio-back-view-anonymous_7502-10649.jpg?format=webp&width=448&height=671"
          category="Helme"
        />
        <Card
          name="Feuerwehrhose"
          price={149}
          imgSrc="https://images-ext-1.discordapp.net/external/KMyjt1_9AsTw8r3mePqvdW4VIlCdI4FCbRrfd_PgtLM/%3Ft%3Dst%3D1719491429~exp%3D1719495029~hmac%3D248c3dc26496211460b985d154ee15211b69031c1c75a0ccb1d780ccaac4e02f%26w%3D740/https/img.freepik.com/free-photo/unrecognizable-firefighter-walking-after-hard-working-day-crop-view-fireman-uniform-black_7502-10348.jpg?format=webp&width=448&height=671"
          category="Hosen"
        />
        <Card
          name="Feuerwehrgürtel"
          price={49}
          imgSrc="https://images-ext-1.discordapp.net/external/GHNDUt7jNbJi3eOGrTeGBxUH_Zxjs3L7-KQ3X-rTzcI/%3Ft%3Dst%3D1719491465~exp%3D1719495065~hmac%3D26b2c844a088c12f9c88f310695ff1641d4b38fd8a9cdbb632c8e6d0db81c226%26w%3D740/https/img.freepik.com/free-photo/anonymous-firefighter-pulling-hammer-from-leather-holster_7502-10082.jpg?format=webp&width=448&height=671"
          category="Gürtel"
        />
        <Card
          name="Feuerwehraxt"
          price={49}
          imgSrc="https://images-ext-1.discordapp.net/external/b6vcHYOUJHjdG3EbHeFKXBXZADE4fe9ug9z2xXC9N8k/%3Ft%3Dst%3D1719491479~exp%3D1719495079~hmac%3Ddd841cc8a702ac6ea59f40e866bcd111ce335d613669c428070770f5f75067a2%26w%3D740/https/img.freepik.com/free-photo/bearded-caucasian-firefighter-full-gear-holding-red-axe-fire-fighting-studio-front-view_7502-10590.jpg?format=webp&width=448&height=671"
          category="Werkzeuge"
        />
        <Card
          name="Feuerwehrhandschuhe"
          price={29}
          imgSrc="https://images-ext-1.discordapp.net/external/QuT22MsGPc_UmaVu5aCqyW1axDd6ZByfKvx2q_HE02s/%3Ft%3Dst%3D1719491487~exp%3D1719495087~hmac%3D7076991d1e8c521d00ac8bf024136c0f60ac2a276926c8cfc78b0c1b940d0a8b%26w%3D740/https/img.freepik.com/free-photo/unrecognizable-bearded-firefighter-wearing-leather-protective-gloves_7502-10083.jpg?format=webp&width=448&height=671"
          category="Handschuhe"
        />
        <Card
          name="Feuerlöscher"
          price={104}
          imgSrc="https://images-ext-1.discordapp.net/external/49Vh2pL1rCSLHgpXrxIt-c2GxCOXsMu7CueOLxFnIok/%3Ft%3Dst%3D1719491500~exp%3D1719495100~hmac%3D80209ce5cbf61b75540c5826d6cba3255821c22761d9d6ee22619496c33723ab%26w%3D740/https/img.freepik.com/free-photo/red-extinguisher-held-by-anonymous-male-firefighter_7502-10081.jpg?format=webp&width=448&height=671"
          category="Werkzeuge"
        />
      </section>
    </main>
  );
}
