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
    [v] Navbar
      [] skeleton
      [] styling
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

# Responsive
  [] Responsive style all component and pages


# BUGS
  [] Safari
    [] css keyframes don't work properly (might need webkit for translate)
    [v] css opacity keyframes don't work properly
      - display block was being applied right away on safari for some reason.
    [] dialog element isn't displayed
        

