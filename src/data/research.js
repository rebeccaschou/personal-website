export const researchData = [
  {
    id: "dirtyrand",
    title: "DirtyRand",
    category: "Research",
    date: "2025 – Present",
    summary:
      "Investigated vulnerabilities in Linux's RNG state to demonstrate predictability attacks against ASLR and stack canaries, proposing an Intel MPK/ARM MTE defense.",
    tags: ["Kernel Exploitation", "Kernel Hardening"],
    githubUrl: null,
    paperUrl: null,
    noLinksText: "Source code available upon request.",
    overview:
      "DirtyRand demonstrates a novel data-only attack vector targeting the Linux kernel's Random Number Generator (RNG). By exploiting restricted write capabilities, downstream randomness becomes deterministic, undermining critical system security primitives including ASLR and stack canaries.",
    keyContributions: [
      "Developed fuzzing strategies to identify workqueue behaviors that impact RNG reseeding.",
      "Demonstrated techniques for delaying and disrupting RNG reseeding through timing-based and data-only attacks.",
      "Submitted second-authored manuscript to USENIX Security 2027 (Under Review).",
    ],
    technologies: ["Linux Kernel", "Intel MPK", "ARM MTE"]
  },
  {
    id: "chirp",
    title: "Chirp",
    category: "Research",
    date: "2023 – Present",
    summary:
      "Investigated emoji-only interaction models through longitudinal mixed-method studies to examine how non-textual systems sustain collaborative meaning-making.",
    tags: ["Computer-Mediated Communication", "Social Computing", "Online Communities"],
    githubUrl: "https://github.com/brownhci/chirp-client",
    paperUrl: null,
    overview:
      "Chirp explores the boundaries of minimal-text interaction by analyzing how users develop shared syntax and semantics when constrained strictly to emoji-based mediums. The study reveals emergent pragmatic structures in low-bandwidth communication channels.",
    keyContributions: [
      "Built a sandbox emoji-only platform capturing real-time interaction logs.",
      "Conducted a longitudinal qualitative and quantitative user study across 540 participants.",
      "Submitted first-authored manuscript to ACM CHI 2027 (Under Review).",
    ],
    technologies: ["Flutter", "Dart", "Express.js", "MariaDB"]
  },
  {
    id: "beebox",
    title: "BeeBox",
    category: "Research",
    date: "2024 – 2025",
    summary:
      "Hardened Linux BPF execution paths against speculative-execution side channels and evaluated performance across the Linux kselftest suite.",
    tags: ["Kernel Hardening"],
    githubUrl: "https://gitlab.com/brown-ssl/beebox",
    paperUrl: "https://cs.brown.edu/people/agaidis/papers/beebox.sec24.pdf",
    overview:
      "BeeBox introduces sandboxing for eBPF programs executing within kernel space. By sandboxing memory access patterns, BeeBox mitigates speculative execution vulnerabilities without compromising BPF's low-latency performance.",
    keyContributions: [
      "Evaluated BeeBox against the Linux BPF kselftest suite, identifying incompatibilities across data structures, helper functions, and kernel execution paths.",
      "Extended BeeBox to support additional BPF functionality, establishing the engineering and performance tradeoffs of hardening BPF in broader contexts.",
    ],
    technologies: ["Linux Kernel", "eBPF"]
  }
];