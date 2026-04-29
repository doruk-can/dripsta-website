import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="display text-4xl md:text-5xl mb-2">Terms of Service</h1>
      <p className="text-sm text-drip-textTertiary mb-12">
        Effective Date: April 29, 2026 · Last Updated: April 29, 2026
      </p>

      <div className="space-y-10 text-drip-textSecondary leading-relaxed">
        <p>
          These Terms of Service ("Terms") govern your access to and use of the Dripsta mobile
          application (the "App") and related services (collectively, the "Service"), provided by
          Ryon Labs, a company organized under the laws of the State of Wyoming, United States
          ("Dripsta," "we," "us," or "our").
        </p>
        <p>
          By creating an account, downloading, installing, or using the Service, you agree to be
          bound by these Terms and our{' '}
          <a href="#/privacy" className="text-drip-primary underline">
            Privacy Policy
          </a>
          . <Strong>If you do not agree, do not use the Service.</Strong>
        </p>

        <Section title="1. Service Description">
          <p>
            Dripsta is a mobile application that uses artificial intelligence to evaluate outfit
            photos submitted by users and provide style scores, feedback, and related social
            features (including a public Discover feed, weekly Leaderboard, public profiles, and
            referral system). The Service is provided for{' '}
            <Strong>styling and entertainment purposes only</Strong>. AI-generated ratings and
            feedback are subjective, may contain errors, and are not professional advice.
          </p>
        </Section>

        <Section title="2. Eligibility">
          <p>
            You must be at least <Strong>16 years old</Strong> to use the Service. By using the
            Service, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You are 16 years of age or older (or the local digital consent age, whichever is
              higher).
            </li>
            <li>You have the legal capacity to enter into these Terms.</li>
            <li>You are not barred from using the Service under any applicable law.</li>
            <li>
              You will use the Service in compliance with these Terms and all applicable laws.
            </li>
          </ul>
          <p>
            If you are under the age of majority in your jurisdiction, you confirm that your
            parent or legal guardian has reviewed and agreed to these Terms on your behalf.
          </p>
        </Section>

        <Section title="3. Your Account">
          <p>
            To access most features, you must create an account using{' '}
            <Strong>Sign in with Apple</Strong> or <Strong>Google Sign-In</Strong>. You are
            responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Maintaining the confidentiality of your account credentials and the security of the
              device on which the Service is installed.
            </li>
            <li>All activity that occurs under your account.</li>
            <li>
              Promptly notifying us at <Email /> if you suspect unauthorized access to your
              account.
            </li>
          </ul>
          <p>
            You may not transfer, sell, or assign your account to any other person. You may not
            create accounts using automated means, false information, or for the purpose of
            impersonating another person.
          </p>
        </Section>

        <Section title="4. License Grant">
          <p>
            Subject to your compliance with these Terms, Dripsta grants you a limited, personal,
            non-exclusive, non-transferable, non-sublicensable, revocable license to download,
            install, and use the App on a device that you own or control, solely for your
            personal, non-commercial use of the Service.
          </p>
          <p>You may not, and you may not permit any third party to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Copy, modify, adapt, translate, reverse engineer, decompile, or disassemble the App
              or any portion of the Service, except to the extent expressly permitted by
              applicable law.
            </li>
            <li>
              Distribute, sell, lease, rent, sublicense, or otherwise transfer the App or any
              portion of it.
            </li>
            <li>
              Use the App or Service for any commercial purpose or to develop a competing product.
            </li>
            <li>
              Use any robot, scraper, or automated means to access, monitor, copy, or harvest
              content from the Service.
            </li>
            <li>
              Bypass, circumvent, or attempt to bypass any access control, rate limit, security
              measure, or content moderation system.
            </li>
            <li>Use the Service in any manner that violates applicable law or these Terms.</li>
          </ul>
          <p>All rights not expressly granted to you are reserved by Dripsta and its licensors.</p>
        </Section>

        <Section title="5. User Content">
          <p>
            The Service allows you to submit, upload, post, and share content, including outfit
            photos, profile information (username, bio, country, city, social handles), captions,
            comments, reports, and other materials ("User Content").
          </p>

          <SubTitle>5.1 Your Responsibility for User Content</SubTitle>
          <p>
            <Strong>You are solely responsible for any User Content you submit through the
            Service.</Strong>{' '}
            By submitting User Content, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You own all rights, titles, and interests in your User Content, or you have obtained
              all necessary licenses, permissions, and consents to submit it.
            </li>
            <li>
              Your User Content does not violate any third party's rights (including intellectual
              property, privacy, publicity, or contractual rights) or any applicable law.
            </li>
            <li>
              Your User Content complies with these Terms and our community standards.
            </li>
            <li>
              The social media handles, identifiers, or other information you provide are accurate
              and belong to you. We do not verify these and are not liable for misattribution,
              impersonation, or links to third-party accounts.
            </li>
          </ul>

          <SubTitle>5.2 License You Grant Us</SubTitle>
          <p>
            By submitting User Content, you grant Dripsta a worldwide, non-exclusive,
            royalty-free, sublicensable, transferable license to host, store, reproduce, modify
            (for technical purposes such as resizing or compression), adapt, transmit, display,
            distribute, and publicly perform your User Content, solely for the purpose of
            operating, providing, improving, and promoting the Service. This license terminates
            when you delete the User Content or your account, except that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We may retain copies of User Content as required by law, regulation, or for
              legitimate business purposes (e.g., backups, dispute resolution, fraud prevention).
            </li>
            <li>
              Content you have published publicly may have been screenshotted, copied, or shared
              by others outside the App, and we cannot recall those copies.
            </li>
          </ul>

          <SubTitle>5.3 Public Content</SubTitle>
          <p>
            When you choose to publish a fit publicly within the App, your outfit photo, score,
            country, and username become visible:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              In the <Strong>Discover feed</Strong> to all logged-in users.
            </li>
            <li>
              On the <Strong>weekly Leaderboard</Strong> if your score is among the top
              performers.
            </li>
            <li>
              On your <Strong>public profile</Strong>.
            </li>
          </ul>
          <p>
            Anything you make public may be screenshotted, copied, or shared by others outside the
            App. <Strong>Do not publish any content you would not want others to see.</Strong> You
            can revert public content to private using the in-app option provided on the result
            screen.
          </p>

          <SubTitle>5.4 Demonstration Content</SubTitle>
          <p>
            During launch, testing, and ongoing product development, the Discover feed,
            Leaderboard, and other social surfaces may include sample posts, demonstration
            profiles, or test accounts placed by Dripsta to illustrate features and provide a
            populated user experience.
          </p>
        </Section>

        <Section title="6. Prohibited Conduct">
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Upload or share content that is unlawful, harmful, threatening, abusive, harassing,
              defamatory, vulgar, obscene, sexually explicit, hateful, racially or ethnically
              discriminatory, or otherwise objectionable.
            </li>
            <li>
              Upload nudity, sexual content, content involving minors in inappropriate contexts,
              hate symbols, or violent imagery.
            </li>
            <li>
              Impersonate any person or entity, or misrepresent your affiliation with a person or
              entity.
            </li>
            <li>Use the Service in a manner that interferes with other users' enjoyment of the Service.</li>
            <li>Engage in fraud, abuse, spam, or any deceptive practices.</li>
            <li>
              Use the Service to advertise, promote, or solicit commercial activity, unless we
              have authorized you in writing.
            </li>
            <li>
              Attempt to gain unauthorized access to any part of the Service, other users'
              accounts, or our systems.
            </li>
            <li>
              Probe, scan, or test the vulnerability of the Service or evade rate limits, content
              filters, or moderation tools.
            </li>
            <li>Use automated tools (bots, scripts, scrapers) to access or interact with the Service.</li>
            <li>
              Harvest, collect, or store personal information about other users without their
              consent.
            </li>
            <li>
              Reverse engineer, decompile, or disassemble the App except as expressly permitted
              by applicable law.
            </li>
            <li>Submit content you do not have the right to submit.</li>
            <li>
              Create multiple accounts to evade bans, manipulate rankings, exploit referrals, or
              gain unfair advantage.
            </li>
            <li>
              Attempt to manipulate your score, leaderboard rank, or other users' content through
              abuse or exploits.
            </li>
          </ul>
          <p>
            Violation of any of these rules may result in immediate suspension or termination of
            your account, removal of content, and (in serious cases) referral to law enforcement.
          </p>
        </Section>

        <Section title="7. Reporting & Moderation">
          <SubTitle>7.1 Reporting</SubTitle>
          <p>
            You can report individual posts and block other users from within the App. Reports are
            reviewed by our moderation team and AI-based content classifiers. We aim to act on
            reports within 24 hours during business days.
          </p>

          <SubTitle>7.2 Our Right to Remove Content and Suspend Accounts</SubTitle>
          <p>
            We reserve the right,{' '}
            <Strong>at our sole discretion and without prior notice</Strong>, to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Remove, refuse to display, or restrict access to any User Content we determine, in
              our sole judgment, violates these Terms, our Privacy Policy, applicable law, or
              community standards.
            </li>
            <li>
              Suspend, restrict, or permanently terminate your access to the Service for any
              reason, including but not limited to: repeated or severe violations of these Terms,
              abusive or harmful conduct, fraud, attempts to circumvent our moderation or
              anti-abuse systems, or any conduct we determine harms other users, our business, or
              the integrity of the Service.
            </li>
          </ul>
          <p>
            We are under no obligation to monitor User Content but may do so to enforce these
            Terms or comply with applicable law.
          </p>
        </Section>

        <Section title="8. Intellectual Property">
          <SubTitle>8.1 Our IP</SubTitle>
          <p>
            The Service, including the App, our logos, trademarks, branding, design, layout,
            source code, AI prompts, scoring rubrics, and all other materials provided by Dripsta,
            are the property of Ryon Labs and its licensors and are protected by intellectual
            property laws.
          </p>
          <p>
            The "DRIPSTA" name, logo, and tagline ("RATE YOUR FIT, OWN THE FEED" and similar) are
            trademarks of Ryon Labs. You may not use them without our prior written consent.
          </p>

          <SubTitle>8.2 Feedback</SubTitle>
          <p>
            If you submit feedback, suggestions, or ideas about the Service, you grant Dripsta a
            perpetual, irrevocable, royalty-free, worldwide license to use them for any purpose
            without obligation or compensation to you.
          </p>

          <SubTitle>8.3 Copyright Infringement / DMCA Notice</SubTitle>
          <p>
            We respect the intellectual property rights of others and respond to valid copyright
            infringement notices submitted under the U.S. Digital Millennium Copyright Act
            ("DMCA") and equivalent laws in other jurisdictions.
          </p>
          <p>
            If you believe content on the Service infringes your copyright, send a written notice
            to <Email /> including all of the following:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Your physical or electronic signature.</li>
            <li>Identification of the copyrighted work claimed to be infringed.</li>
            <li>
              Identification of the material claimed to be infringing, with sufficient detail
              (e.g., URL, username, fit ID) to allow us to locate it.
            </li>
            <li>Your contact information (address, telephone number, email).</li>
            <li>
              A statement that you have a good-faith belief that the use is not authorized by the
              copyright owner, its agent, or the law.
            </li>
            <li>
              A statement, under penalty of perjury, that the information in the notice is
              accurate and that you are authorized to act on behalf of the copyright owner.
            </li>
          </ol>
          <p>
            We will review valid notices and may remove or disable access to the allegedly
            infringing content. Repeat infringers' accounts may be terminated. False or bad-faith
            notices may result in liability for the sender.
          </p>
        </Section>

        <Section title="9. Subscriptions, Credits & Payments">
          <SubTitle>9.1 Subscription Plans</SubTitle>
          <p>
            The Service offers optional auto-renewable paid subscription plans, including (without
            limitation) <Strong>Dripsta Premium Weekly</Strong> and{' '}
            <Strong>Dripsta Premium Monthly</Strong>, which provide expanded analysis credits,
            premium AI features, and other benefits. The exact title, length, and price of each
            subscription are displayed within the App at the point of purchase and may vary by
            region and currency.
          </p>
          <p>
            <Strong>Fair use.</Strong> Premium plans grant a high allotment of analysis credits
            per billing period (for example, 100 per week on the Weekly plan and 500 per month on
            the Monthly plan, subject to change). While we describe Premium as offering
            effectively unlimited everyday use, the credit allotment is a fair-use cap intended to
            prevent automated abuse, scripting, or commercial exploitation, and is not a literal
            unlimited entitlement. Specific quotas are displayed within the App and may be
            adjusted from time to time. We may further restrict, throttle, or suspend access for
            any account engaged in abuse, automation, or activity that materially exceeds typical
            individual use.
          </p>

          <SubTitle>9.2 Auto-Renewal Disclosure</SubTitle>
          <p>
            Subscriptions are <Strong>auto-renewable</Strong>. By purchasing a subscription, you
            agree to the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Strong>Payment will be charged</Strong> to your Apple ID account or Google Play
              account at confirmation of purchase.
            </li>
            <li>
              <Strong>Subscription auto-renews</Strong> at the end of each billing period (weekly
              or monthly, depending on the plan) unless auto-renew is turned off{' '}
              <Strong>at least 24 hours before</Strong> the end of the current period.
            </li>
            <li>
              <Strong>Account will be charged for renewal</Strong> within 24 hours prior to the
              end of the current period at the same price as the current period (unless we have
              notified you of a price change in advance).
            </li>
            <li>
              <Strong>Auto-renewal can be turned off</Strong> at any time by going to your Account
              Settings on the App Store (Apple) or Subscriptions in Google Play (Google){' '}
              <Strong>after purchase</Strong>. See Section 9.6.
            </li>
            <li>
              <Strong>No refund</Strong> for the unused portion of the current billing period when
              you cancel, except where required by applicable law.
            </li>
          </ul>

          <SubTitle>9.3 Payment Processing</SubTitle>
          <p>
            All payments are processed by <Strong>Apple</Strong> (App Store) or{' '}
            <Strong>Google</Strong> (Play Store). We do not receive, see, or store your payment
            card details, billing address, or full payment information. Subscription state is
            verified through RevenueCat. Pricing is set in your local currency by Apple or Google
            based on the price tier we select.
          </p>

          <SubTitle>9.4 Credits</SubTitle>
          <p>
            The Service uses an in-app credit system to limit AI analyses per period. Credits are
            tied to your account and have no monetary value. Unused credits do not roll over
            between periods, are not transferable, and are not redeemable for cash or refunds.
          </p>

          <SubTitle>9.5 Refunds</SubTitle>
          <p>
            We do not issue refunds directly. Refund eligibility and processing are governed by
            the platform from which you purchased:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Strong>Apple App Store:</Strong>{' '}
              <Link href="https://reportaproblem.apple.com">https://reportaproblem.apple.com</Link>
            </li>
            <li>
              <Strong>Google Play Store:</Strong>{' '}
              <Link href="https://play.google.com/store/account">
                https://play.google.com/store/account
              </Link>
            </li>
          </ul>
          <p>Refund decisions are made by Apple or Google in their sole discretion.</p>

          <SubTitle>9.6 Cancellation</SubTitle>
          <p>You may cancel your subscription at any time:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Strong>Apple:</Strong> Settings → [your name] → Subscriptions → Dripsta → Cancel
              Subscription
            </li>
            <li>
              <Strong>Google Play:</Strong> Play Store → Profile → Payments & subscriptions →
              Subscriptions → Dripsta → Cancel
            </li>
          </ul>
          <p>
            Cancelling stops future renewals but does not entitle you to a refund for the current
            period unless required by applicable law.{' '}
            <Strong>Deleting your Dripsta account does NOT cancel your active subscription</Strong>{' '}
            — you must cancel it through the Apple or Google account interface.
          </p>

          <SubTitle>9.7 Free Trial / Promotional Offers</SubTitle>
          <p>
            If a free trial or promotional period is offered, any unused portion of that trial is
            forfeited when you purchase a subscription, where applicable.
          </p>

          <SubTitle>9.8 Price Changes</SubTitle>
          <p>
            We reserve the right to change subscription prices. We will provide notice of price
            changes through the App or by email. Where required by applicable law (including under
            California's Automatic Renewal Law), we will obtain your affirmative consent before
            any price increase takes effect. Continued use of the Service after a price change
            takes effect constitutes acceptance of the new price.
          </p>
        </Section>

        <Section title="10. AI Features Disclaimer">
          <p>
            The Service uses third-party AI providers (which may include OpenAI, Google,
            Anthropic, or others) to generate outfit ratings and feedback. We may change AI
            providers from time to time as model capabilities evolve.
          </p>
          <p>You acknowledge and agree that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              AI-generated ratings, scores, feedback, and product suggestions are produced by
              automated language models for{' '}
              <Strong>styling and entertainment purposes only</Strong>.
            </li>
            <li>
              Results are inherently subjective, may contain errors, biases, or inaccuracies, and
              are not a substitute for professional styling, fashion, medical, psychological, or
              other professional advice.
            </li>
            <li>
              The Service does not score or comment on your body, weight, skin, attractiveness,
              or identity. Our AI is configured to evaluate clothing fit, color harmony, and
              style composition only.
            </li>
            <li>You should not rely on AI feedback for any consequential decision.</li>
            <li>
              We do not guarantee the availability, accuracy, or quality of any AI feature, and
              AI features may be modified or discontinued at any time.
            </li>
          </ul>
        </Section>

        <Section title="11. Account Deletion">
          <p>
            You may delete your account at any time from{' '}
            <Strong>Settings → Delete Account</Strong>. Account deletion permanently removes your
            outfit analyses, photos, push tokens, preferences, style profile, leaderboard
            entries, and resets your credits to zero. Your profile is soft-deleted (PII cleared
            and marked deleted).
          </p>
          <p>
            <Strong>
              Important: Deleting your Dripsta account does NOT cancel any active Apple or Google
              subscription.
            </Strong>{' '}
            You must cancel subscriptions separately (see Section 9.6). If you sign back in with
            the same Apple or Google account after deletion, your subscription state may be
            restored via "Restore Purchases."
          </p>
        </Section>

        <Section title="12. Termination by Us">
          <p>
            We may suspend, restrict, or terminate your access to the Service at any time, with
            or without notice, including but not limited to circumstances where you have violated
            these Terms, abused the Service, or engaged in conduct that harms other users, our
            business, or the integrity of the Service. Upon termination:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your license to use the App ends immediately.</li>
            <li>
              We may delete your account, User Content, and any data associated with the account.
            </li>
            <li>
              Sections that by their nature should survive termination (including disclaimer of
              warranties, limitation of liability, indemnification, intellectual property,
              governing law, and dispute resolution) will continue to apply.
            </li>
          </ul>
          <p>We are not liable to you for any termination of your access to the Service.</p>
        </Section>

        <Section title="13. Disclaimer of Warranties">
          <p className="uppercase text-drip-textSecondary text-sm tracking-wide">
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING (BUT NOT LIMITED TO) WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, ACCURACY, OR UNINTERRUPTED
            OPERATION.
          </p>
          <p>Without limiting the foregoing, we do not warrant that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Service will meet your requirements or expectations.</li>
            <li>The Service will be uninterrupted, timely, secure, or error-free.</li>
            <li>Any AI-generated rating, feedback, or recommendation will be accurate or reliable.</li>
            <li>Any errors in the Service will be corrected.</li>
            <li>The Service will be free from viruses, harmful code, or third-party attacks.</li>
          </ul>
          <p>You use the Service at your own risk.</p>
        </Section>

        <Section title="14. Limitation of Liability">
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
            OUR TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR THE
            SERVICE IS LIMITED TO THE GREATER OF (A) THE AMOUNT YOU PAID US IN THE 12 MONTHS
            PRECEDING THE CLAIM, OR (B) USD $50.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion of certain warranties or the limitation
            or exclusion of liability for incidental or consequential damages. In such
            jurisdictions, our liability shall be limited to the greatest extent permitted by law.
          </p>
        </Section>

        <Section title="15. Indemnification">
          <p>
            You agree to defend, indemnify, and hold harmless Ryon Labs, its officers, directors,
            employees, agents, affiliates, and licensors from and against any claims, liabilities,
            damages, losses, or expenses (including reasonable attorneys' fees) arising out of or
            relating to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your access to or use of the Service.</li>
            <li>
              Any User Content you submit, upload, publish, or share through the Service.
            </li>
            <li>Your violation of these Terms or our Privacy Policy.</li>
            <li>
              Your violation of any law or the rights of any third party (including intellectual
              property, privacy, publicity, or contractual rights).
            </li>
            <li>
              Your use of social media handles, identifiers, or other information that does not
              belong to you or that you do not have the right to use.
            </li>
          </ul>
          <p>
            We reserve the right, at your expense, to assume the exclusive defense and control of
            any matter for which you are required to indemnify us, and you agree to cooperate with
            our defense.
          </p>
        </Section>

        <Section title="16. Apple App Store — Additional Terms">
          <p>
            If you accessed or downloaded the App from the Apple App Store, the following terms
            also apply:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Strong>Acknowledgment.</Strong> These Terms are concluded between you and Ryon
              Labs only, and not with Apple Inc. ("Apple"). Apple is not responsible for the App
              or its content.
            </li>
            <li>
              <Strong>Scope of License.</Strong> The license granted in Section 4 is limited to a
              non-transferable license to use the App on any Apple-branded products that you own
              or control, as permitted by the Apple Media Services Terms.
            </li>
            <li>
              <Strong>Maintenance and Support.</Strong> Ryon Labs is solely responsible for
              providing any maintenance and support services for the App. Apple has no obligation
              to furnish maintenance or support.
            </li>
            <li>
              <Strong>Warranty.</Strong> In the event of any failure of the App to conform to any
              applicable warranty, you may notify Apple, and Apple will refund the purchase price
              (if any) for the App. To the maximum extent permitted by law, Apple has no other
              warranty obligation with respect to the App. Any other claims, losses, liabilities,
              damages, costs, or expenses attributable to a failure to conform to a warranty are
              the sole responsibility of Ryon Labs.
            </li>
            <li>
              <Strong>Product Claims.</Strong> Ryon Labs (and not Apple) is responsible for
              addressing any claims you or a third party have relating to the App, including (but
              not limited to) product liability claims, claims that the App fails to conform to
              any applicable legal or regulatory requirement, and claims arising under consumer
              protection or similar legislation.
            </li>
            <li>
              <Strong>Intellectual Property Rights.</Strong> In the event of any third-party
              claim that the App or your use of the App infringes that third party's intellectual
              property rights, Ryon Labs (and not Apple) is solely responsible for the
              investigation, defense, settlement, and discharge of such claim.
            </li>
            <li>
              <Strong>Legal Compliance.</Strong> You represent and warrant that (a) you are not
              located in a country subject to a U.S. Government embargo or designated as a
              "terrorist supporting" country, and (b) you are not listed on any U.S. Government
              list of prohibited or restricted parties. You also agree that you will not use the
              App for any purposes prohibited by United States law, including (without limitation)
              the development, design, manufacture, or production of nuclear, missile, or chemical
              or biological weapons.
            </li>
            <li>
              <Strong>Third-Party Beneficiary.</Strong> You acknowledge and agree that Apple and
              its subsidiaries are third-party beneficiaries of these Terms, and that upon your
              acceptance of these Terms, Apple will have the right (and will be deemed to have
              accepted the right) to enforce these Terms against you as a third-party beneficiary.
            </li>
          </ul>
        </Section>

        <Section title="17. Google Play — Additional Terms">
          <p>
            If you accessed or downloaded the App from the Google Play Store, your use of the App
            is also governed by the{' '}
            <Link href="https://play.google.com/intl/en_us/about/play-terms/">
              Google Play Terms of Service
            </Link>
            . Google is not a party to these Terms and is not responsible for the App or its
            content.
          </p>
        </Section>

        <Section title="18. Wellbeing Notice">
          <p>
            Dripsta rates <Strong>outfits, not people</Strong>. Our AI is configured to comment
            on clothing fit, color harmony, and style composition only — it does not score or
            comment on your body, weight, skin, attractiveness, or identity. If outfit-rating
            apps may negatively affect your wellbeing, please consider whether the App is right
            for you.
          </p>
        </Section>

        <Section title="19. Changes to These Terms">
          <p>
            We may update these Terms from time to time. The "Last Updated" date at the top
            reflects the most recent revision. If we make material changes, we will notify you
            via the App or by email (if we have one on file). Your continued use of the Service
            after the updated Terms take effect constitutes acceptance of the changes. If you do
            not agree with the updated Terms, you must stop using the Service and may delete your
            account.
          </p>
        </Section>

        <Section title="20. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws of the{' '}
            <Strong>State of Wyoming, United States</Strong>, without regard to its
            conflict-of-laws principles. The United Nations Convention on Contracts for the
            International Sale of Goods does not apply.
          </p>
        </Section>

        <Section title="21. Dispute Resolution">
          <SubTitle>21.1 Informal Resolution</SubTitle>
          <p>
            If you have any dispute with us, you agree to first contact us at <Email /> and
            attempt in good faith to resolve the dispute informally. We will respond to your
            inquiry within a reasonable time. If a dispute cannot be resolved informally within
            30 days, either party may proceed under Section 21.2.
          </p>

          <SubTitle>21.2 Forum</SubTitle>
          <p>
            Subject to the informal resolution requirement above, any dispute, claim, or
            controversy arising out of or relating to these Terms or the Service shall be
            resolved exclusively in the state or federal courts located in{' '}
            <Strong>Wyoming, United States</Strong>, and you consent to the personal jurisdiction
            of those courts.
          </p>

          <SubTitle>21.3 Class Action Waiver</SubTitle>
          <p>
            To the maximum extent permitted by applicable law, you and Dripsta agree that each
            may bring claims against the other only in your or its individual capacity, and{' '}
            <Strong>
              not as a plaintiff or class member in any purported class, representative, or
              collective proceeding
            </Strong>
            . Unless both parties agree, no court or arbitrator may consolidate more than one
            person's claims or otherwise preside over any form of representative or class
            proceeding.
          </p>

          <SubTitle>21.4 Time Limit on Claims</SubTitle>
          <p>
            You agree that any claim arising out of or relating to these Terms or the Service
            must be filed within <Strong>one (1) year</Strong> after the cause of action arose.
            Otherwise, the claim is permanently barred.
          </p>
        </Section>

        <Section title="22. General Provisions">
          <SubTitle>22.1 Entire Agreement</SubTitle>
          <p>
            These Terms, together with our Privacy Policy and any additional terms presented to
            you within the Service, constitute the entire agreement between you and Dripsta
            regarding the Service and supersede all prior agreements, communications, and
            proposals.
          </p>

          <SubTitle>22.2 Severability</SubTitle>
          <p>
            If any provision of these Terms is held invalid or unenforceable by a court of
            competent jurisdiction, the remaining provisions remain in full force and effect.
          </p>

          <SubTitle>22.3 No Waiver</SubTitle>
          <p>
            Our failure to enforce any right or provision of these Terms shall not be deemed a
            waiver of such right or provision.
          </p>

          <SubTitle>22.4 Assignment</SubTitle>
          <p>
            You may not assign or transfer these Terms or your rights under them without our
            prior written consent. We may assign these Terms without restriction.
          </p>

          <SubTitle>22.5 Force Majeure</SubTitle>
          <p>
            We are not liable for any failure or delay in performance caused by circumstances
            beyond our reasonable control, including (but not limited to) acts of God, war,
            terrorism, riots, embargoes, government actions, fires, floods, earthquakes,
            accidents, strikes, telecommunications failures, internet outages, or third-party
            service failures.
          </p>

          <SubTitle>22.6 Contact</SubTitle>
          <p>
            For questions about these Terms, contact:
          </p>
          <p>
            <Strong>Ryon Labs</Strong>
            <br />
            <Email />
          </p>
        </Section>

        <Section title="23. Diagnostic Data and External Services">
          <SubTitle>23.1 Consent to Diagnostic Data Collection</SubTitle>
          <p>
            You agree that Dripsta may collect and use technical and diagnostic data and related
            information — including (but not limited to) information about your device, operating
            system, app version, system and application software, and peripherals — gathered
            periodically to facilitate the provision of software updates, product support,
            security monitoring, abuse prevention, and other services related to the App. We may
            use this information, in a form that does not personally identify you, to improve the
            App or to provide services or technologies to you. Further details on the data we
            collect and how it is used are described in our{' '}
            <a href="#/privacy" className="text-drip-primary underline">
              Privacy Policy
            </a>
            .
          </p>

          <SubTitle>23.2 External Services</SubTitle>
          <p>
            The App may enable access to Dripsta's and/or third-party services and websites
            (collectively, "External Services"), including AI processing partners, app store
            services, push notification services, and links to third-party websites such as
            social media platforms.{' '}
            <Strong>You agree to use External Services at your sole risk.</Strong> Dripsta is not
            responsible for examining or evaluating the content, accuracy, completeness,
            timeliness, or reliability of any third-party External Services and shall not be
            liable for them. Information displayed by the App or via External Services is for
            general informational and entertainment purposes only and is not guaranteed by
            Dripsta or its agents. You agree not to use External Services in any manner that is
            inconsistent with these Terms or that infringes the rights of any party. External
            Services may not be available in all languages or in your home country and may not be
            appropriate or available for use in any particular location. Dripsta reserves the
            right to change, suspend, remove, disable, or impose access restrictions or limits on
            any External Services at any time without notice or liability to you.
          </p>
        </Section>

        <p className="text-xs italic text-drip-textTertiary border-t border-drip-border/30 pt-6">
          These Terms are provided in English. Translations may be available for convenience; in
          the event of a conflict, the English version controls.
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
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-drip-primary underline break-all"
  >
    {children}
  </a>
);
