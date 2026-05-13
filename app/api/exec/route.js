import { NextResponse } from "next/server";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(request) {
  try {
    const { command, timeout = 5000 } = await request.json();

    if (!command || typeof command !== "string") {
      return NextResponse.json(
        { error: "command is required" },
        { status: 400 }
      );
    }

    const result = await execAsync(command, { timeout });

    return NextResponse.json({
      stdout: result.stdout,
      stderr: result.stderr,
      exitCode: 0,
    });
  } catch (error) {
    const stdout = error.stdout || "";
    const stderr = error.stderr || "";
    return NextResponse.json(
      { stdout, stderr, exitCode: error.code || 1, error: error.message },
      { status: 500 }
    );
  }
}
