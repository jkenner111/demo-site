import { NextResponse } from "next/server";
import { Bash } from "just-bash";

export async function POST(request) {
  try {
    const { command, timeout = 5000 } = await request.json();

    if (!command || typeof command !== "string") {
      return NextResponse.json(
        { error: "command is required" },
        { status: 400 }
      );
    }

    const bash = new Bash();
    const result = await bash.exec(command, { timeout });

    return NextResponse.json({
      stdout: result.stdout,
      stderr: result.stderr,
      exitCode: result.exitCode,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message, stdout: "", stderr: "", exitCode: 1 },
      { status: 500 }
    );
  }
}
