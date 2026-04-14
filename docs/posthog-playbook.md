# PostHog Playbook

## Purpose

This guide explains how to use the telemetry events from `docs/telemetry.md` inside PostHog to answer practical questions about portfolio traffic, content engagement, and conversion intent.

## First Dashboards To Build

### 1. Portfolio Funnel

Question:
Which visitors move from landing on the site to reading case studies and then showing contact intent?

Build a funnel:

1. `$pageview` filtered to `page_path = /`
2. `project_card_click`
3. `project_detail_viewed`
4. `contact_click`

Break down by:

- `utm_source`
- `acquisition_source`
- `page_slug`

### 2. Source Quality Dashboard

Question:
Which traffic sources bring useful visitors instead of shallow traffic?

Use:

- Trend: `source_quality_summary`
- Breakdown by `acquisition_source`
- Breakdown by `source_quality_flags`

Best filters:

- `source_quality_flags contains high_quality_source`
- `source_quality_flags contains low_quality_source`

### 3. Project Interest Dashboard

Question:
Which case studies pull the most real attention?

Use:

- Trend: `project_detail_viewed`
- Breakdown by `page_slug`
- Trend: `project_asset_open`
- Trend: `project_comparison_detected`

Helpful interpretation:

- high `project_detail_viewed` + high `project_asset_open` = strong interest
- high `project_detail_viewed` + low time/depth = curiosity but weak retention

### 4. Content Consumption Dashboard

Question:
Do visitors actually read the page?

Use:

- Trend: `scroll_depth_reached`
- Trend: `time_on_page_reached`
- Breakdown: `session_quality_summary` by `session_flags`
- Breakdown: `exit_section` by `section_name`

Look for:

- strong `deep_reader` sessions
- common exit sections
- whether users reach `projects` or `contact`

### 5. UX Friction Dashboard

Question:
Where do people get confused or frustrated?

Use:

- Trend: `dead_click_detected`
- Trend: `rage_click_detected`
- Breakdown: `dead_click_detected` by `interaction_target`
- Breakdown: `rage_click_detected` by `interaction_section`

Look for repeated targets or sections with unusual friction.

## Recommended Saved Insights

Create these as separate saved insights:

1. `Resume downloads by source`
Event: `resume_download`
Breakdown: `utm_source`

2. `Contact intent by source`
Event: `session_quality_summary`
Filter: `session_flags contains contact_intent`
Breakdown: `page_referrer` or `utm_source`

3. `Quick bounce rate by source`
Event: `source_quality_summary`
Filter: `source_quality_flags contains low_quality_source`
Breakdown: `acquisition_source`

4. `High-quality sessions by source`
Event: `source_quality_summary`
Filter: `source_quality_flags contains high_quality_source`
Breakdown: `acquisition_source`

5. `Project comparison behavior`
Event: `project_comparison_detected`
Breakdown: `compared_project_count`

6. `Last section before exit`
Event: `exit_section`
Breakdown: `section_name`

## Practical Questions And Which Events Answer Them

### Which visitors are worth more attention?

Use:

- `source_quality_summary`
- `session_quality_summary`

Look for:

- `high_quality_source`
- `deep_reader`
- `contact_intent`
- `resume_intent`

### Which sections lose people?

Use:

- `exit_section`
- `section_viewed`

Compare:

- sections that are viewed often
- sections that are the last visible section often

### Which projects make people compare options?

Use:

- `project_detail_viewed`
- `project_comparison_detected`

### Which campaign sends people who actually read?

Use:

- `source_quality_summary`
- `scroll_depth_reached`
- `time_on_page_reached`

### Where is the UX misleading?

Use:

- `dead_click_detected`
- `rage_click_detected`

## Suggested Filters

Common useful filters in PostHog:

- `page_category = homepage`
- `page_category = project_detail`
- `page_slug = blood-is-our-mark`
- `utm_source is set`
- `session_flags contains deep_reader`
- `source_quality_flags contains high_quality_source`
- `source_quality_flags contains low_quality_source`

## Interpretation Notes

- A click event is intent, not guaranteed business outcome.
- `contact_click` does not mean an email was sent.
- `resume_download` does not guarantee the PDF was fully read.
- `dead_click_detected` is heuristic and may contain some noise.
- `rage_click_detected` is heuristic and signals likely frustration, not certainty.

## Good Operating Routine

Use this weekly:

1. Check source quality by `acquisition_source`
2. Check top `page_slug` values for project interest
3. Review `exit_section` to find drop-off zones
4. Review `dead_click_detected` and `rage_click_detected`
5. Review whether `contact_intent` and `resume_intent` are rising or falling

## When To Add Backend Tracking

Move beyond browser-only telemetry when you need to track:

1. confirmed contact form submissions
2. CRM lead creation
3. newsletter signup completion
4. authenticated identity
5. real conversion attribution
