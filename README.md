# Hazel Ho Portfolio

Next.js 14 portfolio site for Hazel Ho, focused on case studies, recognition, and direct contact pathways.

## Local Setup

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Telemetry

The site includes a lightweight PostHog integration for anonymous visitor telemetry.

1. Create a PostHog project.
2. Copy `.env.example` to `.env.local`.
3. Fill in your project values:

```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

If the PostHog key is missing, telemetry stays disabled.

### Events Captured

- `$pageview` on route changes
- `section_viewed` for homepage sections as visitors scroll
- `scroll_depth_reached`
- `time_on_page_reached`
- `return_visit`
- `nav_click` and `nav_cta_click`
- `hero_cta_click`
- `project_card_click`
- `recognition_card_click`
- `project_detail_viewed`
- `recognition_detail_viewed`
- `experience_role_selected`
- `certification_opened`
- `contact_click`
- `resume_download`
- `project_asset_open`
- `back_to_portfolio_click`
- `mobile_menu_toggle`
- `rage_click_detected`

Each event is enriched with page path, full URL, referrer, and any `utm_*` params present in the URL.

Passive engagement tracking also captures:

- scroll milestones at 25%, 50%, 75%, and 90%
- time-on-page milestones at 30s, 60s, and 120s
- return visits after 30 minutes away from the site in the same browser
- rage clicks when the same target is clicked repeatedly in a short burst

### Notes

- Tracking is anonymous by default. There is no logged-in identity flow in this project.
- `mailto:` and `tel:` targets are sanitized before sending so the analytics payload does not include the raw email address or phone number.
- If you need consent-gated analytics for EU traffic, gate `TelemetryProvider` behind your cookie consent flow before initializing PostHog.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
