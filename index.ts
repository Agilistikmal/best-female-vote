import { CronJob } from "cron";

async function GetRandomUserAgent(): Promise<string> {
  const res = await fetch(
    "https://gist.githubusercontent.com/pzb/b4b6f57144aea7827ae4/raw/cf847b76a142955b1410c8bcef3aabe221a63db1/user-agents.txt"
  );
  const text = await res.text();
  const userAgents = text.split("\n");
  const randomIndex = Math.floor(Math.random() * userAgents.length);
  return userAgents[randomIndex];
}

let error = false;
async function Vote() {
  let formData = new FormData();
  formData.append("action", "polls");
  formData.append("poll_id", "19");
  formData.append("poll_19", "631");
  formData.append("poll_19_nonce", "47d3cad848");
  formData.append("view", "process");

  const res = await fetch("https://updatebanget.info/wp-admin/admin-ajax.php", {
    method: "POST",
    headers: {
      "User-Agent": await GetRandomUserAgent(),
    },
    body: formData,
  });
  console.log(res.status);
  const text = await res.text();
  if (text.includes("Zee JKT48")) {
    console.log("Success");
    error = false;
  } else {
    if (text.includes("Unable")) {
      error = true;
    } else {
      console.log(text);
      error = false;
    }
  }
}

let count = 0;
const job = new CronJob("* * * * *", async () => {
  count++;
  console.log(`Voting... ${count}`);
  await Vote();
  while (error) {
    await Vote();
  }
});
console.log("Starting cron job every minute.");
job.start();
