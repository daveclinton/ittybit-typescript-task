import { IttybitClient } from "@ittybit/sdk";

console.log("Testing Ittybit SDK...");

const ittybit = new IttybitClient({
  apiKey: process.env.ITTYBIT_API_KEY!
});

const task = await ittybit.tasks.create({
  kind: "ingest",
  url: "https://eorkikxtbgamoosfudlt.supabase.co/storage/v1/object/public/ittybit-storage/twitch-screenshot.png",
  description: "Twitch Support",
  webhook_url: "https://7c647eff11ef.ngrok-free.app/webhook",
});



console.log("Task created:", task.id);
console.log("Task status:", task.status);


