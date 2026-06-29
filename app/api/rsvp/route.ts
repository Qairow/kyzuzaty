import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, spouseName, attending } = body;

  if (!name || typeof attending !== "boolean") {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const botUrl = process.env.BOT_URL;
  const secretKey = process.env.SECRET_KEY;

  if (!botUrl) {
    console.error("BOT_URL не задан (.env.local)");
    return NextResponse.json({ ok: false, error: "bot_not_configured" }, { status: 500 });
  }

  const statusLabel = attending ? "✅ Келеді" : "❌ Келмейді";
  const message = [
    "Жаңа жауап (Қыз ұзату):",
    `Аты-жөні: ${name}`,
    spouseName ? `Жұбайының аты-жөні: ${spouseName}` : null,
    `Статус: ${statusLabel}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const res = await fetch(`${botUrl}/notify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Secret-Key": secretKey ?? "",
      },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) {
      console.error("Бот вернул ошибку:", await res.text());
      return NextResponse.json({ ok: false, error: "notify_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("Не удалось дойти до бота:", error);
    return NextResponse.json({ ok: false, error: "notify_request_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
