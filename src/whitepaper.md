# Monk OS: Event-First Computing for Attention Sovereignty and Commitment Integrity

**A Whitepaper on Human-Centered Mobile Operating System Design**

---

## Abstract

Modern smartphones are economic machines optimized to maximize engagement, not meaning. The result is a persistent tension: the phone is simultaneously the most powerful personal computer ever created and the most efficient attention hijacker ever deployed. Monk OS is a minimal Android ROM that inverts this default — treating humans and their commitments as the persistent layer, and apps as the transient one. This paper presents Monk OS's architecture and philosophy: event-first computing where lived experience becomes structured memory; a deterministic Policy Gate that partitions AI capability from system trust; a split-brain topology that keeps the phone minimal while delegating heavy processing to controlled infrastructure; encryption-first design where zero plaintext at rest is a structural guarantee; and ROM-level attention sovereignty that removes consumption surfaces by construction rather than managing them by policy.

---

## 1. Introduction

The dominant metaphor of mobile computing is the app launcher. A phone, in the prevailing design, is a grid of icons — each icon a portal to a self-contained application that competes for the user's attention through notifications, feeds, recommendation engines, and growth loops. This metaphor has shaped two decades of mobile operating system design, producing devices of extraordinary capability and equally extraordinary cost to the humans who carry them.

The cost is twofold. First, attention becomes the primary currency of the device. Every interface element, from the notification shade to the app drawer, is shaped around capturing and retaining focus. The user navigates a landscape of interrupts, each designed to feel urgent. The phone, which should amplify human agency, instead fragments it across dozens of competing claims on consciousness.

Second, human memory becomes scattered. Real life — calls, meetings, commitments, relationships, decisions — gets distributed across applications that do not talk to each other. The user becomes the integration layer: copying text between apps, forwarding messages across platforms, manually transferring action items from a call into a task manager, trying to reconstruct what was said and what was promised. The phone's most valuable outputs — commitments, insights, relational context — are trapped inside transient platforms and opaque interfaces.

Monk OS begins with a proposition: the phone should be an instrument for capturing reality and converting it into durable memory and executable commitments, without requiring the user to live inside apps. It should not be a consumption portal. It should not be a notification-driven attention marketplace. It should be a disciplined tool that records what matters, structures it for retrieval, and presents only what requires action.

This paper describes the architecture, philosophy, and implementation of Monk OS. Section 2 positions it within related work across computing history. Section 3 derives its first principles. Section 4 details the system architecture. Section 5 introduces three novel computing paradigms enabled by the design. Section 6 describes the implementation. Section 7 outlines future directions. Section 8 evaluates the architecture honestly, including its limitations. Section 9 concludes.

---

## 2. Related Work

Monk OS does not emerge from a vacuum. It draws on — and departs from — several established traditions in computing, privacy, and personal technology design.

### 2.1 Unix and Plan 9: Everything Is a File

The Unix philosophy established that a small set of universal abstractions, applied consistently, produces systems of remarkable power. "Everything is a file" gave Unix a uniform interface for processes, devices, network sockets, and storage. Plan 9 extended this principle further, making network resources and distributed systems accessible through the same file abstraction.

Monk OS adopts the spirit of this approach but replaces the primitive. In Monk OS, the universal abstraction is not the file but the Event — a canonical object representing something that happened, containing raw capture, metadata, derived artifacts, and commitments with provenance. Where Unix unified computing around file descriptors, Monk OS unifies personal computing around Events. Storage, processing, UI, sync, and automation all become transformations of Events rather than features of applications.

### 2.2 Dynabook and the PARC Tradition

Alan Kay's 1972 Dynabook proposal envisioned personal computing as amplification of human capability — a device that would serve as "a personal dynamic medium" for learning, creativity, and thought. The Xerox PARC tradition that followed produced the graphical user interface, object-oriented programming, and the conceptual foundation for modern personal computing.

Monk OS shares Kay's conviction that personal computing should amplify rather than diminish human capacity. Where it departs is in diagnosis: the Dynabook imagined active, creative engagement with computing. Monk OS observes that in practice, the engagement relationship has inverted. Modern phones demand attention rather than amplifying it. The amplification Monk OS pursues is not interactive creativity but passive capture and structured recall — making the phone work for the user's memory and commitments without requiring the user to work for the phone.

### 2.3 Calm Technology

Mark Weiser's vision of ubiquitous computing — articulated most clearly in his 1991 paper "The Computer for the 21st Century" — proposed that the most profound technologies are those that disappear, weaving themselves into the fabric of everyday life until they are indistinguishable from it. Calm technology, in Weiser's formulation, informs but does not demand attention.

Monk OS is an exercise in calm technology applied to the smartphone. The device captures conversations and voice notes as they happen, processes them asynchronously, and surfaces only actionable commitments. The user does not interact with a processing pipeline. The user lives, and the system structures what matters. The phone recedes from the center of attention precisely because its architecture removes the surfaces that demand attention.

### 2.4 Digital Minimalism

Cal Newport's framework of digital minimalism advocates intentional technology use — choosing tools that serve deeply held values and accepting the costs of opting out of those that do not. Newport's prescription is behavioral: cultivate better habits, establish boundaries, choose technologies deliberately.

Monk OS goes further. Where digital minimalism asks the user to exercise discipline in the face of designed temptation, Monk OS removes the temptation at the operating system level. There is no browser to resist. There is no app store to avoid. There are no feeds to scroll past. The discipline is architectural, not behavioral. This is an important distinction: behavioral interventions require ongoing willpower; structural interventions require a single decision. Monk OS is that single decision, instantiated as a ROM.

### 2.5 Privacy-Focused Android ROMs

Projects like GrapheneOS, CalyxOS, and LineageOS have demonstrated that meaningful privacy can be achieved on consumer hardware. GrapheneOS, in particular, has established a standard for hardened Android builds: verified boot, exploit mitigations, sandboxed Google Play compatibility, and per-profile isolation. CalyxOS balances usability with privacy through microG integration. LineageOS provides broad device support for de-Googled Android.

These projects share a common limitation: they remove surveillance infrastructure but preserve the app-launcher paradigm intact. The user gains privacy — no telemetry, no ad tracking, no Google services phoning home — but retains the same attention-fragmenting, silo-creating app model. A GrapheneOS user still installs apps, still receives notifications, still navigates an app drawer. Privacy is a feature layered onto the conventional smartphone experience.

Monk OS respects this work but addresses a different problem. Privacy in Monk OS is not a feature to be added but a design constraint that shapes every architectural decision: per-event encryption with hardware-backed keys, zero plaintext at rest, encrypted sync to user-controlled infrastructure. And simultaneously, Monk OS replaces the app model entirely. The phone is not a private app launcher. It is a private capture-and-execution instrument. The two concerns — privacy and attention sovereignty — are solved together because they share a common root: the user should control what the device does with their data and their attention.

### 2.6 AI Assistants and AI-First Devices

A growing category of products — from established voice assistants (Siri, Google Assistant) to dedicated AI hardware (Rabbit R1, Humane AI Pin) — proposes AI as the primary interface to computing. These systems position AI as an overlay on existing infrastructure: the user speaks or types, the AI interprets, and the existing app ecosystem executes. The Rabbit R1 attempts to eliminate the app model by acting as a universal agent that interacts with services on the user's behalf. The Humane AI Pin removes the screen entirely, projecting information onto the user's palm.

These approaches share a common architecture: AI as the primary decision-maker, with the user in a conversational relationship with an opaque system. The trust model is implicit — the user trusts the AI to interpret intent correctly, execute actions faithfully, and represent results honestly. When the AI errs, the user may not discover the error until its consequences manifest.

Monk OS differs in two fundamental respects. First, AI in Monk OS is not the interface. The interface is five deterministic screens that present Events, people, and commitments directly. AI is a processing stage in a gated pipeline — powerful, useful, and structurally prevented from committing anything to the user's reality without passing through deterministic verification. The user sees what the system has done, not what the AI says it has done. Second, Monk OS does not overlay existing apps or act as a universal agent. It replaces the app model entirely with an Event-first architecture where AI proposes and deterministic rules commit. The trust model is explicit, auditable, and visible in the audit log.

### 2.7 AI-Native Operating Systems

Matrix OS represents a genuinely novel approach: an operating system where the Claude Agent SDK is the literal kernel, generating software on demand through natural language. Software does not exist until the user describes a need, at which point the kernel produces real, functional code. This is generative computing — and it works.

Monk OS and Matrix OS share the conviction that apps are the wrong primitive. They diverge on what replaces them. Matrix OS replaces apps with generated software, making AI the substrate of computing. Monk OS replaces apps with Events, making lived experience the substrate. Matrix OS solves the problem of "I don't have the software I need." Monk OS solves the problem of "I can't trust the software I have." These are complementary threat models, and both projects would benefit from the other's insights. A detailed comparison is available separately; this paper focuses on Monk OS's own architecture and contribution.

---

## 3. First Principles

Monk OS derives its architecture from a small set of first principles about what a phone is, what it should do, and what it should not do.

### 3.1 What a Phone Really Is

A smartphone, stripped to fundamentals, is four things: a sensor hub (microphone, camera, touch, location), a communication endpoint (voice and network), an identity token (cryptographic keys, accounts, trust relationships), and an attention surface (the scarce resource that everything else competes for).

Everything beyond these four primitives is optional. This yields a minimal set of operations that a phone must support: Capture (recording sensor input), Address (managing people, groups, and projects), Store (maintaining local cache and durable memory), Process (applying code and AI to captured data), Communicate (routing information to appropriate endpoints), and Consume (reviewing, reflecting, and crafting responses).

Applications are not primitives. Applications are replaceable transport skins that happen to implement some of these operations — usually in ways that optimize the application's economic goals rather than the user's needs.

### 3.2 The Central Design Move: Event-First Computing

From this analysis follows Monk OS's organizing principle. If apps are not primitives, what is? The answer: the Event.

An Event is a canonical object representing something that happened. A phone call. A voice note. An observation. Every Event contains four layers:

- **Raw capture**: the encrypted audio or text payload — the unmediated record of what occurred.
- **Metadata**: timestamps, participants, tags, privacy tier — the contextual frame.
- **Derived artifacts**: transcript, summary — the processed intelligence, always traceable to the raw capture.
- **Commitments and action items**: obligations extracted from the Event, each linked to provenance — the specific moment in a conversation where the commitment was made.

From this structure follows a key invariant:

> If it matters, it exists as an Event. If it doesn't exist as an Event, the system does not treat it as real.

This invariant is not philosophical decoration. It is the engineering foundation that makes the entire system coherent. Storage becomes Event persistence. Processing becomes Event transformation. UI becomes Event presentation. Sync becomes Event replication. Automation becomes Event-triggered workflows. Every subsystem operates on the same primitive, and that primitive is grounded in something that actually happened.

### 3.3 Mapping Is Permanent; Transports Are Disposable

Humans do not live in apps. Humans live in relationships, roles, projects, and obligations. Monk OS formalizes this as "mapping" — the stable layer of the system.

Mapping comprises the person graph (identity, relationship context, privacy tiers), groups (teams, families, projects), recurring commitments, and personal constraints. This layer changes slowly and matters permanently.

Transports — messaging apps, social platforms, API endpoints, automation tools — are the unstable layer. They change constantly, break frequently, and can be swapped without affecting the user's memory or commitments.

By separating mapping from transport, Monk OS achieves a property that app-centric systems cannot: continuity independent of any platform. Your relationships, commitments, and Event history persist even if every external service you use disappears tomorrow. The mapping is yours. The transports are disposable.

---

## 4. Architecture

This section describes the technical architecture of Monk OS across five subsections: design principles, system topology, the Event pipeline, the Policy Gate, and the encryption architecture.

### 4.1 Design Principles

Six principles govern every architectural decision in Monk OS.

**Principle 1: Everything Is an Event.** Events are the single source of truth. There is no separate "notes database" or "task manager" or "call log." There is the Event log, and everything else is a view on it.

**Principle 2: AI Proposes, Deterministic Rules Commit.** AI is powerful and useful. It is also stochastic, opaque, and capable of confident hallucination. Monk OS partitions the system into two trust domains: AI operates freely in the processing domain (transcription, summarization, entity extraction), but every AI output must pass through a deterministic Policy Gate before it touches the Event database. This is the trust partition, and it is non-negotiable.

**Principle 3: Split-Brain Architecture.** The phone is the working set — fast, local, secure, offline-capable. A VPS serves as durable memory and heavy compute. The phone captures and encrypts. The VPS transcribes, summarizes, and extracts. Patches flow back through the Policy Gate. Neither half is sufficient alone; together they form a complete system.

**Principle 4: Encryption-First.** Encryption is not a feature that can be toggled. It is a design constraint that shapes every data flow. Zero plaintext at rest is a structural guarantee enforced by the architecture, not a setting chosen by the user.

**Principle 5: Offline-First.** The phone must be fully functional without a network connection. Capture, encryption, local storage, and UI all work in airplane mode. Processing and sync happen when connectivity is available, but the core experience — recording reality and reviewing commitments — never depends on a network.

**Principle 6: ROM, Not App.** The problem Monk OS addresses is OS-shaped: attention hijacking via notifications, app installs, and consumption surfaces is enabled by the operating system itself. An app running atop a conventional Android build cannot reliably remove these surfaces. A ROM can replace the launcher, remove consumption entry points, enforce network allowlists, and ship privileged system services. The solution must match the shape of the problem.

### 4.2 System Topology

Monk OS operates across three tiers: the device (capture, UI, and policy enforcement), the network (encrypted sync), and the VPS (processing and durable storage).

The following table maps traditional operating system concepts to their Monk OS implementations:

| OS Concept | Monk OS Implementation |
|---|---|
| Kernel | Event Pipeline + Policy Gate (Kotlin FSM + deterministic gates) |
| RAM / Working Memory | Review Queue + Today Screen (Room DB active events) |
| Persistent Storage | Append-only Event Log + Room DB (events.jsonl + SQLite) |
| System Calls | Core modules: capture, encrypt, sync (Kotlin module APIs) |
| Processes | Processing jobs: transcribe, summarize, extract (WorkManager + VPS workers) |
| Device Drivers | Sync adapters + transport adapters (Retrofit + future platform adapters) |
| Shell / UI | MonkLauncher — 5 modal screens (Jetpack Compose) |
| IPC | Encrypted blob + patch exchange (AES-256-GCM + JSON patches) |
| Identity | Person graph + privacy tiers (Room entities + address book) |
| Cron / Background | WorkManager scheduled jobs (JobScheduler + sync cadence) |

This mapping is not metaphorical. It reflects the actual system structure: the Event Pipeline and Policy Gate serve the same function as a kernel — they are the trusted core through which all data must pass. The five Compose screens serve as the shell. WorkManager jobs serve as scheduled processes. The analogy holds because both systems solve the same problem: mediating between untrusted inputs and trusted state.

### 4.3 The Event Pipeline

The Event pipeline traces the complete lifecycle of a phone call from capture to actionable commitment. This is Monk OS's critical path.

**Step 1: Call capture.** The MonkDialer, implemented as an Android InCallService, detects an incoming or outgoing call. A CallStateListener monitors call state transitions. When the call becomes active, the RecordingController starts a MediaRecorder instance capturing audio (AAC-ADTS format, 44100 Hz sample rate, 128 kbps bitrate). The recorder writes to a temporary file in app-private storage.

**Step 2: Post-call finalization.** When the call disconnects, PostCallFinalize executes a six-step pipeline: enroll the device cryptographic identity if needed, encrypt the audio blob with a per-event AES-256-GCM key, resolve or create a Person entity from the phone number, insert an EventEntity stub with status PENDING_RECORDING, link the EventParticipant, and append an EVENT_CREATED entry to the audit log. The plaintext audio file is deleted immediately after encryption. At no point does unencrypted audio persist on storage.

**Step 3: Status transition.** The Event transitions from PENDING_RECORDING to PENDING_PROCESSING. This transition is validated by a finite state machine that enforces a strict set of allowed transitions across six states. Invalid transitions throw exceptions.

**Step 4: Sync to VPS.** The SyncManager schedules four chained WorkManager jobs, each with idempotency keys to prevent double-processing. First, UploadBlobJob transmits the encrypted audio to the VPS blob store via multipart POST. Second, EnqueueProcessingJob requests the VPS to run the processing pipeline (transcribe, summarize, extract action items). Third, PollResultsJob periodically checks job status until the VPS reports completion. Fourth, ApplyPatchJob fetches the result patch.

**Step 5: VPS processing.** On the VPS, workers execute the processing pipeline: transcription produces a timestamped text from the audio, summarization condenses the transcript, and extraction identifies action items with transcript span pointers (start and end positions in the transcript text) and confidence scores. All results include provenance metadata — which model produced them, which pipeline version, which prompt.

**Step 6: Policy Gate evaluation.** The returned patch passes through the Policy Gate (detailed in Section 4.4). The gate evaluates five sequential checks and produces one of three decisions: Ready, RequiresApproval, or Failed.

**Step 7: Commitment or escalation.** If the decision is Ready, artifacts (transcript, summary) and action items are committed to the Room database, and the Event transitions to READY. If RequiresApproval, the Event transitions to REQUIRES_APPROVAL and appears in the review queue for human evaluation. If Failed, the Event transitions to FAILED and can be retried.

**Step 8: Display.** Ready events appear on the Today screen with their action items. Events requiring approval show a distinct visual indicator. The user sees commitments grounded in actual conversations, not AI-generated suggestions disconnected from reality.

### 4.4 The Policy Gate

The Policy Gate is the trust boundary of Monk OS — a small, deterministic, auditable piece of code that stands between AI-generated outputs and the user's Event database. It is implemented as a Kotlin class with five sequential gates.

**Gate 1: Provenance check.** Every action item in the patch must include a transcript span — a start position and end position pointing to the specific words in the transcript where the commitment was made. If any action item lacks provenance, the entire patch is rejected with a Failed decision. This is binary: cite or reject. There is no partial credit. This gate is the primary anti-hallucination mechanism. An AI model that cannot point to the words that generated a commitment is not permitted to create that commitment.

**Gate 2: Privacy tier check.** If the Event carries a privacy tier of INTIMATE — therapy sessions, medical calls, deeply personal conversations — all AI-generated patches automatically escalate to RequiresApproval, regardless of how confident the AI is. The user must manually review and approve before any artifacts commit.

**Gate 3: Risk classifier.** A keyword-based classifier scans the transcript and summary text for sensitive content across four categories: personally identifiable information (social security numbers, passport numbers, credit card numbers), health information (diagnosis, medication, prescription), legal content (attorney, lawsuit, subpoena), and financial data (account numbers, routing numbers). Any match adds a risk reason to the approval queue. The classifier uses twenty-one keyword patterns with lowercase substring matching — deliberately simple, deliberately auditable.

**Gate 4: Redaction.** Before any summary text reaches the UI or database, the gate applies two regex-based redaction rules. Phone numbers matching the pattern `+?[\d\s\-().]{10,}` are replaced with `[REDACTED_PHONE]`. Email addresses matching `[\w.+\-]+@[\w\-]+\.[a-zA-Z]{2,}` are replaced with `[REDACTED_EMAIL]`. This is a mutation gate — it modifies the patch in place, stripping contact information from derivative text while preserving it in the encrypted raw capture.

**Gate 5: Confidence floor.** Action items with an AI confidence score below 0.6 are flagged for human approval. The AI's own uncertainty triggers the gate. This prevents low-confidence suggestions from silently entering the commitment queue.

The simplicity of these gates is the feature, not the limitation. Each gate is a conditional check that a developer can read in minutes, predict the output of for any input, and verify against the codebase. The Policy Gate does not understand context. It does not weigh nuance. It checks boxes. And that is precisely what makes it trustworthy in a way that AI self-assessment cannot be.

The analogy is to microkernel design. In the Tanenbaum-Torvalds debate, Tanenbaum argued for a tiny trusted core that does almost nothing — just enough to manage isolation and message passing — with everything else running in user space with restricted privileges. Monk OS applies this principle to AI: the Policy Gate is the microkernel, small and verifiable. AI runs in user space, powerful but constrained. If the AI produces nonsense, the system continues running correctly because the trusted core rejects what it cannot verify.

All gate decisions are logged to the AuditLogEntity with actor, action, target, timestamp, and a JSON detail field containing the specific reasons for the decision. The audit trail is permanent and queryable.

### 4.5 Encryption Architecture

Encryption in Monk OS is not a feature. It is a design constraint that permeates every data flow in the system.

**Device keypair.** On first enrollment, the CryptoManager generates an RSA-4096 keypair stored in the Android Keystore under the alias `monkos_device_key`. On devices that support it, the Keystore is hardware-backed, meaning the private key never leaves the secure hardware enclave. The keypair serves two purposes: device identity (the device ID is derived as the first 32 hexadecimal characters of the SHA-256 hash of the public key) and key wrapping for per-event symmetric keys.

**Per-event encryption.** Each Event's audio payload is encrypted with a unique AES-256-GCM symmetric key. A random 12-byte initialization vector is generated from SecureRandom for each encryption operation. GCM mode provides both confidentiality and authentication with a 128-bit authentication tag. The symmetric key is generated fresh for every Event — no key reuse across Events.

**Key wrapping.** After encrypting the audio, the AES-256 symmetric key is itself encrypted (wrapped) using the device's RSA-4096 public key with OAEP padding (SHA-256 hash, MGF1 mask generation). The wrapped key is stored as Base64 in the EncryptedBlobMeta structure alongside the Base64-encoded IV and a SHA-256 hash of the plaintext for integrity verification. To decrypt, the device uses its RSA private key (from the Keystore) to unwrap the AES key, then uses the AES key and IV to decrypt the audio.

**Zero plaintext guarantee.** The plaintext audio file is deleted immediately after encryption — within the same finalization pipeline that creates the Event. At no point in normal operation does unencrypted audio exist on persistent storage. This is a structural guarantee: the code path from recording to encrypted storage has no branch where plaintext persists.

**VPS enrollment.** Device enrollment is a single POST to `/enroll` carrying the device ID and PEM-encoded public key. The VPS responds with a session token used for subsequent authenticated requests. The VPS receives only encrypted blobs; it processes audio after decryption using server-side keys provisioned during enrollment. The trust model is explicit: you control the VPS, you control the keys, you control the processing.

---

## 5. Novel Paradigms

Monk OS's architecture enables three computing paradigms that, individually, exist in partial form elsewhere but are unified here for the first time.

### 5.1 Capture-First Computing

Most productivity systems operate on a tell-me-what-you-need model. The user actively inputs information: typing tasks, writing notes, dictating reminders. The burden of structuring reality falls on the human. Every unrecorded conversation, every unlogged decision, every informal commitment made over a phone call — these are lost unless the user does the work of capturing them.

Monk OS inverts this. The system passively captures conversations as they happen. The user does not need to remember to record, does not need to take notes during a call, does not need to manually create action items afterward. The phone is always listening (during calls, or during explicit voice capture), and the processing pipeline structures what it captures into Events with artifacts and commitments.

This is not "tell me what you need." It is "live your life; I will structure it."

The result is durable memory that accumulates without effort. Over time, the user builds a searchable, structured history of conversations, commitments, and relationships — not because they maintained a meticulous note-taking habit, but because the system captured and processed reality on their behalf.

Capture-first computing contrasts with both traditional productivity tools (which require active input) and AI assistants (which require active queries). Monk OS requires neither. It captures, processes, and presents. The user's role is to review and act, not to feed the system.

### 5.2 Deterministic Trust

The relationship between AI capability and human trust is the central unsolved problem of personal computing in the AI era. AI models are powerful enough to manage calendars, draft communications, summarize meetings, and extract commitments. They are also stochastic, opaque, and capable of confident hallucination — generating obligations that were never discussed, summaries that misrepresent what was said, action items attributed to commitments that do not exist.

In most AI systems, the response to this problem is probabilistic: fine-tune the model, add guardrails, implement RLHF, hope that the error rate is low enough. Monk OS rejects this approach for personal computing. In a domain where a hallucinated obligation can damage a relationship or a misattributed commitment can create a false expectation, "probably correct" is not sufficient.

Deterministic trust is the alternative. The Policy Gate does not assess whether AI output is probably right. It verifies whether AI output meets a set of hard, deterministic criteria: provenance exists, privacy tier is respected, risk keywords are absent, contact information is redacted, confidence exceeds the floor. These criteria are not sophisticated. A first-year engineering student could implement them. And that is the point.

The philosophical claim is direct: in personal computing, integrity matters more than capability. A system that correctly captures 80% of action items but never fabricates one is more trustworthy than a system that captures 95% but occasionally invents commitments. The Policy Gate enforces this preference structurally. It trades recall for precision — and in the domain of personal commitments, that is the correct trade.

### 5.3 Attention Sovereignty

"Digital wellbeing" features — screen time reports, app timers, focus modes — are the mobile industry's response to the attention crisis. They share a common limitation: they are apps running atop an app-centric operating system. They manage consumption without removing the consumption surfaces. The user must still exercise willpower to resist the underlying design, and the underlying design is optimized to defeat that willpower.

Monk OS does not manage attention. It enforces attention sovereignty at the operating system level.

There is no browser. There is no app store. There are no feeds. There are no third-party application installs. The phone cannot display a social media timeline because the software to render one does not exist on the device. The phone cannot open a news feed because there is no WebView-based browsing entry point. These are not features that were removed from a menu. They are capabilities that were never included in the ROM build.

The design acknowledges that humans operate in a multi-device world. Monk OS is not the user's only phone. It is the user's commitment phone — the device for calls, capture, review, and execution. A separate device handles interactive consumption: browsing, apps, social engagement. This mode separation is hardware-enforced: the Monk device remains cognitively clean because the surfaces that would pollute it do not exist.

The phrase from the thesis is apt: "retire from the internet." Not disappear from the internet — retire. Presence is maintained through controlled, auditable artifact pipelines. The system can publish from captured Events, from an evergreen content library, from approval-gated drafts. The user visits the internet by choice, on a separate device, at chosen times. The internet does not visit the user through the commitment device. This is structural, not behavioral. The phone is incapable of hijacking attention because the hijacking surfaces do not exist.

---

## 6. Implementation

### 6.1 Technology Stack

Monk OS is built on Android 12+ using AOSP as the base, targeting Pixel 6 and later devices. The application layer is written entirely in Kotlin 1.9+, using Jetpack Compose for all user interfaces and Room for local persistence.

The persistence layer uses a Room database with nine entities spanning people, events, artifacts, action items, sync coordination, and audit logging. The Android Keystore provides hardware-backed cryptographic key storage. MediaRecorder handles audio capture during calls.

Background processing uses WorkManager for battery-aware, network-aware job scheduling. Dependency injection is handled by Hilt. Serialization uses kotlinx.serialization for JSON encoding of log entries, patches, and API payloads. Network communication with the VPS uses OkHttp and Retrofit.

The single-device target (Pixel) is a deliberate constraint. Supporting one device tree well is preferable to supporting many poorly, particularly for a ROM that must handle privileged system services like call recording and launcher replacement.

### 6.2 Module Architecture

The Android application is organized into eight Gradle modules with clear separation of concerns:

**Core libraries:**

- `:core:data` — The foundational module. Contains the Room database definition, all nine entity classes, data access objects, type converters, the Event finite state machine (six states, eight valid transitions), and the append-only event log. This module is the source of truth for Monk OS's data model.

- `:core:crypto` — The CryptoManager: RSA-4096 keypair generation, AES-256-GCM encryption, key wrapping, device enrollment logic, and the EncryptedBlobMeta structure. Depends only on Android Keystore APIs.

- `:core:policy` — The PolicyGate implementation: five sequential gates, the VpsPatch data model, redaction logic, and decision output types (Ready, RequiresApproval, Failed). This module has no AI dependencies — it is pure deterministic logic.

- `:core:sync` — The SyncManager and its four WorkManager job classes (UploadBlob, EnqueueProcessing, PollResults, ApplyPatch), plus the VpsApi Retrofit interface defining five VPS endpoints. Handles all network communication and retry logic with exponential backoff and idempotency keys.

- `:core:eventservice` — The MonkEventService, a foreground service that orchestrates the event pipeline: receiving post-call intents, triggering sync chains, managing status transitions, and coordinating between the crypto, policy, and sync modules.

**Application modules:**

- `:app:launcher` — The MonkLauncher, registered as the default HOME activity. Contains five Compose screens (Today, People, Capture, Search, Settings), the navigation host, and the Material 3 theme. This is the entire user-facing surface of the operating system.

- `:app:dialer` — The MonkDialer (InCallService), CallStateListener, RecordingController, and PostCallFinalize. Handles the complete call lifecycle from ring to encrypted Event creation.

- `:app:settings` — The MonkSettings activity: VPS configuration, retention policies, the kill switch, and the audit log viewer.

### 6.3 The Five Screens

Monk OS presents five screens, accessible via a bottom navigation bar. There is no nested navigation, no drawer, no tabs within screens. Each screen is a single, focused surface.

**Today** is the action queue. It displays Events that have reached READY status, with their associated action items and processing badges. Events in REQUIRES_APPROVAL state appear with distinct visual treatment. Sync status is visible at a glance. This screen answers one question: what do I need to act on?

**People** is the relational layer. It presents a search-first interface — no alphabetical scroll through hundreds of contacts, but immediate search with avatar initials and an open-loop count per person showing how many unresolved action items are associated with each relationship. This screen answers: who am I accountable to, and what do I owe them?

**Capture** enables explicit voice note recording. A centered, hold-to-record button with pulse animation provides the interface for non-call captures — thoughts, observations, memos. These become Events with the same processing pipeline as phone calls.

**Search** provides full-text search across Events, artifacts, and people. The search index spans transcripts, summaries, action item text, and person names. This is the retrieval interface for the durable memory that accumulates over time.

**Settings** exposes VPS configuration (endpoint URL, enrollment status), retention policies (how long Events persist locally before archival), the kill switch (emergency wipe of local data), and the audit log viewer (a chronological record of every system action).

### 6.4 Call Recording Strategy

Call recording on Android is the system's hardest technical challenge. Android's policies on call recording have tightened progressively across versions, and vendor implementations vary significantly. Monk OS adopts a three-tier strategy, in order of preference:

First preference: fork the AOSP Dialer and integrate it as a privileged system app. As a system-level application with platform signing, the forked dialer has access to audio routes and call state that are unavailable to third-party apps. This provides the highest recording quality and reliability.

Second preference: use the Telecom framework's InCallService API with direct MediaRecorder access. The MonkDialer registers as an InCallService, receives call lifecycle callbacks, and manages recording through the RecordingController. This approach works on AOSP-based builds where the InCallService has sufficient audio access.

Third preference: capture via the microphone and speaker route as a fallback. Lower quality, but deterministic — the recording succeeds regardless of vendor-specific Telecom restrictions.

Recording parameters are consistent across all tiers: AAC-ADTS format, 44100 Hz sample rate, 128 kbps bitrate. These settings balance audio quality with storage efficiency for spoken-word content.

### 6.5 Data Integrity

Monk OS maintains two parallel records of truth: the Room database for structured queries and the append-only JSON Lines event log for immutable audit.

The Room database is the query layer. Nine entities with foreign key relationships, cascade deletes, and indexed columns support efficient retrieval of Events, artifacts, action items, and person relationships. The database is the interface through which the UI and processing pipeline access data.

The event log is the truth trail. Every significant system action — EVENT_CREATED, STATUS_TRANSITION, PATCH_APPLIED, POST_CALL_FINALIZE_FAILED — is appended as a JSON object to `events.jsonl`. Each entry carries a timestamp, event type, referenced entity ID, optional status, and a key-value detail map. The log is append-only: entries are never modified or deleted.

When the log exceeds 10 MB, it is automatically rotated: the current file is compressed via GZIP with a timestamped filename, and a fresh log begins. Rotated logs are preserved for compliance and debugging.

The audit log table in Room provides a parallel, queryable record of system actions with actor (SYSTEM or USER), action, target type and ID, timestamp, and JSON detail. This supports the audit log viewer in Settings, giving the user visibility into every decision the system has made.

Idempotency keys on all sync jobs prevent double-processing. Each sync job carries a unique key derived from the event ID, job type, and timestamp. If a job is re-enqueued (due to retry or reboot), the idempotency key ensures it executes at most once. The SyncManager's `resyncPending()` method, called on service start, picks up incomplete jobs and re-enqueues them without creating duplicates.

---

## 7. Future Vision

### 7.1 Transport Adapters

Monk OS's separation of mapping from transport creates a natural extension point: platform-specific adapters that publish content from Events to external platforms on the user's behalf.

The mechanism is a publishing pipeline with human gates. The user approves an artifact — a summary, a drafted response, a curated excerpt — and the adapter posts it to the appropriate platform. This is not a bot that impersonates the user. It is a controlled publishing system that preserves social and professional presence while the user remains disengaged from the platform's attention mechanisms.

Consider the concrete workflow: a user has a productive phone call, the system transcribes and summarizes it, and the user approves a curated excerpt for publication to a professional network. The adapter formats the excerpt according to the platform's conventions, posts it on schedule, and logs the action to the audit trail. The user never opens the platform. The user never sees a feed. The user's professional presence is maintained through a pipeline they control.

Transport adapters would support social media platforms, messaging services, email, and professional networks. Each adapter implements a common interface: receive an approved artifact, format it for the target platform, post it, and log the result. Adapters are disposable — when a platform changes its API or the user leaves a service, the adapter is dropped without affecting the Event history or person graph. This is the architectural expression of "retiring from the internet" — presence maintained by controlled pipelines rather than habitual engagement.

### 7.2 Skills-System Extensibility

The current processing pipeline — transcribe, summarize, extract action items — is fixed at build time. Adding a new processing capability requires writing and deploying code. A skills system, inspired by approaches in other extensible computing platforms, would allow processing pipeline plugins defined as declarative files loaded on demand.

A skill file would specify: what input it expects (transcript text, audio reference, event metadata), what output it produces (new artifact type, extracted entities, modified tags), and what processing it performs (API call to a model endpoint, deterministic transformation, or hybrid). Skills could implement new summarization strategies, entity extractors for specific domains (legal, medical, technical), export formatters, or semantic search indexers.

The Event-first architecture provides a strong foundation for this extensibility. Every skill operates on Events and produces artifacts or metadata that attach to Events. The Policy Gate applies equally to skill outputs, maintaining the trust boundary regardless of what processing generated the output.

### 7.3 Federated Identity

Monk OS's person graph — people, relationships, privacy tiers, communication history — is currently local to the device and its paired VPS. But the data model is inherently portable: a person is an identity with metadata, not a platform-specific profile.

Federated identity protocols could allow the person graph to interoperate across devices, instances, and even other systems that adopt compatible identity primitives. Your contacts, relationships, and privacy tiers would become an encrypted, portable dataset that moves with you rather than being locked to a single device or service.

The privacy tier system provides a natural access control model for federation: INTIMATE contacts are never shared, PROFESSIONAL contacts may be shared with explicit consent, and PUBLIC contacts can be discovered by other instances. The encryption architecture ensures that federated data remains encrypted in transit and at rest across all participating nodes.

### 7.4 Multi-Device Convergence

The split-brain model — phone as working set, VPS as durable memory — scales naturally to additional devices. Each device is a different shell on the same Event history, optimized for its form factor and use case.

A tablet becomes the consumption and review device: a larger screen for reading transcripts in full, reviewing summaries side-by-side with action items, and approving queued Events that require human judgment. The tablet is where the user might spend longer periods engaging with their structured memory — reading through a week's conversations, identifying patterns in commitments, reviewing relationship context before an important meeting.

A watch becomes the notification surface: haptic alerts for new READY events and upcoming commitment deadlines, with enough display to show the commitment text and the person involved. The watch does not become another attention hijacker because it only surfaces items that have already passed through the Policy Gate — no raw notifications, no feeds, only verified commitments.

A desktop becomes the review station: keyboard-driven full-text search across the entire Event history, bulk approval workflows for accumulated REQUIRES_APPROVAL items, and export capabilities for professional use — generating meeting notes from call transcripts, preparing follow-up emails from action items, compiling relationship summaries before client meetings.

Each device maintains its own encrypted local cache synchronized with the VPS. The Event log, person graph, and artifact database replicate across devices with conflict resolution based on timestamp ordering and the append-only log as the arbiter of truth. No device is the master; the VPS is the coordination point. A device can be lost or destroyed without losing the Event history, because the encrypted durable copy lives on user-controlled infrastructure.

---

## 8. Evaluation

### 8.1 What This Architecture Gets Right

The Event-first model eliminates application silos by construction. There is no "call log app" that knows about calls but not tasks, no "task manager" that knows about tasks but not people, no "contacts app" that knows about people but not conversations. Everything is an Event, and Events carry the full context: who was involved, what was said, what was committed, and what was done about it.

The Policy Gate provides an auditable trust boundary between AI capability and system integrity. Unlike probabilistic guardrails or RLHF-tuned refusals, the gate's behavior is deterministic and inspectable. A developer can read the five gates, predict their behavior for any input, and verify that behavior against the codebase. This is a meaningful contribution to the problem of AI trust in personal computing.

The encryption architecture makes privacy structural rather than optional. The system cannot store plaintext audio because the code path from recording to storage always passes through encryption. There is no "disable encryption" option because the encryption is not a feature — it is a load-bearing architectural element. Data flows that skip encryption do not compile.

ROM-level control enables genuine attention sovereignty. Removing consumption surfaces at the OS level is qualitatively different from managing them with apps or policies. The user does not resist temptation; the temptation does not exist on the device. This is the strongest possible implementation of the calm technology vision: a computer that does not demand attention because it lacks the surfaces through which attention is demanded.

The split-brain architecture keeps the phone minimal while preserving full processing capability. Heavy compute happens on infrastructure the user controls, not on the battery-constrained mobile device and not on a third party's servers. The phone remains fast, simple, and long-lasting.

### 8.2 Limitations

Call recording is Android's most fragile API surface. Vendor-specific implementations, version-dependent policy changes, and Google's progressive tightening of audio access create genuine uncertainty about long-term recording reliability. The three-tier fallback strategy mitigates this, but does not eliminate it. Users in jurisdictions with one-party consent laws face no legal barrier; users elsewhere must navigate local regulations independently.

The single-device target — Pixel — limits the initial audience. Pixel devices represent a small fraction of the global Android market. Expanding to other devices requires additional device trees, vendor blob management, and QA across hardware variants. This is tractable but resource-intensive.

Removing Google Mobile Services means no Google Play Store, no Google Maps, no Gmail, no Google Photos. Users who depend on these services cannot use Monk OS as their primary device. The mode-separation design (Monk device for commitments, separate device for consumption and Google services) mitigates this, but it requires owning two phones — a real adoption cost.

The VPS dependency for processing means that while the phone can capture offline, it cannot process offline. Transcription, summarization, and action item extraction require server-side compute. Events queue locally and process when connectivity is available, but the user does not see structured artifacts until the sync completes. On-device transcription models are improving and may eventually reduce this dependency.

AI model quality directly affects the usefulness of derived artifacts. Poor transcription produces poor summaries produces poor action items. The Policy Gate catches hallucinated commitments but cannot compensate for fundamentally inaccurate transcription. The system's value is bounded by the quality of the models in its processing pipeline.

The adoption cost is real and should not be understated. Monk OS requires a dedicated Pixel device, a VPS for processing, willingness to forgo Google services on the Monk device, and a lifestyle commitment to the mode-separation model. This is not a casual download. It is an infrastructure decision. The target user is someone who has already concluded that the attention cost of conventional smartphones exceeds their benefit and is willing to invest in an alternative.

### 8.3 Future Work

Several directions would strengthen the architecture:

On-device transcription using models like Whisper running locally on the Pixel's neural processing unit would reduce VPS dependency and enable fully offline Event processing. Current on-device model quality approaches server-side quality for English-language spoken word, and the gap continues to narrow.

Federated sync would enable multi-device operation without routing all data through a central VPS. Devices could sync directly over local networks or through encrypted relay servers, with the append-only event log providing a natural conflict-resolution mechanism.

Semantic search via embeddings on Event history would enable natural-language queries over the accumulated memory — not just keyword matching but conceptual retrieval. "What did I discuss with Sarah about the project timeline?" would search across transcripts, summaries, and action items.

Automated follow-up reminders based on commitment aging would surface action items that have gone unresolved beyond expected timelines, weighted by the confidence of the original extraction and the relationship context of the involved people.

The skills system described in Section 7.2 would make the processing pipeline extensible without recompilation, allowing the community to contribute new processing capabilities while the Policy Gate maintains the trust boundary.

---

## 9. Conclusion

Monk OS inverts mobile computing's default assumption. Instead of the user orbiting apps, apps orbit the user's stable mapping and Event history. The phone stops being a consumption portal and becomes a disciplined instrument: capture reality, structure memory, execute commitments, reclaim attention.

The architecture makes three bets. First, that Events — not apps, not files, not conversations — are the right primitive for personal computing. Everything that matters happened; the system's job is to record, process, and present what happened. Second, that in personal computing, integrity of commitments matters more than flexibility of software. AI should be powerful but gated. A hallucinated obligation is worse than a missing feature. The Policy Gate enforces this preference with five deterministic checks that no amount of AI capability can circumvent. Third, that attention sovereignty must be structural, not behavioral. Digital wellbeing dashboards are apps managing the attention crisis created by other apps. Monk OS removes the crisis by removing its cause: the consumption surfaces that demand attention cease to exist at the ROM level.

These are not incremental improvements to the smartphone. They are a different answer to the question of what a phone is for. The phone is a sensor, a communication endpoint, an identity token, and an attention surface. Monk OS accepts the first three and reclaims the fourth. The attention surface becomes the user's, not the platform's. Memory becomes durable, encrypted, and structured. Commitments become verifiable, traceable to the words that created them. And the internet becomes something you can visit by choice, not something that visits you by default.

The system that correctly partitions what AI controls versus what deterministic rules control — that makes intelligence available without making trust negotiable — will define the next era of personal computing. Monk OS is one attempt at drawing that partition. The Event is the primitive. The Policy Gate is the boundary. The encrypted log is the memory. And the user, finally, is the persistent process around which everything else orbits.

---

## References

1. Kay, A. (1972). "A Personal Computer for Children of All Ages." Proceedings of the ACM Annual Conference.

2. Weiser, M. (1991). "The Computer for the 21st Century." *Scientific American*, 265(3), 94–104.

3. Newport, C. (2019). *Digital Minimalism: Choosing a Focused Life in a Noisy World*. Portfolio/Penguin.

4. Tanenbaum, A. S., & Torvalds, L. (1992). The LINUX is obsolete debate. comp.os.minix Usenet newsgroup.

5. Pike, R., Presotto, D., Dorward, S., Flandrena, B., Thompson, K., Trickey, H., & Winterbottom, P. (1995). "Plan 9 from Bell Labs." *Computing Systems*, 8(3), 221–254.

6. GrapheneOS. (2024). GrapheneOS documentation. https://grapheneos.org

7. CalyxOS. (2024). CalyxOS documentation. https://calyxos.org

8. Matrix OS. (2025). Matrix OS whitepaper. https://matrix-os.com/whitepaper

9. Android Open Source Project. (2024). Android Keystore system documentation. https://developer.android.com/training/articles/keystore

10. Android Open Source Project. (2024). Room persistence library documentation. https://developer.android.com/training/data-storage/room

11. National Institute of Standards and Technology. (2001). FIPS 197: Advanced Encryption Standard (AES). U.S. Department of Commerce.

12. Dworkin, M. (2007). NIST SP 800-38D: Recommendation for Block Cipher Modes of Operation: Galois/Counter Mode (GCM) and GMAC. National Institute of Standards and Technology.
