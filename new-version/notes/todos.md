# Todos 


## Setup
  [v] Install and create New Astro Project
  [v] Install and configure Tailwind
  [v] Install Vue
  [v] update config to run in server mode (SSR)
  [v] set folder aliasses in `tsconfig.json` so `@` can be used in imports to shorten path
  [v] install json-server
    [v] add "server" script to package.json

## Structure
  utils: 
    [v] getDateFormatted

  layout:
    [v] main layout

  pages:
    [v] index
    [v] past events
    [v] community
    [v] events page
      [] design layout
    [v] dynamic event page
      [v] fetch the event from the api
      [] 404 redirect if 404 is received from api
      [v]dates
        [v] format to correct string and render
        

    [] 404 page
      - added but marked it `_` so we don't use it yet
    
  components:
    [] Navbar
      [] skeleton
      [] links
      [] styling
      [] responsiveness
    [v] Hero
    [v] TeaserVideo
      [v] Embed Video
      [v] styling
        [v] responsiveness
    [v] Upcoming Events
      [v] fetch events
      [v] filter events to an upcomingEvents array only including events newer or equeal to today
      [v] display events data 
    [v] Past Events
      [v] fetch events
      [v] filter events to a pastEvents array only including events older than today
      [v] display events data 
    [v] Modal
      [v] overlays over whole page with content (trailer, twitter embed etc)
      [v] triggered by button click 
      [v] animates in and out smoothly
      [v] closes when clicked on (x) or outside of element
    [v] Tooltip
      [v] displays centered over buttons on hover
      [v] fades in and out
    [v] Communities
    [v] European Wide Rankings
      [v] simple section with buttons linking to the rankings pages on ssbwiki - simple but effective and low on maintenance
      [v] ranking image
      [v] trophy icon or some other ranking icon
    [] BlueSky Event Timeline on event pages
      - webcomponent to do so - https://github.com/Vincenius/bsky-embed
        - this can also load feeds, but feeds need to be created

    [v] EventFilter
      [v] filters events based text in title

    [v] SE-Teaser
    [v] Initiatives
    [v] Footer
    
    [v] UI:
      [v] EventCard
        [v] display event title
        [v] display other event data
        [] display highlights/aftermovie video button (conditionally)
      [v] EventImage
        [v] dynamically import images using `import.meta.glob`
        [v] render with Image component
      [v] RankingImage
        [v] same as EventImage code but some changes due to use in RankingCard component
      [v] InitiativeCard
        [v] display Initiative title
        [] display slot content
          [v] content
          [] buttons
        [v] styling
      [v] LinkButton
        [v] icon
        [v] props
        [v] styling
      [v] CountryCard
      [v] CountryLinks

      styling:
      [] add theme configuration to Tailwind config 
        - to use css variables.
      [] refactor tailwind colors to css variables in :root theme
        - we want to use the same classes in the components 
          - instead of using `dark:` in components all over the place
      [] configure darkmode theme
        - different colors for the same var names

  Api:
    []events
      [v] GET all events - /api/events
      [v] GET event by id - /api/events/[eventId]
        [] return `404` if event ID isn't found
      [] GET event by Slug
        - won't work with json-server, so it's for later
      [v] POST new event - /api/events
      [v] PUT event handler by ID - /api/events/[eventId] 
        - ! important to make sure we send over the full event object, JSON-SERVER replaces the whole object
      [v] DELETE event handler - /api/events/[eventId]
      [] sort events chronologically during or after fetch
        - I think we can modify the query we send to  JSON server to return a sorted result.
    [v]countries
      [v] GET all countries - /api/countries
      [v] GET country by id - /api/countries/[countryId]
        [] return `404` if event ID isn't found
      [] GET country by Slug?
        - won't work with json-server, so it's for later
      [v] POST new country - /api/countries
      [v] PUT country handler by ID - /api/countries/[countryId] 
        - ! important to make sure we send over the full country object, JSON-SERVER replaces the whole object
      [v] DELETE country handler - /api/countries/[countryId]

    Self Hosting:
      [] configure coolify.io in a local setup
      [] configure coolify.io on hetzner.com VPS (requires hosting plan)

# Responsive
  [] Responsive style all component and pages

# Deployment
[] manually copy over this folder to (production repo) smasheurope.com for each version release
  - handle events and country updates in that repository, work on development features in this repository
  [] explore how can manually commit this folder using node scripts when we want to commit to production, but do it manual for now.
[] deploy from (production repo) to GH pages 
[] move old website to old folder in same (production) repository, this is just archived


# BUGS
  [v] Safari <= 17 
    [v] css transition 'allow-discrete' doesn't work with display property
    [] TODO: remove dependency of transition when this is supported in all safari's (probably in 2026)
      - https://caniuse.com/?search=allow-discrete
        

