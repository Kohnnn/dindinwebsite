# Telemetry Guide

## Overview

This site uses `posthog-js` for anonymous client-side telemetry. There is no dedicated analytics backend, no authenticated identity, and no form submission tracking in the current implementation.

The telemetry layer lives in `src/components/TelemetryProvider.tsx` and is mounted from `src/app/layout.tsx`.

For dashboard and insight setup, see `docs/posthog-playbook.md`.

## Environment Variables

Set these in Vercel and optionally in `.env.local`:

```bash
NEXT_PUBLIC_POSTHOG_KEY=phc_your_project_key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

Use `https://eu.i.posthog.com` if the PostHog project is hosted in the EU region.

## Current Events

### Route and Content

- `$pageview`
- `project_detail_viewed`
- `recognition_detail_viewed`
- `section_viewed`
- `exit_section`

### Click and Intent

- `nav_click`
- `nav_cta_click`
- `hero_cta_click`
- `project_card_click`
- `recognition_card_click`
- `experience_role_selected`
- `certification_opened`
- `contact_click`
- `resume_download`
- `project_asset_open`
- `back_to_portfolio_click`
- `mobile_menu_toggle`

### Passive Engagement

- `scroll_depth_reached`
- `time_on_page_reached`
- `return_visit`
- `rage_click_detected`
- `dead_click_detected`

### Session and Source Summaries

- `session_path_summary`
- `session_quality_summary`
- `source_quality_summary`
- `project_comparison_detected`

## Important Properties

Most events include:

- `page_path`
- `page_search`
- `page_url`
- `page_referrer`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `page_category`
- `page_slug`

Click events often include:

- `interaction_context`
- `interaction_destination`
- `interaction_label`
- `interaction_section`
- `interaction_tag`

## Session Flags

`session_quality_summary` may contain:

- `deep_reader`
- `project_explorer`
- `contact_intent`
- `resume_intent`
- `quick_bounce`

`source_quality_summary` may contain:

- `high_quality_source`
- `low_quality_source`
- `comparison_intent`

## Event Notes

### `scroll_depth_reached`

Fires at `25`, `50`, `75`, and `90` percent scroll depth.

### `time_on_page_reached`

Fires at `30`, `60`, and `120` seconds if the visitor is still on the same route.

### `session_path_summary`

Tracks tab-scoped route history in `sessionStorage`.

Important fields:

- `path_history`
- `path_depth`
- `previous_path`
- `unique_paths`

### `session_quality_summary`

Emits once when the route is hidden, unloaded, or replaced.

Important fields:

- `session_flags`
- `sections_viewed`
- `sections_viewed_count`
- `seconds_on_page`
- `max_scroll_depth`
- `time_milestones_reached`
- `clicked_contact`
- `clicked_project`
- `downloaded_resume`
- `last_visible_section`
- `compared_project_slugs`
- `path_history`

### `source_quality_summary`

Maps engagement quality to the current source.

Important fields:

- `acquisition_source`
- `source_quality_flags`
- `session_flags`
- `seconds_on_page`
- `max_scroll_depth`
- `clicked_contact`
- `clicked_project`
- `downloaded_resume`
- `compared_project_count`

### `project_comparison_detected`

Fires when two or more unique project detail pages are viewed in the same tab session.

Important fields:

- `compared_project_slugs`
- `compared_project_count`

### `dead_click_detected`

Fires when a visitor clicks a non-interactive element that looks like a false affordance.

Important fields:

- `interaction_label`
- `interaction_tag`
- `interaction_target`
- `click_x`
- `click_y`

### `rage_click_detected`

Fires when the same target is clicked repeatedly in a short burst.

Important fields:

- `interaction_destination`
- `interaction_label`
- `interaction_section`
- `clicks_in_burst`
- `burst_window_ms`

## Privacy Notes

- Tracking is anonymous by default.
- `mailto:` and `tel:` destinations are sanitized before sending.
- There is no user identification or CRM linking in the current setup.
- If consent gating is required, mount `TelemetryProvider` only after consent is granted.

## Deploy Workflow

Telemetry code changes do not reach PostHog until the site is redeployed.

After telemetry changes:

1. Redeploy in Vercel.
2. Open the site in an incognito window.
3. Browse multiple routes and click tracked elements.
4. Verify the new events inside PostHog `Events` or `Activity`.

## Suggested PostHog Insights

1. Funnel: homepage -> `project_card_click` -> `project_detail_viewed` -> `contact_click`
2. Breakdown: `source_quality_summary` by `acquisition_source`
3. Trend: `resume_download` by `utm_source`
4. Trend: `project_comparison_detected`
5. Breakdown: `exit_section` by `section_name`
6. Breakdown: `dead_click_detected` by `interaction_target`
7. Breakdown: `session_quality_summary` by `session_flags`

## Next Logical Backend Step

If the site later adds a real contact form or login, the next improvements should be:

1. Track successful form submission server-side
2. Identify known users or leads with `posthog.identify()`
3. Send conversion truth from backend endpoints instead of only browser intent
