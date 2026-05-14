'use client'

export default function Home() {
  const features = [
    { title: 'On-Device Speech Recognition', desc: 'Powered by sherpa-onnx Whisper, all speech-to-text runs locally on your Android device. No cloud dependency, no data leakage.', icon: '🎙️' },
    { title: 'Natural Voice Output', desc: 'Kokoro neural TTS generates lifelike speech from your AI responses. Or switch to Piper for a lightweight alternative.', icon: '🔊' },
    { title: '100% Private by Design', desc: 'Your voice never leaves your phone. Your AI runs on hardware you control. No accounts, no subscriptions, no tracking.', icon: '🔒' },
  ]
  const steps = [
    { num: '01', title: 'Download', desc: 'Install TalkinClaw from GitLab. On first launch, models download automatically (~50MB STT, ~98MB TTS).' },
    { num: '02', title: 'Connect', desc: 'Point the app to your server URL — Ollama, LiteLLM, vLLM, or any OpenAI-compatible backend.' },
    { num: '03', title: 'Speak', desc: 'Tap the button, say what you need. Hear the response played back through Kokoro neural TTS.' },
  ]
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 antialiased">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-md bg-emerald-400/10 px-2.5 py-0.5 text-sm font-medium text-emerald-400 ring-1 ring-emerald-400/20">Open Source</span>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Your voice, your AI,{' '}
                <span className="text-emerald-400">your hardware</span>
              </h1>
              <p className="text-lg text-zinc-400 max-w-xl">
                TalkinClaw is a simple voice assistant for self-hosted LLM agents.
                Press a button, speak your request, and hear the response — all on your
                own hardware. Your voice never leaves your phone.
              </p>
              <div className="flex gap-4">
                <a href="https://gitlab.com/jkenner111/TalkinClaw" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-emerald-300 transition-colors">
                  Get Started
                </a>
                <a href="https://gitlab.com/jkenner111/TalkinClaw" className="inline-flex items-center justify-center rounded-lg bg-zinc-800 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/10 hover:bg-zinc-700 transition-colors">
                  View on GitLab
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative mx-auto w-72 h-[520px] rounded-[36px] border-4 border-zinc-700 bg-zinc-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-6 bg-zinc-900 rounded-b-xl z-10" />
                <div className="p-6 pt-10 h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full space-y-4">
                      <div className="h-4 w-3/4 bg-zinc-700 rounded" />
                      <div className="h-4 w-1/2 bg-zinc-700 rounded" />
                      <div className="mt-6 h-12 w-full bg-emerald-400/20 rounded-lg border border-emerald-400/30 flex items-center justify-center">
                        <span className="text-emerald-400 text-sm font-medium">Listening...</span>
                      </div>
                      <div className="h-4 w-full bg-zinc-700 rounded" />
                      <div className="h-4 w-2/3 bg-zinc-700 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white">Why TalkinClaw?</h2>
            <p className="mt-4 text-zinc-400 text-lg">Full control over your voice AI stack — from microphone to inference.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="rounded-xl bg-zinc-800/50 ring-1 ring-white/10 p-8 space-y-4">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-zinc-800/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-white">How It Works</h2>
            <p className="mt-4 text-zinc-400 text-lg">Three steps to your own voice AI assistant.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30">
                  <span className="text-emerald-400 font-bold text-lg">{s.num}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-zinc-400 text-sm">
              <span className="text-white font-semibold">TalkinClaw</span>
              <span>·</span>
              <span>Open source · Apache 2.0</span>
            </div>
            <div className="flex items-center gap-6 text-zinc-500 text-sm">
              <span>Ollama</span>
              <span>LiteLLM</span>
              <span>vLLM</span>
              <span>OpenClaw</span>
            </div>
            <div>
              <a href="https://gitlab.com/jkenner111/TalkinClaw" className="text-zinc-400 hover:text-white transition-colors">
                View on GitLab →
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
