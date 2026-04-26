# Dripsta Privacy Policy

**Effective Date:** April 26, 2026
**Last Updated:** April 26, 2026

This Privacy Policy describes how Ryon Labs ("Dripsta," "we," "us," or "our") collects, uses, shares, and protects information about you when you use the Dripsta mobile application (the "App") and related services (collectively, the "Service"). By creating an account or using the Service, you agree to the practices described in this Policy. If you do not agree, do not use the Service.

---

## 1. Who We Are

Dripsta is operated by Ryon Labs. We are the data controller for personal information processed in connection with the Service. You can contact us at **info@ryonlabs.com**.

---

## 2. Eligibility & Children's Privacy

Dripsta is intended for users **16 years of age or older**. We do not knowingly collect personal information from children under 16. If you are under 16, do not use the App or submit any information to us. If we learn that we have collected information from a child under 16, we will delete it promptly. Parents or guardians who believe their child has submitted information may contact us at info@ryonlabs.com to request deletion.

In jurisdictions where the digital consent age is higher (e.g., 13–18 in some EU member states), users below the local age of consent must obtain parental or guardian permission before using the Service.

---

## 3. Information We Collect

### 3.1 Information you provide

**Account information:** When you sign up using Sign in with Apple or Google Sign-In, we receive your email address, name (if you allow it), and a unique identifier from the OAuth provider.

**Profile information:** Username, bio, country/city, profile photo (avatar), and optional social media handles (Instagram, TikTok, Snapchat, X). You choose what to share. **You are solely responsible for the accuracy of any social media handles or other identifying information you provide.** We do not verify that the handles you submit belong to you, and we are not responsible for misattribution, impersonation, or links to third-party accounts. Anything in your public profile is visible to other Dripsta users.

**Onboarding preferences:** Gender preference (Men's, Women's, or "I don't label it"), age range, and selected style tags (e.g., Streetwear, Old Money, Y2K). This data tunes AI scoring; we do not sell it.

**User-generated content:** Outfit photos you upload for AI rating, public posts to the Discover feed, likes, reports, referral codes, and any free-text bio or feedback you submit.

**Subscription information:** All payment processing occurs through **Apple** (App Store) or **Google** (Play Store). We **never receive, see, or have access to your payment card details, billing address, or any other financial information you provide to those platforms.** We only receive a transaction identifier and entitlement status from RevenueCat (e.g., active / expired / cancelled), which is used to unlock premium features in the App.

**Communications:** If you contact us at info@ryonlabs.com or report another user's content, we retain those communications for safety, dispute resolution, and compliance purposes.

### 3.2 Information collected automatically

**Device & usage data:** App version, operating system, device model, language, time zone, and crash logs are collected via Sentry to diagnose technical issues.

**Analytics events:** Anonymous in-app actions (e.g., "outfit analyzed," "subscription started") are collected via PostHog. We do not link these events to advertising identifiers and do not use them to track you across other apps or websites.

**Push notification tokens:** When you enable push notifications, we store an Expo Push Token tied to your account so we can deliver notifications.

**Authentication tokens:** Session tokens are stored securely on your device using iOS Keychain or Android Keystore equivalents.

### 3.3 Information from third parties

- **Apple / Google (OAuth providers):** Email, name, and provider user ID when you sign in.
- **RevenueCat:** Subscription status, entitlement, product ID, expiration, and renewal events.

We do not buy or rent personal information from data brokers.

---

## 4. How We Use Information

We use information to:

- Provide and operate the Service (authentication, profile creation, uploading and analyzing outfit photos, displaying scores).
- Generate AI-powered style feedback and ratings using third-party AI providers (see Section 5).
- Power social features (Discover feed, weekly Leaderboard, public profile).
- Manage subscriptions, credits, and referral bonuses.
- Send transactional and engagement push notifications (e.g., weekly leaderboard reset, score result ready).
- Detect, prevent, and address fraud, abuse, security issues, and Terms of Service violations.
- Improve the App's quality through diagnostic logs and aggregated analytics.
- Comply with legal obligations and respond to lawful government requests.
- Communicate with you about updates, support requests, and policy changes.

We do **not** use your data to:

- Sell, rent, or trade your personal information to third parties for advertising.
- Train third-party AI models on your photos. (See Section 6 for details on how AI providers process your photos.)
- Make automated decisions that produce legal effects on you. AI scores are a styling and entertainment feature only.

---

## 5. Sharing With Third Parties

We share information only with the service providers required to operate Dripsta. Each party processes data under a written agreement, on our instructions, and only to the extent necessary.

| Provider | Purpose | Data shared |
|---|---|---|
| **Supabase** | Backend, database, auth, file storage, edge functions | All account, profile, analysis, and storage data |
| **AI providers** (which may include OpenAI, Google, Anthropic, or others) | AI outfit rating | The outfit photo and the occasion you select. Photos are sent over HTTPS to the AI provider's API. |
| **RevenueCat** | Subscription verification and credit management | Apple/Google subscription identifiers and entitlement status |
| **Apple** | Sign in with Apple, In-App Purchases, Push Notifications | OAuth identifier, IAP transaction data, push token |
| **Google** | Google Sign-In, Google Play services | OAuth identifier, Play Store transaction data |
| **Expo** | Push notification delivery, OTA updates | Push tokens, app version |
| **PostHog** | Anonymous product analytics | Anonymous event data tied to a per-install identifier |
| **Sentry** | Crash and error reporting | Error stack traces, device metadata, anonymous user identifier |

We may change AI providers from time to time as model capabilities evolve. We will continue to apply the protections described in this Policy regardless of which provider is used.

We may also share information when required by law, in response to a lawful request from a government authority, to enforce our Terms of Service, to protect our rights or property, or in connection with a corporate transaction (merger, acquisition, sale of assets) where the recipient agrees to honor this Policy.

We do **not** share your personal information with advertisers, data brokers, or marketers.

---

## 6. AI Processing & Outfit Photos

When you submit an outfit photo for rating:

1. The photo is uploaded to our cloud storage under your unique user ID.
2. A request is sent to a third-party AI provider's API containing the photo and your selected occasion.
3. The provider returns a structured response with category scores, an overall score, feedback text, and (where applicable) safety rejection codes (e.g., for non-clothing items, costumes, multiple people, or explicit content).
4. We store the analysis result associated with your account.

**AI provider data handling.** Reputable AI providers (such as OpenAI, Google, or Anthropic) state in their published API policies that API submissions are not used to train their models by default, and that retention is limited (typically up to 30 days for abuse monitoring). We rely on the provider's published policies for handling of this data and recommend you review the policy of the relevant provider. We will update this Policy if a material change in our AI providers requires it.

**You retain ownership of your photos.** You grant us a worldwide, non-exclusive, royalty-free license to host, process, transmit, display, and analyze your photos solely to provide the Service. If you delete a photo or your account, we will delete the photo from our storage bucket (subject to short-term backups).

**On-device processing.** On iOS, we use Apple Vision via our `person-segmentation` native module to generate a coral outline overlay during the analysis loading screen. This processing happens entirely on your device; no biometric or body data leaves your device through this feature.

---

## 7. Public Content & User-Generated Content

When you choose to publish a fit publicly within the App, your outfit photo, score, country, and username become publicly visible:

- In the **Discover feed** to all logged-in users.
- On the **weekly Leaderboard** if your score is among the top performers.
- On your **public profile** at `/profile/{username}`.

Anything you make public may be screenshotted, copied, or shared by others outside the App. Do not publish any content you would not want others to see.

You can revert public content to private at any time using the in-app option provided on the result screen. We will remove the post from the active feed and leaderboard, but cached copies on user devices may persist.

**Your responsibility for content.** You are solely responsible for any content (photos, captions, bio, social handles, reports, or other material) you submit, upload, or publish through the Service. By submitting content, you represent and warrant that (a) you own or have the necessary rights to submit it, (b) it does not violate any third party's rights or any law, and (c) it complies with our content rules below.

**Reporting and Blocking.** Users can report individual posts and block other users from within the App. We act on reports within 24 hours during business days. Submissions to our reporting system are reviewed by our moderation team and AI-based content classifiers.

**Our right to remove content and accounts.** We reserve the right, at our sole discretion and without prior notice, to:

- Remove, refuse, or restrict access to any content we determine, in our sole judgment, to violate this Policy, our Terms of Service, applicable law, or community standards.
- Suspend, restrict, or permanently terminate any user's access to the Service for any reason, including (without limitation) repeated or severe violations, abusive behavior, fraud, attempts to circumvent moderation or anti-abuse systems, or any conduct that we determine harms other users, our reputation, or the integrity of the Service.

We are under no obligation to monitor content but may do so to enforce these rules.

**Prohibited content.** You agree not to upload outfit photos containing nudity, sexually explicit content, hate symbols, violent imagery, content involving minors in inappropriate contexts, harassment, deceptive impersonation, or content that infringes another party's rights. Our AI rejection system filters many of these but is not perfect; you remain responsible for what you submit.

**Demonstration content.** During launch, testing, and ongoing product development, the Discover feed, Leaderboard, and other social surfaces may include sample posts, demonstration profiles, or test accounts placed by Dripsta to illustrate features and provide a populated experience. Such content is identified as belonging to platform-managed accounts at our discretion and does not represent the activity of real, independent end users.

---

## 8. Push Notifications & Communications

If you enable push notifications, we may send:

- Transactional notifications (your rating is ready, your weekly leaderboard rank).
- Engagement notifications (a new fit is trending, you climbed the leaderboard).

You can disable push notifications at any time in your device's Settings. We do not send marketing emails without your explicit consent.

---

## 9. Cookies, Tracking & ATT (App Tracking Transparency)

The Service does not use the iOS Advertising Identifier (IDFA) for cross-app tracking. We do not display third-party advertising. We declare in App Store Connect that **data is not used to track you** in the sense defined by Apple's App Tracking Transparency framework. We do not set tracking cookies.

PostHog uses an anonymous per-install distinct ID stored locally; this is not linked to your real identity beyond your account login session and is not used to track you across other companies' apps or sites.

**California users (CCPA / CPRA).** We do **not** "sell" or "share" personal information for cross-context behavioral advertising as those terms are defined under the California Consumer Privacy Act and California Privacy Rights Act. We do not engage in targeted advertising, profiling, or the sale of personal data to third parties. California residents may exercise their rights under the CCPA/CPRA (including the right to know, delete, correct, and limit the use of sensitive personal information) by emailing **info@ryonlabs.com**.

---

## 10. Data Retention

We retain personal information only as long as necessary to provide the Service and comply with legal obligations:

- **Account data**: For the lifetime of your account, plus up to 30 days after deletion in case of recovery requests or operational backups.
- **Outfit photos and analyses**: Until you delete them or your account.
- **Logs and analytics**: Up to 90 days for diagnostic and product analytics purposes.
- **Subscription records and financial data**: Up to 7 years for tax and accounting compliance, in accordance with applicable law.
- **Reports and moderation actions**: Indefinitely, in anonymized form, to maintain a record of policy enforcement.

---

## 11. Account Deletion & Your Rights

You can delete your account at any time from **Settings → Delete Account**. Account deletion:

- Soft-deletes your profile (clears name, username, bio, avatar, social handles, and city).
- Permanently deletes your outfit analyses, photos in our storage, push tokens, preferences, style profile, leaderboard entries, and resets your credits to zero.
- Sets your subscription tier to "free" in our records. **Your active Apple or Google subscription is NOT cancelled by deleting your Dripsta account.** You must cancel subscriptions separately at:
  - **Apple:** Settings → [your name] → Subscriptions
  - **Google Play:** Play Store → Profile → Payments & subscriptions → Subscriptions

If you sign back in with the same Apple or Google account after deletion, your subscription state may be restored via "Restore Purchases."

In addition to deletion, depending on your jurisdiction (EEA/UK under GDPR, California under CCPA/CPRA, Brazil under LGPD, etc.), you may have rights to:

- **Access** the personal information we hold about you.
- **Rectify** inaccurate information.
- **Object to** or **restrict** certain processing.
- **Port** your data to another service.
- **Withdraw consent** (where consent is the basis of processing).
- **Lodge a complaint** with your local data protection authority.

To exercise any of these rights, email **info@ryonlabs.com** with the subject "Privacy Request." We will respond within the timeframe required by applicable law (typically 30 days).

---

## 12. International Data Transfers

The Service is operated from the United States. By using the Service, you understand that your information will be transferred to and processed in the United States and other countries where our service providers operate, which may have different data protection laws than your home country. Where required, we implement Standard Contractual Clauses or other lawful transfer mechanisms with our processors.

---

## 13. Data Security

We use industry-standard security measures:

- TLS encryption for all data in transit.
- Encryption at rest for stored photos and database records.
- Row-Level Security (RLS) policies to ensure users can only read or modify their own data.
- Secure storage of authentication tokens via iOS Keychain and Android Keystore.
- Database-backed rate limiting on sensitive endpoints to mitigate abuse.
- Sentry-based monitoring for security and stability incidents.

No method of transmission or storage is 100% secure. We cannot guarantee absolute security and disclaim liability to the fullest extent permitted by law for security incidents beyond our reasonable control.

---

## 14. Disclaimer of Warranties

THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING (BUT NOT LIMITED TO) WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR UNINTERRUPTED OPERATION.

**AI score and feedback disclaimer.** AI-generated outfit ratings and feedback are produced by automated language models for **styling and entertainment purposes**. Results are inherently subjective and may contain errors. The Service is not a substitute for personal styling advice from a qualified professional, and you should not rely on AI feedback for any consequential decision.

We do not guarantee:

- The accuracy, completeness, or reliability of any AI rating or feedback.
- That the Service will be free from interruptions, defects, or security vulnerabilities.
- That any specific outcome (visibility, leaderboard rank, or user reaction) will result from your use of the Service.

---

## 15. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL RYON LABS, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING (BUT NOT LIMITED TO) LOSS OF PROFITS, DATA, GOODWILL, REPUTATION, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF (OR INABILITY TO USE) THE SERVICE — WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY — EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

OUR TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THIS POLICY OR THE SERVICE IS LIMITED TO THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR (B) USD $50.

Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. In such jurisdictions, our liability shall be limited to the greatest extent permitted by law.

---

## 16. Indemnification

You agree to defend, indemnify, and hold harmless Ryon Labs, its officers, directors, employees, agents, affiliates, and licensors from and against any claims, liabilities, damages, losses, or expenses (including reasonable attorneys' fees) arising out of or relating to:

- Your access to or use of the Service.
- Content you upload, publish, or share through the Service.
- Your violation of this Policy or our Terms of Service.
- Your violation of any law or the rights of any third party.

---

## 17. Wellbeing Notice

Dripsta rates **outfits, not people**. Our AI is configured to comment on clothing fit, color harmony, and style composition only — it does not score or comment on your body, weight, skin, attractiveness, or identity. If outfit-rating apps may negatively affect your wellbeing, please consider whether the App is right for you.

---

## 18. Subscriptions, Refunds & In-App Purchases

Subscriptions are managed by **Apple** (App Store) or **Google** (Play Store). Pricing, billing cycles, and renewal terms are presented at the time of purchase. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.

Refunds are governed by the platform from which you purchased:

- **Apple:** https://reportaproblem.apple.com
- **Google:** https://play.google.com/store/account

We do not issue refunds directly. We do not control platform refund decisions.

---

## 19. Service Modifications & Termination

We may modify, suspend, or discontinue the Service (or any feature) at any time, with or without notice. We may terminate or suspend your account if you violate this Policy or our Terms of Service, abuse the Service, or engage in conduct that harms other users or our reputation.

Upon termination, the rights granted to you to use the Service cease immediately. Sections that by their nature should survive termination (including disclaimer of warranties, limitation of liability, indemnification, governing law, and dispute resolution) will continue to apply.

---

## 20. Changes to This Policy

We may update this Policy from time to time. The "Last Updated" date at the top reflects the most recent revision. If we make material changes, we will notify you via the App or by email (if we have one on file). Your continued use of the Service after the updated Policy takes effect constitutes acceptance of the changes.

---

## 21. Governing Law & Dispute Resolution

This Policy is governed by the laws of the **State of Wyoming, United States**, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to the Service or this Policy shall be resolved exclusively in the state or federal courts located in Wyoming, and you consent to personal jurisdiction in those courts.

If any provision of this Policy is held invalid or unenforceable, the remaining provisions remain in full force and effect.

---

## 22. Contact Us

For privacy questions, data requests, or to report a concern, contact:

**Ryon Labs**
info@ryonlabs.com

We aim to respond to privacy inquiries within five business days and to formal data subject requests within the timeframe required by applicable law.

---

*This Privacy Policy is provided in English. Translations may be available for convenience; in the event of a conflict, the English version controls.*
