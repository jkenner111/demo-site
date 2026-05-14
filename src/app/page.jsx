'use client'

import { useState } from 'react'

const screenshots = [
  { src: '/screenshots/main-screen.png', alt: 'TalkinClaw main screen', caption: 'Main screen — press to speak' },
  { src: '/screenshots/review-screen.png', alt: 'Review transcript before sending', caption: 'Review your transcribed request before sending' },
  { src: '/screenshots/response-screen.png', alt: 'Agent response displayed and spoken aloud', caption: 'AI response — read it or hear it' },
  { src: '/screenshots/settings-screen.png', alt: 'Server configuration settings', caption: 'Configure any OpenAI-compatible backend' },
]

export default function Home() {
  const [lightbox, setLightbox] = useState(null)

  const features = [
    { title: 'On-Device Speech Recognition', desc: 'Powered by sherpa-onnx Whisper, all speech-to-text runs locally on your Android device. No cloud dependency, no data leakage. Models download automatically on first launch (~50 MB).', icon: '🎙️' },
    { title: 'Natural Voice Output', desc: 'Kokoro neural TTS generates lifelike speech from your AI responses. Or switch to Piper for a lightweight alternative. Both run entirely on-device.', icon: '🔊' },
    { title: '100% Private by Design', desc: 'Your voice never leaves your phone. Your AI runs on hardware you control. No accounts, no subscriptions, no tracking.', icon: '🔒' },
    { title: 'Built for OpenClaw', desc: 'Designed to work seamlessly with OpenClaw, but compatible with any backend that speaks the OpenAI chat format — Ollama, LiteLLM, vLLM, and more.', icon: '🤖' },
    { title: 'Transcript Display', desc: 'Every response is both spoken aloud and displayed as text on screen. Review the conversation history at a glance.', icon: '📋' },
    { title: 'Apache 2.0 Licensed', desc: 'Fully open-source. Free to use, modify, and distribute. No vendor lock-in, no paid tiers, no telemetry.', icon: '📜' },
  ]

  const steps = [
    { num: '01', title: 'Download', desc: 'Install TalkinClaw from GitLab. On first launch, models download automatically (~50 MB STT, ~98 MB TTS).' },
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

      {/* Screenshots Gallery */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white">See It In Action</h2>
            <p className="mt-4 text-zinc-400 text-lg">Real screenshots from the TalkinClaw app on Android.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setLightbox(s)}
                className="group relative rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-emerald-400/50 transition-all cursor-pointer"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-xs text-white/90 font-medium">{s.caption}</p>
                </div>
              </button>
            ))}
          </div>
          <p className="text-center mt-8 text-zinc-500 text-sm">
            Tap any screenshot to preview — all images captured from the actual app.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-3xl max-h-[90vh] rounded-xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="bg-zinc-800 px-6 py-3 text-center text-sm text-zinc-300">
              {lightbox.caption}
            </div>
          </div>
        </div>
      )}

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

      {/* Architecture */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-white">Powered by On-Device AI</h2>
              <p className="text-zinc-400 leading-relaxed">
                TalkinClaw brings together several state-of-the-art open-source models to create a seamless voice experience.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">•</span>
                  <div>
                    <strong className="text-white">sherpa-onnx</strong>
                    <span className="text-zinc-400 block text-sm">On-device Whisper STT and neural TTS inference. All speech processing stays on your phone.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">•</span>
                  <div>
                    <strong className="text-white">Kokoro</strong>
                    <span className="text-zinc-400 block text-sm">Neural text-to-speech model that generates natural, lifelike voice output from your AI responses.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold">•</span>
                  <div>
                    <strong className="text-white">Piper (alternative)</strong>
                    <span className="text-zinc-400 block text-sm">Lightweight TTS option when you need a smaller, faster voice synthesis model.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="rounded-xl bg-zinc-800/50 ring-1 ring-white/10 p-8">
              <h3 className="text-lg font-semibold text-white mb-4">Compatible Backends</h3>
              <p className="text-zinc-400 text-sm mb-6">
                TalkinClaw works with any backend that speaks the OpenAI chat format:
              </p>
              <div className="flex flex-wrap gap-3">
                {['Ollama', 'LiteLLM', 'vLLM', 'OpenClaw', 'OpenAI API', 'Anthropic', 'Gemini', 'Claude'].map((backend) => (
                  <span key={backend} className="inline-flex items-center rounded-full bg-zinc-700/50 px-3 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/10">
                    {backend}
                  </span>
                ))}
              </div>
              <p className="text-zinc-500 text-xs mt-4">
                Any server that implements the OpenAI chat completions endpoint can serve as a backend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="py-20 bg-zinc-800/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white">Get Started in Minutes</h2>
            <p className="mt-4 text-zinc-400 text-lg">Download, configure, and start chatting with your AI.</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="rounded-xl bg-zinc-800/50 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">1. Download the APK</h3>
              <p className="text-zinc-400 text-sm">Grab the latest release from GitLab. No account, no sign-up, no permissions required beyond microphone access.</p>
            </div>
            <div className="rounded-xl bg-zinc-800/50 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">2. Models Download Automatically</h3>
              <p className="text-zinc-400 text-sm">On first launch, the app downloads ~50 MB for speech-to-text (Whisper) and ~98 MB for text-to-speech (Kokoro). One-time, on-device.</p>
            </div>
            <div className="rounded-xl bg-zinc-800/50 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">3. Connect to Your Server</h3>
              <p className="text-zinc-400 text-sm">Enter your server URL in the settings screen. Supports Ollama, LiteLLM, vLLM, or any OpenAI-compatible endpoint. Self-hosted or remote.</p>
            </div>
            <div className="rounded-xl bg-zinc-800/50 ring-1 ring-white/10 p-6">
              <h3 className="text-white font-semibold mb-2">4. Start Talking</h3>
              <p className="text-zinc-400 text-sm">Press the microphone button, speak your request, and hear the AI response read aloud. Review transcripts on screen at any time.</p>
            </div>
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
