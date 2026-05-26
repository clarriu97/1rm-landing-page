# Agent Instructions: 1RM Landing Page

## Writing Style

### Capitalization in Headings
Use **sentence case** for all headings and subheadings. Only the first word and proper nouns should be capitalized.

**Correct:**
- "Privacy policy"
- "Terms of service"
- "How it works"
- "No access to sensitive device features"

**Incorrect:**
- "Privacy Policy" (Title Case)
- "Terms of Service" (Title Case)
- "How It Works" (Title Case)
- "No Access To Sensitive Device Features" (Title Case)

### Capitalization After Colons
Do not capitalize the first word after a colon within a sentence, unless it is a proper noun.

**Correct:**
- "Location / GPS: we never track where you are."
- "Camera: we never access your camera or photos."

**Incorrect:**
- "Location / GPS: We never track where you are."
- "Camera: We never access your camera or photos."

### Punctuation
Avoid using the **em-dash** (`—`) symbol. It is a strong indicator of LLM-generated text.

**Correct alternatives:**
- Use a period to start a new sentence.
- Use a comma or semicolon for a brief pause.
- Restructure the sentence to avoid the need for an em-dash entirely.

**Correct:**
- "Enter weight and reps to get instant 1RM estimates."
- "The app works offline; it does not require a network connection."

**Incorrect:**
- "Enter weight and reps — get instant 1RM estimates."
- "The app works offline — it does not require a network connection."

## Legal Content Guidelines

When writing privacy policies or terms of service:
- Be clear and direct. Avoid excessive legalese that confuses users.
- Do not make promises you cannot keep (e.g., "military-grade encryption" unless true).
- Clearly state what data is collected, how it is used, and where it is stored.
- Include standard disclaimers: no medical advice, "as is" provision, limitation of liability.
- Always provide a contact email for questions.
- Update the "Last updated" date when making changes.

## Build & Deploy

- Build command: `pnpm build`
- Deploy command (Cloudflare Pages): `npx wrangler pages deploy dist`
- Deploy command (Cloudflare Workers): `npx wrangler deploy` (requires `wrangler.toml`)
