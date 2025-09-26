import { IttybitClient } from "@ittybit/sdk";

console.log("Testing Ittybit SDK...");

const ittybit = new IttybitClient({
  apiKey: process.env.ITTYBIT_API_KEY!,
});

const task = await ittybit.tasks.create({
  kind: "ingest",
  url: "https://eorkikxtbgamoosfudlt.supabase.co/storage/v1/object/public/ittybit-storage/Tutorial%20Thumbnails%2011.png",
  description: "Thumbnail Image",
  webhook_url: "https://webhook.site/982e58ce-48c7-4ad4-a11d-bcf27e6b76c7",
});

console.log("Task created:", task.id);
console.log("Task status:", task.status);
