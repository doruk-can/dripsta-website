import React from 'react';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="display text-4xl md:text-5xl mb-2">Privacy Policy</h1>
      <p className="text-sm text-drip-textTertiary mb-12">
        Effective Date: April 29, 2026 · Last Updated: April 29, 2026
      </p>

      <div className="space-y-10 text-drip-textSecondary leading-relaxed">
        <p>
          This Privacy Policy describes how Ryon Labs ("Dripsta," "we," "us," or "our") collects,
          uses, shares, and protects information about you when you use the Dripsta mobile
          application (the "App") and related services (collectively, the "Service"). By creating
          an account or using the Service, you agree to the practices described in this Policy. If
          you do not agree, do not use the Service.
        </p>

        <Section title="1. Who We Are">
          <p>
            Dripsta is operated by Ryon Labs. We are the data controller for personal information
            processed in connection with the Service. You can contact us at{' '}
            <Email />.
          </p>
        </Section>

        <Section title="2. Eligibility & Children's Privacy">
          <p>
            Dripsta is intended for users <Strong>16 years of age or older</Strong>. We do not
            knowingly collect personal information from children under 16. If you are under 16, do
            not use the App or submit any information to us. If we learn that we have collected
            information from a child under 16, we will delete it promptly. Parents or guardians who
            believe their child has submitted information may contact us at <Email /> to request
            deletion.
          </p>
          <p className="mt-4">
            In jurisdictions where the digital consent age is higher (e.g., 13–18 in some EU member
            states), users below the local age of consent must obtain parental or guardian
            permission before using the Service.
          </p>
        </Section>

        <Section title="3. Information We Collect">
          <SubTitle>3.1 Information you provide</SubTitle>
          <p>
            <Strong>Account information:</Strong> When you sign up using Sign in with Apple or
            Google Sign-In, we receive your email address, name (if you allow it), and a unique
            identifier from the OAuth provider.
          </p>
          <p>
            <Strong>Profile information:</Strong> Username, bio, country/city, profile photo
            (avatar), and optional social media handles (Instagram, TikTok, Snapchat, X). You
            choose what to share. <Strong>You are solely responsible for the accuracy of any
            social media handles or other identifying information you provide.</Strong> We do not
            verify that the handles you submit belong to you, and we are not responsible for
            misattribution, impersonation, or links to third-party accounts. Anything in your
            public profile is visible to other Dripsta users.
          </p>
          <p>
            <Strong>Onboarding preferences:</Strong> Gender preference (Men's, Women's, or "I don't
            label it"), age range, and selected style tags (e.g., Streetwear, Old Money, Y2K). This
            data tunes AI scoring; we do not sell it.
          </p>
          <p>
            <Strong>User-generated content:</Strong> Outfit photos you upload for AI rating, public
            posts to the Discover feed, likes, reports, referral codes, and any free-text bio or
            feedback you submit.
          </p>
          <p>
            <Strong>Subscription information:</Strong> All payment processing occurs through{' '}
            <Strong>Apple</Strong> (App Store) or <Strong>Google</Strong> (Play Store). We{' '}
            <Strong>
              never receive, see, or have access to your payment card details, billing address, or
              any other financial information you provide to those platforms.
            </Strong>{' '}
            We only receive a transaction identifier and entitlement status from RevenueCat (e.g.,
            active / expired / cancelled), which is used to unlock premium features in the App.
          </p>
          <p>
            <Strong>Communications:</Strong> If you contact us at <Email /> or report another
            user's content, we retain those communications for safety, dispute resolution, and
            compliance purposes.
          </p>

          <SubTitle>3.2 Information collected automatically</SubTitle>
          <p>
            <Strong>Device & usage data:</Strong> App version, operating system, device model,
            language, time zone, and crash logs are collected via Sentry to diagnose technical
            issues.
          </p>
          <p>
            <Strong>Analytics events:</Strong> Anonymous in-app actions (e.g., "outfit analyzed,"
            "subscription started") are collected via PostHog. We do not link these events to
            advertising identifiers and do not use them to track you across other apps or websites.
          </p>
          <p>
            <Strong>Push notification tokens:</Strong> When you enable push notifications, we store
            an Expo Push Token tied to your account so we can deliver notifications.
          </p>
          <p>
            <Strong>Authentication tokens:</Strong> Session tokens are stored securely on your
            device using iOS Keychain or Android Keystore equivalents.
          </p>

          <SubTitle>3.3 Information from third parties</SubTitle>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Strong>Apple / Google (OAuth providers):</Strong> Email, name, and provider user ID
              when you sign in.
            </li>
            <li>
              <Strong>RevenueCat:</Strong> Subscription status, entitlement, product ID,
              expiration, and renewal events.
            </li>
          </ul>
          <p>We do not buy or rent personal information from data brokers.</p>
        </Section>

        <Section title="4. How We Use Information">
          <p>We use information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Provide and operate the Service (authentication, profile creation, uploading and
              analyzing outfit photos, displaying scores).
            </li>
            <li>
              Generate AI-powered style feedback and ratings using third-party AI providers (see
              Section 5).
            </li>
            <li>Power social features (Discover feed, weekly Leaderboard, public profile).</li>
            <li>Manage subscriptions, credits, and referral bonuses.</li>
            <li>
              Send transactional and engagement push notifications (e.g., weekly leaderboard reset,
              score result ready).
            </li>
            <li>
              Detect, prevent, and address fraud, abuse, security issues, and Terms of Service
              violations.
            </li>
            <li>Improve the App's quality through diagnostic logs and aggregated analytics.</li>
            <li>Comply with legal obligations and respond to lawful government requests.</li>
            <li>Communicate with you about updates, support requests, and policy changes.</li>
          </ul>
          <p className="mt-4">
            We do <Strong>not</Strong> use your data to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sell, rent, or trade your personal information to third parties for advertising.</li>
            <li>
              Train third-party AI models on your photos. (See Section 6 for details on how AI
              providers process your photos.)
            </li>
            <li>
              Make automated decisions that produce legal effects on you. AI scores are a styling
              and entertainment feature only.
            </li>
          </ul>
        </Section>

        <Section title="5. Sharing With Third Parties">
          <p>
            We share information only with the service providers required to operate Dripsta. Each
            party processes data under a written agreement, on our instructions, and only to the
            extent necessary.
          </p>

          <div className="overflow-x-auto -mx-4 md:mx-0">
            <table className="min-w-full text-sm border border-drip-border/40 rounded-xl overflow-hidden">
              <thead className="bg-drip-elevated text-drip-text">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Provider</th>
                  <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                  <th className="px-4 py-3 text-left font-semibold">Data shared</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-drip-border/30">
                <Row provider="Supabase" purpose="Backend, database, auth, file storage, edge functions" data="All account, profile, analysis, and storage data" />
                <Row
                  provider="AI providers (which may include OpenAI, Google, Anthropic, or others)"
                  purpose="AI outfit rating"
                  data="The outfit photo and the occasion you select. Photos are sent over HTTPS to the AI provider's API."
                />
                <Row
                  provider="RevenueCat"
                  purpose="Subscription verification and credit management"
                  data="Apple/Google subscription identifiers and entitlement status"
                />
                <Row
                  provider="Apple"
                  purpose="Sign in with Apple, In-App Purchases, Push Notifications"
                  data="OAuth identifier, IAP transaction data, push token"
                />
                <Row
                  provider="Google"
                  purpose="Google Sign-In, Google Play services"
                  data="OAuth identifier, Play Store transaction data"
                />
                <Row
                  provider="Expo"
                  purpose="Push notification delivery, OTA updates"
                  data="Push tokens, app version"
                />
                <Row
                  provider="PostHog"
                  purpose="Anonymous product analytics"
                  data="Anonymous event data tied to a per-install identifier"
                />
                <Row
                  provider="Sentry"
                  purpose="Crash and error reporting"
                  data="Error stack traces, device metadata, anonymous user identifier"
                />
              </tbody>
            </table>
          </div>

          <p className="mt-4">
            We may change AI providers from time to time as model capabilities evolve. We will
            continue to apply the protections described in this Policy regardless of which provider
            is used.
          </p>
          <p>
            <Strong>Third-party safeguards.</Strong> We select third-party providers — including
            AI processing partners — whose publicly available terms, API policies, and security
            practices align with the protections described in this Privacy Policy, including
            encryption of data in transit, purpose-limited use, default opt-out from model
            training, and limited retention windows.{' '}
            <Strong>
              We do not operate, control, or supervise any third-party provider's internal systems
              and accept no liability and offer no warranty regarding their conduct.
            </Strong>{' '}
            For complete details on any specific provider's data handling, please consult that
            provider's own published privacy policy and API terms; the providers we currently rely
            on are listed in the table above.
          </p>
          <p>
            We may also share information when required by law, in response to a lawful request
            from a government authority, to enforce our Terms of Service, to protect our rights or
            property, or in connection with a corporate transaction (merger, acquisition, sale of
            assets) where the recipient agrees to honor this Policy.
          </p>
          <p>
            We do <Strong>not</Strong> share your personal information with advertisers, data
            brokers, or marketers.
          </p>
        </Section>

        <Section title="6. AI Processing & Outfit Photos">
          <p>When you submit an outfit photo for rating:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>The photo is uploaded to our cloud storage under your unique user ID.</li>
            <li>
              A request is sent to a third-party AI provider's API containing the photo and your
              selected occasion.
            </li>
            <li>
              The provider returns a structured response with category scores, an overall score,
              feedback text, and (where applicable) safety rejection codes (e.g., for non-clothing
              items, costumes, multiple people, or explicit content).
            </li>
            <li>We store the analysis result associated with your account.</li>
          </ol>
          <p>
            <Strong>AI provider data handling.</Strong> Reputable AI providers (such as OpenAI,
            Google, or Anthropic) state in their published API policies that API submissions are
            not used to train their models by default, and that retention is limited (typically up
            to 30 days for abuse monitoring). We rely on the provider's published policies for
            handling of this data and recommend you review the policy of the relevant provider. We
            will update this Policy if a material change in our AI providers requires it.
          </p>
          <p>
            <Strong>You retain ownership of your photos.</Strong> You grant us a worldwide,
            non-exclusive, royalty-free license to host, process, transmit, display, and analyze
            your photos solely to provide the Service. If you delete a photo or your account, we
            will delete the photo from our storage bucket (subject to short-term backups).
          </p>
          <p>
            <Strong>On-device processing.</Strong> On iOS, we use the{' '}
            <code className="bg-drip-elevated px-1.5 py-0.5 rounded text-drip-text text-xs">
              VNGeneratePersonSegmentationRequest
            </code>{' '}
            API from Apple Vision to generate a binary silhouette mask during the analysis loading
            screen. This mask is rendered as a decorative coral outline animation that visually
            communicates "processing in progress" to the user. The mask is computed entirely
            on-device, held only in memory during the loading screen, and discarded immediately
            afterward. It is <Strong>never transmitted, stored, or shared.</Strong>
          </p>
          <p>
            <Strong>No face data.</Strong> Dripsta does <Strong>not</Strong> collect, process,
            store, or transmit face data. Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We do <Strong>not</Strong> use Face ID, ARKit face tracking,{' '}
              <code className="bg-drip-elevated px-1.5 py-0.5 rounded text-drip-text text-xs">
                VNDetectFaceLandmarksRequest
              </code>
              ,{' '}
              <code className="bg-drip-elevated px-1.5 py-0.5 rounded text-drip-text text-xs">
                VNDetectFaceRectanglesRequest
              </code>
              ,{' '}
              <code className="bg-drip-elevated px-1.5 py-0.5 rounded text-drip-text text-xs">
                VNDetectFaceCaptureQualityRequest
              </code>
              , or any other facial detection, face recognition, or facial-feature API.
            </li>
            <li>
              We do <Strong>not</Strong> extract, derive, or infer facial features, biometric
              identifiers, age estimates, gender estimates, expressions, emotions, or any other
              face-specific data from any image.
            </li>
            <li>
              <code className="bg-drip-elevated px-1.5 py-0.5 rounded text-drip-text text-xs">
                VNGeneratePersonSegmentationRequest
              </code>{' '}
              produces only a binary mask of where a human silhouette appears in an image; it does
              not identify individuals or extract facial structure.
            </li>
            <li>
              The user's outfit photo (which may incidentally include their face) is sent to a
              third-party AI provider solely to evaluate <Strong>clothing</Strong>. The AI is
              configured by system prompt to evaluate fit, color harmony, occasion
              appropriateness, and trend relevance only, and is explicitly instructed not to
              comment on the user's body, face, weight, skin, attractiveness, or identity.
            </li>
          </ul>
        </Section>

        <Section title="7. Public Content & User-Generated Content">
          <p>
            When you choose to publish a fit publicly within the App, your outfit photo, score,
            country, and username become publicly visible:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              In the <Strong>Discover feed</Strong> to all logged-in users.
            </li>
            <li>
              On the <Strong>weekly Leaderboard</Strong> if your score is among the top performers.
            </li>
            <li>
              On your <Strong>public profile</Strong> at{' '}
              <code className="bg-drip-elevated px-1.5 py-0.5 rounded text-drip-text text-xs">
                /profile/{'{username}'}
              </code>
              .
            </li>
          </ul>
          <p>
            Anything you make public may be screenshotted, copied, or shared by others outside the
            App. Do not publish any content you would not want others to see.
          </p>
          <p>
            You can revert public content to private at any time using the in-app option provided
            on the result screen. We will remove the post from the active feed and leaderboard, but
            cached copies on user devices may persist.
          </p>
          <p>
            <Strong>Your responsibility for content.</Strong> You are solely responsible for any
            content (photos, captions, bio, social handles, reports, or other material) you submit,
            upload, or publish through the Service. By submitting content, you represent and
            warrant that (a) you own or have the necessary rights to submit it, (b) it does not
            violate any third party's rights or any law, and (c) it complies with our content rules
            below.
          </p>
          <p>
            <Strong>Reporting and Blocking.</Strong> Users can report individual posts and block
            other users from within the App. We act on reports within 24 hours during business
            days. Submissions to our reporting system are reviewed by our moderation team and
            AI-based content classifiers.
          </p>
          <p>
            <Strong>Our right to remove content and accounts.</Strong> We reserve the right, at our
            sole discretion and without prior notice, to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Remove, refuse, or restrict access to any content we determine, in our sole judgment,
              to violate this Policy, our Terms of Service, applicable law, or community standards.
            </li>
            <li>
              Suspend, restrict, or permanently terminate any user's access to the Service for any
              reason, including (without limitation) repeated or severe violations, abusive
              behavior, fraud, attempts to circumvent moderation or anti-abuse systems, or any
              conduct that we determine harms other users, our reputation, or the integrity of the
              Service.
            </li>
          </ul>
          <p>
            We are under no obligation to monitor content but may do so to enforce these rules.
          </p>
          <p>
            <Strong>Prohibited content.</Strong> You agree not to upload outfit photos containing
            nudity, sexually explicit content, hate symbols, violent imagery, content involving
            minors in inappropriate contexts, harassment, deceptive impersonation, or content that
            infringes another party's rights. Our AI rejection system filters many of these but is
            not perfect; you remain responsible for what you submit.
          </p>
          <p>
            <Strong>Demonstration content.</Strong> During launch, testing, and ongoing product
            development, the Discover feed, Leaderboard, and other social surfaces may include
            sample posts, demonstration profiles, or test accounts placed by Dripsta to illustrate
            features and provide a populated experience. Such content is identified as belonging to
            platform-managed accounts at our discretion and does not represent the activity of
            real, independent end users.
          </p>
        </Section>

        <Section title="8. Push Notifications & Communications">
          <p>If you enable push notifications, we may send:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transactional notifications (your rating is ready, your weekly leaderboard rank).</li>
            <li>
              Engagement notifications (a new fit is trending, you climbed the leaderboard).
            </li>
          </ul>
          <p>
            You can disable push notifications at any time in your device's Settings. We do not
            send marketing emails without your explicit consent.
          </p>
        </Section>

        <Section title="9. Cookies, Tracking & ATT (App Tracking Transparency)">
          <p>
            The Service does not use the iOS Advertising Identifier (IDFA) for cross-app tracking.
            We do not display third-party advertising. We declare in App Store Connect that{' '}
            <Strong>data is not used to track you</Strong> in the sense defined by Apple's App
            Tracking Transparency framework. We do not set tracking cookies.
          </p>
          <p>
            PostHog uses an anonymous per-install distinct ID stored locally; this is not linked to
            your real identity beyond your account login session and is not used to track you
            across other companies' apps or sites.
          </p>
          <p>
            <Strong>California users (CCPA / CPRA).</Strong> We do <Strong>not</Strong> "sell" or
            "share" personal information for cross-context behavioral advertising as those terms
            are defined under the California Consumer Privacy Act and California Privacy Rights
            Act. We do not engage in targeted advertising, profiling, or the sale of personal data
            to third parties. California residents may exercise their rights under the CCPA/CPRA
            (including the right to know, delete, correct, and limit the use of sensitive personal
            information) by emailing <Email />.
          </p>
        </Section>

        <Section title="10. Data Retention">
          <p>
            We retain personal information only as long as necessary to provide the Service and
            comply with legal obligations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Strong>Account data</Strong>: For the lifetime of your account, plus up to 30 days
              after deletion in case of recovery requests or operational backups.
            </li>
            <li>
              <Strong>Outfit photos and analyses</Strong>: Until you delete them or your account.
            </li>
            <li>
              <Strong>Logs and analytics</Strong>: Up to 90 days for diagnostic and product
              analytics purposes.
            </li>
            <li>
              <Strong>Subscription records and financial data</Strong>: Up to 7 years for tax and
              accounting compliance, in accordance with applicable law.
            </li>
            <li>
              <Strong>Reports and moderation actions</Strong>: Indefinitely, in anonymized form, to
              maintain a record of policy enforcement.
            </li>
          </ul>
        </Section>

        <Section title="11. Account Deletion & Your Rights">
          <p>
            You can delete your account at any time from{' '}
            <Strong>Settings → Delete Account</Strong>. Account deletion:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Soft-deletes your profile (clears name, username, bio, avatar, social handles, and
              city).
            </li>
            <li>
              Permanently deletes your outfit analyses, photos in our storage, push tokens,
              preferences, style profile, leaderboard entries, and resets your credits to zero.
            </li>
            <li>
              Sets your subscription tier to "free" in our records.{' '}
              <Strong>
                Your active Apple or Google subscription is NOT cancelled by deleting your Dripsta
                account.
              </Strong>{' '}
              You must cancel subscriptions separately at:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <Strong>Apple:</Strong> Settings → [your name] → Subscriptions
                </li>
                <li>
                  <Strong>Google Play:</Strong> Play Store → Profile → Payments & subscriptions →
                  Subscriptions
                </li>
              </ul>
            </li>
          </ul>
          <p>
            If you sign back in with the same Apple or Google account after deletion, your
            subscription state may be restored via "Restore Purchases."
          </p>
          <p>
            In addition to deletion, depending on your jurisdiction (EEA/UK under GDPR, California
            under CCPA/CPRA, Brazil under LGPD, etc.), you may have rights to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Strong>Access</Strong> the personal information we hold about you.
            </li>
            <li>
              <Strong>Rectify</Strong> inaccurate information.
            </li>
            <li>
              <Strong>Object to</Strong> or <Strong>restrict</Strong> certain processing.
            </li>
            <li>
              <Strong>Port</Strong> your data to another service.
            </li>
            <li>
              <Strong>Withdraw consent</Strong> (where consent is the basis of processing).
            </li>
            <li>
              <Strong>Lodge a complaint</Strong> with your local data protection authority.
            </li>
          </ul>
          <p>
            To exercise any of these rights, email <Email /> with the subject "Privacy Request." We
            will respond within the timeframe required by applicable law (typically 30 days).
          </p>
        </Section>

        <Section title="12. International Data Transfers">
          <p>
            The Service is operated from the United States. By using the Service, you understand
            that your information will be transferred to and processed in the United States and
            other countries where our service providers operate, which may have different data
            protection laws than your home country. Where required, we implement Standard
            Contractual Clauses or other lawful transfer mechanisms with our processors.
          </p>
        </Section>

        <Section title="13. Data Security">
          <p>We use industry-standard security measures:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>TLS encryption for all data in transit.</li>
            <li>Encryption at rest for stored photos and database records.</li>
            <li>
              Row-Level Security (RLS) policies to ensure users can only read or modify their own
              data.
            </li>
            <li>
              Secure storage of authentication tokens via iOS Keychain and Android Keystore.
            </li>
            <li>Database-backed rate limiting on sensitive endpoints to mitigate abuse.</li>
            <li>Sentry-based monitoring for security and stability incidents.</li>
          </ul>
          <p>
            No method of transmission or storage is 100% secure. We cannot guarantee absolute
            security and disclaim liability to the fullest extent permitted by law for security
            incidents beyond our reasonable control.
          </p>
        </Section>

        <Section title="14. Disclaimer of Warranties">
          <p className="uppercase text-drip-textSecondary text-sm tracking-wide">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING (BUT NOT LIMITED TO) WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR UNINTERRUPTED
            OPERATION.
          </p>
          <p>
            <Strong>AI score and feedback disclaimer.</Strong> AI-generated outfit ratings and
            feedback are produced by automated language models for{' '}
            <Strong>styling and entertainment purposes</Strong>. Results are inherently subjective
            and may contain errors. The Service is not a substitute for personal styling advice
            from a qualified professional, and you should not rely on AI feedback for any
            consequential decision.
          </p>
          <p>We do not guarantee:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The accuracy, completeness, or reliability of any AI rating or feedback.</li>
            <li>That the Service will be free from interruptions, defects, or security vulnerabilities.</li>
            <li>
              That any specific outcome (visibility, leaderboard rank, or user reaction) will
              result from your use of the Service.
            </li>
          </ul>
        </Section>

        <Section title="15. Limitation of Liability">
          <p className="uppercase text-drip-textSecondary text-sm tracking-wide">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL RYON LABS, ITS
            OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, AFFILIATES, OR LICENSORS BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING (BUT NOT
            LIMITED TO) LOSS OF PROFITS, DATA, GOODWILL, REPUTATION, OR OTHER INTANGIBLE LOSSES,
            ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF (OR INABILITY TO USE) THE SERVICE —
            WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY
            OTHER LEGAL THEORY — EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p className="uppercase text-drip-textSecondary text-sm tracking-wide">
            OUR TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THIS POLICY OR THE
            SERVICE IS LIMITED TO THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS
            PRECEDING THE CLAIM, OR (B) USD $50.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties or the limitation
            or exclusion of liability for incidental or consequential damages. In such
            jurisdictions, our liability shall be limited to the greatest extent permitted by law.
          </p>
        </Section>

        <Section title="16. Indemnification">
          <p>
            You agree to defend, indemnify, and hold harmless Ryon Labs, its officers, directors,
            employees, agents, affiliates, and licensors from and against any claims, liabilities,
            damages, losses, or expenses (including reasonable attorneys' fees) arising out of or
            relating to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your access to or use of the Service.</li>
            <li>Content you upload, publish, or share through the Service.</li>
            <li>Your violation of this Policy or our Terms of Service.</li>
            <li>Your violation of any law or the rights of any third party.</li>
          </ul>
        </Section>

        <Section title="17. Wellbeing Notice">
          <p>
            Dripsta rates <Strong>outfits, not people</Strong>. Our AI is configured to comment on
            clothing fit, color harmony, and style composition only — it does not score or comment
            on your body, weight, skin, attractiveness, or identity. If outfit-rating apps may
            negatively affect your wellbeing, please consider whether the App is right for you.
          </p>
        </Section>

        <Section title="18. Subscriptions, Refunds & In-App Purchases">
          <p>
            Subscriptions are managed by <Strong>Apple</Strong> (App Store) or{' '}
            <Strong>Google</Strong> (Play Store). Pricing, billing cycles, and renewal terms are
            presented at the time of purchase. Subscriptions auto-renew unless cancelled at least
            24 hours before the end of the current period.
          </p>
          <p>Refunds are governed by the platform from which you purchased:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Strong>Apple:</Strong>{' '}
              <Link href="https://reportaproblem.apple.com">https://reportaproblem.apple.com</Link>
            </li>
            <li>
              <Strong>Google:</Strong>{' '}
              <Link href="https://play.google.com/store/account">
                https://play.google.com/store/account
              </Link>
            </li>
          </ul>
          <p>We do not issue refunds directly. We do not control platform refund decisions.</p>
        </Section>

        <Section title="19. Service Modifications & Termination">
          <p>
            We may modify, suspend, or discontinue the Service (or any feature) at any time, with
            or without notice. We may terminate or suspend your account if you violate this Policy
            or our Terms of Service, abuse the Service, or engage in conduct that harms other
            users or our reputation.
          </p>
          <p>
            Upon termination, the rights granted to you to use the Service cease immediately.
            Sections that by their nature should survive termination (including disclaimer of
            warranties, limitation of liability, indemnification, governing law, and dispute
            resolution) will continue to apply.
          </p>
        </Section>

        <Section title="20. Changes to This Policy">
          <p>
            We may update this Policy from time to time. The "Last Updated" date at the top
            reflects the most recent revision. If we make material changes, we will notify you via
            the App or by email (if we have one on file). Your continued use of the Service after
            the updated Policy takes effect constitutes acceptance of the changes.
          </p>
        </Section>

        <Section title="21. Governing Law & Dispute Resolution">
          <p>
            This Policy is governed by the laws of the{' '}
            <Strong>State of Wyoming, United States</Strong>, without regard to its
            conflict-of-laws principles. Any dispute arising out of or relating to the Service or
            this Policy shall be resolved exclusively in the state or federal courts located in
            Wyoming, and you consent to personal jurisdiction in those courts.
          </p>
          <p>
            If any provision of this Policy is held invalid or unenforceable, the remaining
            provisions remain in full force and effect.
          </p>
        </Section>

        <Section title="22. Contact Us">
          <p>For privacy questions, data requests, or to report a concern, contact:</p>
          <p>
            <Strong>Ryon Labs</Strong>
            <br />
            <Email />
          </p>
          <p>
            We aim to respond to privacy inquiries within five business days and to formal data
            subject requests within the timeframe required by applicable law.
          </p>
        </Section>

        <p className="text-xs italic text-drip-textTertiary border-t border-drip-border/30 pt-6">
          This Privacy Policy is provided in English. Translations may be available for
          convenience; in the event of a conflict, the English version controls.
        </p>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="space-y-4">
    <h2 className="display text-xl md:text-2xl text-drip-text mb-4">{title}</h2>
    {children}
  </section>
);

const SubTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-base font-semibold text-drip-text mt-6 mb-2">{children}</h3>
);

const Strong: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <strong className="text-drip-text font-semibold">{children}</strong>
);

const Email: React.FC = () => (
  <a href="mailto:info@ryonlabs.com" className="text-drip-primary underline">
    info@ryonlabs.com
  </a>
);

const Link: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-drip-primary underline break-all">
    {children}
  </a>
);

const Row: React.FC<{ provider: string; purpose: string; data: string }> = ({
  provider,
  purpose,
  data,
}) => (
  <tr>
    <td className="px-4 py-3 align-top text-drip-text font-medium">{provider}</td>
    <td className="px-4 py-3 align-top">{purpose}</td>
    <td className="px-4 py-3 align-top">{data}</td>
  </tr>
);
